import { createSlice } from '@reduxjs/toolkit'

export const postSlice = createSlice({
    name: 'posts',
    initialState: {
        value: 0
    },
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload
        },
        editPost: (state, action) => {

        },
        getPost: (state, action) => {

        },
        addPost: (state, action) => {

        },
    }
})

export const { setPosts, editPost, getPost, addPost} = postSlice.actions

export default postSlice.reducer