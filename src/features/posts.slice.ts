import { Post } from "@/components/postCard"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "@/store"
import { getPosts } from "./posts.action"

export interface PostState {
    isLoading: boolean
    posts: Post[] 
    error: string | null
}

const initialState: PostState = {
    isLoading: false,
    posts: [],
    error: null,
}

export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        clearPosts: (state) => {
            state.posts = []
            state.error = null
            state.isLoading = false
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.isLoading = false
                state.posts = action.payload as any
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload as string
            })
    },
})

export const selectPosts = (state: RootState) => state.post.posts
export const selectIsLoading = (state: RootState) => state.post.isLoading
export const selectError = (state: RootState) => state.post.error

export const { clearPosts } = postSlice.actions
export const postReducer = postSlice.reducer
