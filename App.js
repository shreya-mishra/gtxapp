import * as React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Employee from "./screens/Employee_screen";
import Homepage from "./screens/Homepage";
import ProjectScreen from "./screens/ProjectScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Homepage} />
        <Drawer.Screen name="Project" component={ProjectScreen} />
        <Drawer.Screen name="Employee" component={Employee} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
