import React from "react";
import { PostForm } from "../components/PostForm";
import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/slices/postsSlice";

export const AddPostPage = () => {
    const dispatch = useDispatch()

    const onSubmitForm = (formValues) => {
        dispatch(addPost(formValues))
    }

    return (
        <>
            <PostForm title={'Добавление нового поста'} onSubmitForm={onSubmitForm}/>
        </>
    )
}