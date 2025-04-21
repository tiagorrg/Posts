import React from "react";
import { Link } from '../../../Link'

import * as SC from './styles'

export const Post = ({post}) => (<SC.Post>
    <SC.Image src={post.image} alt={post.title} />
    <SC.Title>{post.title}</SC.Title>
    <Link to={`/posts/${post.id}`}>Читать далее</Link>
</SC.Post>)