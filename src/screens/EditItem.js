import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { editBlogPost } from "../api/blogposts";

export default function EditItem({ navigation }) {
  const originalPost = navigation.getParam("post");
  const onEdit = navigation.getParam("onEdit");

  const [post, setPost] = useState(originalPost);

  const onChange = (title) => {
    let tempPost = { ...post };
    tempPost.title = title;
    setPost(tempPost);
  };

  const onChangeDescription = (description) => {
    let tempPost = { ...post };
    tempPost.description = description || "";
    setPost(tempPost);
  };

  const editPost = async (post) => {
    const response = await editBlogPost(post);
    if (response.data) navigation.navigate("Index");
  };

  const onSubmit = () => {
    editPost(post);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputGroup}>
        <Text style={styles.titleText}>Title</Text>
        <View style={styles.fullRow}>
          <TextInput
            value={post.title}
            style={styles.titleInput}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={onChange}
          />
        </View>
      </View>
      <View style={styles.descriptionGroup}>
        <Text style={styles.titleText}>Description</Text>
        <View style={styles.fullRow}>
          <TextInput
            value={post.description}
            style={styles.descriptionInput}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={onChangeDescription}
          />
        </View>
      </View>
      <Button title="Save" onPress={onSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
  },
  fullRow: {
    flexDirection: "row",
  },
  inputGroup: {
    marginHorizontal: 3,
  },
  titleText: {
    marginHorizontal: 4,
    marginVertical: 4,
  },
  titleInput: {
    flex: 1,
    padding: 5,
    backgroundColor: "#04ab9c",
    borderRadius: 5,
  },
  descriptionGroup: {
    minHeight: 100,
    marginHorizontal: 3,
    marginVertical: 10,
  },
  descriptionInput: {
    flex: 1,
    padding: 5,
    backgroundColor: "#04ab9c",
    borderRadius: 5,
  },
});
