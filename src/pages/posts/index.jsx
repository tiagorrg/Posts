import React from "react";
import { Container } from "../../components/Container";
import { Posts } from "../../components/Posts";
import { Typo } from "../../components/Typo";
import { useSelector } from 'react-redux'
import { useEffect } from "react";
import { getPosts } from "../../redux/slices/postsSlice";
import { useDispatch } from "react-redux"

export const PostsPage = () => {
    const { list, loading } = useSelector((state) => state.posts.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        if(!list){
            dispatch(getPosts())
        }
    }, [list, dispatch])

    if(!list && loading) {
        return <Container>Loading...</Container>
    }
    
    if(!list) {
        return <>404</>
    }

    return <Container>
        <Typo>Публикации</Typo>
        <Posts posts={list} />
    </Container>
    
}