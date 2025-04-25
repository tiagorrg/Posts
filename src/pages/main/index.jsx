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

    useEffect(() => {
        if (!posts){
            dispatch(getFreshPosts())
        }
    }, [dispatch, posts])

    useEffect(() => {
        if (!posts || !posts.length) {
            setDisabled({ left: true, right: true });
            return;
        }
    
        const totalPages = Math.ceil(posts.length / POSTS_PAGE);
        const offset = (page - 1) * POSTS_PAGE;
    
        setDisabled({
            left: page <= 1,
            right: page >= totalPages
        });
    
        setPostsPage(posts.slice(offset, offset + POSTS_PAGE));
    }, [page, posts]);

    const buttonLeft = () => {
        setPage(page - 1 )
    }

    const buttonRight = () => {
        setPage(page + 1 )
    }

    return (
        <Container>
            {loading && <Loader/>}
            {posts &&
                <>
                    <Typo>Свежие посты</Typo>

                    <SC.PageButtonWrapper>
                        <Button onClick={buttonLeft} disabled={disabled.left}>Left</Button>
                        <Button onClick={buttonRight} disabled={disabled.right}>Right</Button>
                    </SC.PageButtonWrapper>

                    <Posts posts={postsPage}/>

                    <SC.PageButtonWrapper>
                        <Button onClick={buttonLeft} disabled={disabled.left}>Left</Button>
                        <Button onClick={buttonRight} disabled={disabled.right}>Right</Button>
                    </SC.PageButtonWrapper>
                </>
            }
            {post &&
                <>
                    <Typo>Последний просмотренный пост</Typo>
                    <Posts posts={[post]}/>
                </>
            }
        </Container>
    )
}
