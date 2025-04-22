import React from "react";
import { Container } from "../../components/Container";
import { Posts } from "../../components/Posts";
import { Typo } from "../../components/Typo";
import { useSelector } from 'react-redux'

export const PostsPage = () => {
    const posts = useSelector((state) => state.posts.list)

    return <Container>
        <Typo>Публикации</Typo>
        <Posts posts={posts} />
    </Container>
    
}