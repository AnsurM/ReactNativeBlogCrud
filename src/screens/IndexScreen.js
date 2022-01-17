import React, { useEffect } from "react";
import { View, Button, FlatList } from "react-native";
import BlogListItem from "../components/BlogListItem";
import { useBlogContext } from "../contexts/BlogContext";
import { addBlogPost, deleteBlogPost, getAllBlogPosts } from "../api/blogposts";

export default function IndexScreen({ navigation }) {
  const {
    blogPosts,
    editBlogPost,
    deleteBlogPost: deleteBlogPostContext,
    setBlogPosts,
  } = useBlogContext();

  const mountBlogPosts = async () => {
    const response = await getAllBlogPosts();
    if (response.data) setBlogPosts(response.data);
  };

  useEffect(() => {
    mountBlogPosts();

    const listener = navigation.addListener("didFocus", () => mountBlogPosts());

    return () => listener.remove();
  }, []);

  const addPost = async () => {
    const response = await addBlogPost({
      title: "My New Blog Post",
      description: "Hello Cool people!",
    });
    if (response.data) mountBlogPosts();
  };

  const deletePost = async (post) => {
    const response = await deleteBlogPost(post);
    if (response.data) mountBlogPosts();
  };

  const onEditItem = (post) => {
    navigation.navigate("EditItem", {
      post,
      onEdit: editBlogPost,
    });
  };

  return (
    <View>
      <Button title="Add Post" onPress={addPost} />
      <FlatList
        keyExtractor={(post) => post.id}
        data={blogPosts}
        renderItem={({ item: post }) => (
          <BlogListItem item={post} onEdit={onEditItem} onDelete={deletePost} />
        )}
      />
    </View>
  );
}
