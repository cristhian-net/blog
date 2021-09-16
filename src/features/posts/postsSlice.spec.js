import postsReducer, { addComment, getPostsAsync } from "./postsSlice";

describe("postsSlice reducers", () => {
  const initialState = {
    posts: [
      {
        userId: 1,
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      },
    ],
    loading: false,
    error: null,
    commentsLoading: false,
  };
  it("should handle initial state", () => {
    expect(postsReducer(undefined, { type: "unknown" })).toEqual({
      posts: [],
      loading: false,
      error: null,
      commentsLoading: false,
    });
  });

  it("should add single comment to a post", () => {
    const comment = {
      postId: 1,
      id: Date.now(),
      name: "Cristhian",
      email: "cvalencia@sparkdigital.com",
      body: "my_comment",
    };
    const actual = postsReducer(initialState, addComment(comment));
    const post = actual.posts[0];
    expect(post.comments.length).toEqual(1);
    expect(post.comments[0].name).toEqual("Cristhian");
    expect(post.comments[0].body).toEqual("my_comment");
  });

  it("should set loading to false when getPostsAsync is fullfiled", () => {
    const action = { type: getPostsAsync.fulfilled.type };
    const state = postsReducer(initialState, action);
    expect(state.loading).toBe(false);
  });
  it("should set error to false when getPostsAsync is fullfiled", () => {
    const action = { type: getPostsAsync.fulfilled.type };
    const state = postsReducer(initialState, action);
    expect(state.error).toBe(false);
  });
  it("should load posts getPostsAsync is fullfiled", () => {
    const action = {
      type: getPostsAsync.fulfilled.type,
      payload: [{ ...initialState.posts[0] }],
    };
    const state = postsReducer(initialState, action);
    expect(state.posts.length).toEqual(1);
    expect(state.posts[0].body).toEqual(
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
    );
  });
});
