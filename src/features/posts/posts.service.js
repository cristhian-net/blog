const baseUrl = "https://jsonplaceholder.typicode.com";

export const getAllPosts = async () => {
  const response = await fetch(`${baseUrl}/posts`);
  return response.json();
};

export const getAllCommentsInPost = async (postId) => {
  const response = await fetch(`${baseUrl}/posts/${postId}/comments`);
  return response.json();
};
