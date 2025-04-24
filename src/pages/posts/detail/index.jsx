import React, { useEffect } from "react";
import { useParams } from "react-router-dom"
import { Typo } from '../../../components/Typo'
import { Container } from "../../../components/Container";
import { Link } from '../../../components/Link'
import { getPostById, showPost } from "../../../redux/slices/postsSlice";
import { useSelector, useDispatch } from "react-redux"

import * as SC from './styles'

export const DetailPostPage = () => {
    const { id } = useParams()
    const { list } = useSelector((state) => state.posts.posts)
    const postForView = useSelector((state) => state.posts.postForView)
    const dispatch = useDispatch()

    useEffect(() => {
        const intId = Number(id)
        const findedPost = list ? list.find((item) => item.id === Number(id)) : undefined

        if (findedPost){
            dispatch(showPost(findedPost))
        } else {
            dispatch(getPostById(intId))
        }
    }, [id, dispatch, list])

    if (postForView.loading) {
        return <Container>Loading...</Container>
    }

    if (!postForView.post || !('id' in postForView.post)) {
        return <>Пост не найден</>;
    }

    const { post } = postForView

    const image = post.image || 'https://u.9111s.ru/uploads/202303/25/7a8360b3410f3f55ca642268e98fa08a.jpg'

    return (
        <Container>
            <Typo>{post.title}</Typo>
            <SC.Image src={image} alt={post.title} />
            <SC.Text>{post.body}</SC.Text>
            <div style={{ clear: 'both' }} />
            <SC.LinkWrapper>
                <Link to={'/posts/'}>Обратно к публикациям</Link>
                <Link to={`/posts/${post.id}/edit`}>Редактировать</Link>
            </SC.LinkWrapper>
        </Container>
    )
}