import React from "react";
import { Posts } from '../../components/Posts'
import { Container } from "../../components/ui/Container";
import { Typo } from "../../components/ui/Typo";
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import { getFreshPosts } from "../../redux/slices/postsSlice";
import Loader from "../../components/ui/Loader";

export const MainPage = () => {
    const dispatch = useDispatch()
    const { post } = useSelector((state) => state.posts.postForView)
    const { posts, loading } = useSelector((state) => state.posts.freshPosts)

    useEffect(() => {
        dispatch(getFreshPosts())
    }, [dispatch])

    return (
        <Container>
            {loading && <Loader/>}
            {posts &&
                <>
                    <Typo>Свежие посты</Typo>
                    <Posts posts={posts}/>
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
