import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";
import { getPostsAsync } from "./postsSlice";

export const Posts = () => {
  const dispatch = useDispatch();
  const { loading, posts, error } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPostsAsync());
  }, []);
  return (
    <div>
      {loading && "Loading posts..."}
      {error && "Something went wrong, try again later"}
      {posts &&
        posts.length > 0 &&
        posts.map((p, i) => <Post key={i} post={p} />)}
    </div>
  );
};

export default Posts;
