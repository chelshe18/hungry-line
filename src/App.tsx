import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Notification from "../screens/notification";
import Hungryline from "../screens/hungryline";
import Login from "../screens/login";

export type RootStackParamList = {
  Hungryline: undefined;
  Login: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    // <Hungryline />
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Hungryline"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Hungryline" component={Hungryline} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
