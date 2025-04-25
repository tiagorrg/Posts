import React from "react";
import { Container } from "../../components/ui/Container";
import { Posts } from "../../components/Posts";
import { Typo } from "../../components/ui/Typo";
import { useSelector } from 'react-redux'
import { useEffect } from "react";
import { getPosts } from "../../redux/slices/postsSlice";
import { useDispatch } from "react-redux"
import Loader from "../../components/ui/Loader";

export const PostsPage = () => {
    const { list, loading } = useSelector((state) => state.posts.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        if(!list){
            dispatch(getPosts())
        }
    }, [list, dispatch])

    if(!list && loading) {
        return <Container><Loader /></Container>
    }
    
    if(!list) {
        return <>404</>
    }

    return <Container>
        <Typo>Публикации</Typo>
        <Posts posts={list} />
    </Container>
    
}