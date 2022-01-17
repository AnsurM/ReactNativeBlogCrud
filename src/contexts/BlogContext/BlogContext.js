import React, { createContext, useState } from "react";
import uuid from "react-native-uuid";

export const BlogContext = createContext();

export const BlogContextProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([]);

  const blogContextValue = {
    setBlogPosts,
    blogPosts,
  };

  return (
    <BlogContext.Provider value={blogContextValue}>
      {children}
    </BlogContext.Provider>
  );
};
