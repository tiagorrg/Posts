import React, { useState } from "react";
import { Posts } from '../../components/Posts'
import { Container } from "../../components/ui/Container";
import { Typo } from "../../components/ui/Typo";
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import { getFreshPosts } from "../../redux/slices/postsSlice";
import Loader from "../../components/ui/Loader";
import { Button } from "../../components/ui/Button";
import * as SC from "./styles"
import { filterPosts } from "./utils";
import { Input } from "../../components/ui/Input";

const POSTS_PAGE = 9

export const MainPage = () => {
    const dispatch = useDispatch()
    const { post } = useSelector((state) => state.posts.postForView)
    const { posts, loading } = useSelector((state) => state.posts.freshPosts)

    const [page, setPage] = useState(1)
    const [disabled, setDisabled] = useState({
        left: true,
        right: true
    })
    const [postsPage, setPostsPage] = useState(null)
    const [filteredPosts, setFilteredPosts] = useState(null)
    const [defaultPosts, setDefaultPosts] = useState(null)

    useEffect(() => {
        if (!posts) {
            dispatch(getFreshPosts())
        }

        setFilteredPosts(posts)
    }, [dispatch, posts])

    useEffect(() => {
        if (!filteredPosts || !filteredPosts.length) {
            setDisabled({ left: true, right: true });
            return;
        }

        const totalPages = Math.ceil(filteredPosts.length / POSTS_PAGE);
        const offset = (page - 1) * POSTS_PAGE;

        setDisabled({
            left: page <= 1,
            right: page >= totalPages
        });

        setPostsPage(filteredPosts.slice(offset, offset + POSTS_PAGE));
    }, [page, filteredPosts]);

    const buttonLeft = () => {
        setPage(page - 1)
    }

    const buttonRight = () => {
        setPage(page + 1)
    }

    const sortPosts = (direction, posts) => {
        setPage(1)
        return [...posts].sort((a, b) => {
            switch (direction) {
                case 'asc':
                    return a.title.localeCompare(b.title);
                case 'desc':
                    return b.title.localeCompare(a.title);
                default:
                    return posts
            }
        })
    }

    return (
        <Container>
            {loading && <Loader />}
            {posts &&
                <>
                    <Typo>Свежие посты</Typo>

                    <SC.SearchAndSortWrapper>
                        <SC.FormSearchFilter onSubmit={(e) => {
                            e.preventDefault()
                            setPage(1)
                            setDefaultPosts(filterPosts(posts, e.target.search.value))
                            setFilteredPosts(filterPosts(posts, e.target.search.value))
                        }}>
                            <Input type="text" placeholder="Название поста" name="search" />
                            <Button type="submit">Найти</Button>
                        </SC.FormSearchFilter>

                        <div>
                            <input
                                type="radio"
                                id="opt1"
                                name="switch"
                                onChange={() => setFilteredPosts(sortPosts('default', defaultPosts))}
                            />
                            <label htmlFor="opt1">Default</label>

                            <input
                                type="radio"
                                id="opt2"
                                name="switch"
                                onChange={() => setFilteredPosts(sortPosts('asc', filteredPosts))}
                            />
                            <label htmlFor="opt2">A-Z</label>

                            <input
                                type="radio"
                                id="opt3"
                                name="switch"
                                onChange={() => setFilteredPosts(sortPosts('desc', filteredPosts))}
                            />
                            <label htmlFor="opt3">Z-A</label>
                        </div>
                    </SC.SearchAndSortWrapper>

                    {filteredPosts && filteredPosts.length > 0
                        ? <>
                            <SC.PageButtonWrapper>
                                <Button onClick={buttonLeft} disabled={disabled.left}>Left</Button>
                                <Button onClick={buttonRight} disabled={disabled.right}>Right</Button>
                            </SC.PageButtonWrapper>

                            <Posts posts={postsPage} />

                            <SC.PageButtonWrapper>
                                <Button onClick={buttonLeft} disabled={disabled.left}>Left</Button>
                                <Button onClick={buttonRight} disabled={disabled.right}>Right</Button>
                            </SC.PageButtonWrapper>
                        </>
                        : <SC.TextUnFind>Посты не найдены</SC.TextUnFind>}
                </>
            }
            {post &&
                <>
                    <Typo>Последний просмотренный пост</Typo>
                    <Posts posts={[post]} />
                </>
            }
        </Container>
    )
}
