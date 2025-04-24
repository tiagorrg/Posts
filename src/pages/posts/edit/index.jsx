import React from "react";
import { PostForm } from "../components/PostForm"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editPost } from "../../../redux/slices/postsSlice";

export const EditPostPage = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const { list } = useSelector((state) => state.posts.posts)

    const intId = Number(id)

    const onSubmitForm = (formValues) => {
        dispatch(editPost(formValues))
    }

    if(!list) {
        return <>Пост не найден</>
    }

    const findedPost = list.find((item) => item.id === Number(intId)) 

    return <PostForm title={`Редактирование поста с id ${id}`} onSubmitForm={onSubmitForm} defaultValues={findedPost}/>
}