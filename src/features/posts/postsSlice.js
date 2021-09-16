import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllCommentsInPost, getAllPosts } from "./posts.service";

const initialState = {
  posts: [],
  loading: false,
  error: null,
  commentsLoading: false,
};

export const getPostsAsync = createAsyncThunk("posts/fetchPosts", async () => {
  return getAllPosts();
});

export const getCommentsAsync = createAsyncThunk(
  "posts/fetchCommentsPost",
  async (postId) => {
    return { id: postId, comments: await getAllCommentsInPost(postId) };
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addComment: (state, action) => {
      const comment = action.payload;
      const post = state.posts.find((p) => p.id === comment.postId);
      if (!post.comments) post.comments = [];
      post.comments.push(comment);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPostsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.posts = action.payload;
      })
      .addCase(getPostsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getPostsAsync.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getCommentsAsync.fulfilled, (state, action) => {
        const post = state.posts.find((p) => p.id === action.payload.id);
        if (!post) return state;
        const postWithComments = {
          ...post,
          comments: action.payload.comments,
        };
        const newState = {
          ...state,
          posts: state.posts.map((p) => {
            if (p.id === post.id) {
              return postWithComments;
            }
            return p;
          }),
        };
        newState.commentsLoading = false;
        return newState;
      })
      .addCase(getCommentsAsync.pending, (state, action) => {
        state.commentsLoading = true;
      })
      .addCase(getCommentsAsync.rejected, (state, action) => {
        state.commentsLoading = false;
      });
  },
});

export const { addComment } = postsSlice.actions;

export default postsSlice.reducer;
