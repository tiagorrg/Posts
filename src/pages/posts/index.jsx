import React from "react";
import { Container } from "../../components/Container";
import { Posts } from "../../components/Posts";
import { Typo } from "../../components/Typo";
import { INITIAL_POSTS } from "./constants";

export const PostsPage = () => (
    <>
        <Typo>Публикации</Typo>
        <Container>
            <Posts posts={INITIAL_POSTS} />
        </Container>
    </>
)