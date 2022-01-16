import React from "react";
import { View, Button, FlatList } from "react-native";
import BlogListItem from "../components/BlogListItem";
import { useBlogContext } from "../contexts/BlogContext";

export default function IndexScreen({ navigation }) {
  const { blogPosts, addBlogPost, editBlogPost, deleteBlogPost } =
    useBlogContext();

  const onEditItem = (post) => {
    navigation.navigate("EditItem", {
      post,
      onEdit: editBlogPost,
    });
  };

  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        keyExtractor={(post) => post.id}
        data={blogPosts}
        renderItem={({ item: post }) => (
          <BlogListItem
            item={post}
            onEdit={onEditItem}
            onDelete={deleteBlogPost}
          />
        )}
      />
    </View>
  );
}
