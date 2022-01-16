import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { BlogContextProvider } from "./src/contexts/BlogContext";
import EditItem from "./src/screens/EditItem";
import IndexScreen from "./src/screens/IndexScreen";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    EditItem: EditItem,
  },
  { initialRouteName: "Index", defaultNavigationOptions: { title: "Blogs" } }
);

const App = createAppContainer(navigator);
export default () => {
  return (
    <BlogContextProvider>
      <App />
    </BlogContextProvider>
  );
};
