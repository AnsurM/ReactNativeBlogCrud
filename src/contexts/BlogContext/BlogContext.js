import React, { createContext, useState } from "react";
import uuid from "react-native-uuid";

export const BlogContext = createContext();

export const BlogContextProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([]);

  const getPostIndex = (post) =>
    currentPosts.findIndex((pt) => pt.id === post.id);

  const addBlogPost = (post) => {
    const postToAdd = {
      id: uuid.v4(),
      title: `Blog Post # ${blogPosts.length + 1}`,
      ...post,
    };
    setBlogPosts((posts) => [...posts, postToAdd]);
  };
  const editBlogPost = (post) => {
    let currentPosts = [...blogPosts];
    currentPosts[getPostIndex(post)] = post;
    setBlogPosts(currentPosts);
  };
  const deleteBlogPost = (post) => {
    let currentPosts = [...blogPosts];
    currentPosts.splice(getPostIndex(post), 1);
    setBlogPosts(currentPosts);
  };

  const blogContextValue = {
    blogPosts,
    addBlogPost,
    editBlogPost,
    deleteBlogPost,
  };

  return (
    <BlogContext.Provider value={blogContextValue}>
      {children}
    </BlogContext.Provider>
  );
};
