import axios from "axios";

const blogPosts = axios.create({
  baseURL:
    "http://b71d-2400-adc1-168-8c00-5cb5-ee7d-c629-fc09.ngrok.io/blogposts",
  timeout: 3000,
});

export const getAllBlogPosts = () =>
  blogPosts
    .get("")
    .then((res) => res)
    .catch((e) => console.log("Error occurred", e));
export const getBlogPostById = (postId) =>
  blogPosts
    .get(`/${postId}`)
    .then((res) => res)
    .catch((e) => console.log("Error occurred", e));
export const addBlogPost = (post) =>
  blogPosts
    .post(``, post)
    .then((res) => res)
    .catch((e) => console.log("Error occurred", e));
export const editBlogPost = (post) =>
  blogPosts
    .put(`/${post.id}`, post)
    .then((res) => res)
    .catch((e) => console.log("Error occurred", e));
export const deleteBlogPost = (post) =>
  blogPosts
    .delete(`/${post.id}`)
    .then((res) => res)
    .catch((e) => console.log("Error occurred", e));
