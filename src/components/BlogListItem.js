import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function BlogListItem({ item, onEdit, onDelete }) {
  return (
    <View style={styles.container}>
      <View style={styles.itemRow}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.actionsRow}>
          <TouchableOpacity style={styles.action} onPress={() => onEdit(item)}>
            <Feather name="edit" size={20} color="#0549ac" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.action}
            onPress={() => onDelete(item)}
          >
            <Feather name="trash" size={20} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 3,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: "#0549ac",
    borderRadius: 5,
  },
  actionsRow: {
    flexDirection: "row",
  },
  action: {
    marginHorizontal: 2,
  },
});
