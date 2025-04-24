import React from "react";
import { Link } from '../../../ui/Link'

import * as SC from './styles'

export const Post = ({ post }) => {
    const image = post.image || 'https://u.9111s.ru/uploads/202303/25/7a8360b3410f3f55ca642268e98fa08a.jpg'

    return (<SC.Post>
        <SC.Image src={image} alt={post.title} />
        <SC.Title>{post.title}</SC.Title>
        <Link to={`/posts/${post.id}`}>Читать далее</Link>
    </SC.Post>)
}