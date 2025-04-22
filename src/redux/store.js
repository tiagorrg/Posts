import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './slices/postsSlice'

export const store = configureStore ({
    reducer: {
        posts: postsReducer
    }
})