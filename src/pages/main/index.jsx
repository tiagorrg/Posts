import React from "react";
import { Posts } from '../../components/Posts'
import { Container } from "../../components/Container";
import { Typo } from "../../components/Typo";
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import { getFreshPosts } from "../../redux/slices/postsSlice";

export const MainPage = () => {
    const dispatch = useDispatch()
    const postForView = useSelector((state) => state.posts.postForView)
    const freshPosts = useSelector((state) => state.posts.freshPosts)

    useEffect(() => {
        dispatch(getFreshPosts())
    }, [dispatch])

    return (
        <Container>
            {freshPosts &&
                <>
                    <Typo>Свежие посты</Typo>
                    <Posts posts={freshPosts}/>
                </>
            }
            {postForView &&
                <>
                    <Typo>Последний просмотренный пост</Typo>
                    <Posts posts={[postForView]}/>
                </>
            }
        </Container>
    )
}
