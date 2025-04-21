import React from "react";
import { Posts } from '../../components/Posts'
import { Container } from "../../components/Container";
import { Typo } from "../../components/Typo";

const INITIAL_POSTS = [
    {
        id: 1,
        title: 'Post 1',
        image: 'https://u.9111s.ru/uploads/202303/25/7a8360b3410f3f55ca642268e98fa08a.jpg'
    },
    {
        id: 2,
        title: 'Post 2',
        image: 'https://u.9111s.ru/uploads/202303/25/7a8360b3410f3f55ca642268e98fa08a.jpg'
    },
    {
        id: 3,
        title: 'Post 3',
        image: 'https://u.9111s.ru/uploads/202303/25/7a8360b3410f3f55ca642268e98fa08a.jpg'
    },
    {
        id: 4,
        title: 'Post 4',
        image: 'https://u.9111s.ru/uploads/202303/25/7a8360b3410f3f55ca642268e98fa08a.jpg'
    },
    {
        id: 5,
        title: 'Post 5',
        image: 'https://u.9111s.ru/uploads/202303/25/7a8360b3410f3f55ca642268e98fa08a.jpg'
    }
]

export const MainPage = () => (
    <>
        <Container>
            <Typo>Свежие публикации</Typo>
            <Posts posts={INITIAL_POSTS} />
        </Container>
    </>
)