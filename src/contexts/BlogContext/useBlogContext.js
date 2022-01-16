import { useContext } from "react";
import { BlogContext } from "./BlogContext";

export const useBlogContext = () => {
  return useContext(BlogContext);
};
