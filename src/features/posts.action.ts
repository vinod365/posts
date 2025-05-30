
import { Post } from "@/components/postCard";
import axiosInstance from "@/config/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk<Post[]>(
  "post/getPosts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get<Post[]>("/posts");
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.message || "Failed to fetch posts");
    }
  }
);
