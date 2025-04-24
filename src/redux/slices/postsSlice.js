import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { postsAPI } from '../../api/postsAPI'

export const getPostById = createAsyncThunk (
    'posts/fetchById',
    async (postId) => {
        return await postsAPI.fetchById(postId)
    }
)

export const getPosts = createAsyncThunk (
    'posts/fetchPosts',
    async () => {
        return await postsAPI.fetchPosts()
    }
)

export const getFreshPosts = createAsyncThunk (
    'posts/fetchFreshPosts',
    async (limit) => {
        return await postsAPI.fetchFreshPosts(limit)
    }
)

export const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: {
            list: null,
            loading: false
        },
        postForView: {
            post: null,
            loading: false
        },
        freshPosts: {
            posts: null,
            loading: false
        },
    },
    reducers: {
        editPost: (state, action) => {

        },
        addPost: (state, action) => {
            const newPost = {...action.payload}

            newPost.id = new Date().getTime()
            state.posts.list = state.posts.list ? [ ...state.posts.list, newPost ] : [newPost]
        },
        showPost: (state, action) => {
            state.postForView = {
                post: action.payload,
                loading: false
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getPostById.pending, (state) => {
            state.postForView = {
                post: null,
                loading: true
            }
        })
        builder.addCase(getPostById.fulfilled, (state, action) => {
            state.postForView = {
                post: action.payload,
                loading: false
            }
        })
        builder.addCase(getPosts.pending, (state) => {
            state.posts = {
                list: null,
                loading: true
            }
        })
        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.posts = {
                list: action.payload,
                loading: false
            }
        })
        builder.addCase(getFreshPosts.pending, (state) => {
            state.freshPosts = {
                posts: null,
                loading: true
            }
        })
        builder.addCase(getFreshPosts.fulfilled, (state, action) => {
            state.freshPosts = {
                posts: action.payload,
                loading: false
            }
        })
    }
})

export const { editPost, addPost, showPost} = postSlice.actions

export default postSlice.reducer