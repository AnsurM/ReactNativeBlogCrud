import React from "react";
import { View, Text, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useBlogContext } from "../contexts/BlogContext";

export default function IndexScreen() {
  const { blogPosts, addBlogPost } = useBlogContext();

  return (
    <View>
      <Text>Index Screen</Text>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        keyExtractor={(post) => post.id}
        data={blogPosts}
        renderItem={({ item: post }) => (
          <>
            <Text>{post.title}</Text>
          </>
        )}
      />
    </View>
  );
}
