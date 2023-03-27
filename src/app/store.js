import { configureStore } from "@reduxjs/toolkit";
import postsReducers from '../features/posts/postsSlice'

export const store = configureStore({
    reducer: {
        posts: postsReducers
    }
})