import React from "react";
import { useParams } from "react-router-dom"
import { INITIAL_POSTS } from "../constants";
import { useMemo } from "react";
import { Typo } from '../../../components/Typo'
import { Container } from "../../../components/Container";
import { Link } from '../../../components/Link'

import * as SC from './styles'

export const DetailPostPage = () => {
    const { id } = useParams()
    const currentPost = useMemo(() => INITIAL_POSTS.find((item) => item.id === Number(id)), [id])

    if (!currentPost) return <>Пост не найден</>

    return (
        <Container>
            <Typo>{currentPost.title}</Typo>
            <SC.Image src={currentPost.image} alt={currentPost.title} />
            <SC.Text>{currentPost.text}</SC.Text>
            <div style={{ clear: 'both' }} />
            <SC.LinkWrapper>
                <Link to={'/posts/'}>Обратно к публикациям</Link>
            </SC.LinkWrapper>
        </Container>
    )
}