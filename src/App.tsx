import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Notification from "../screens/notification";
import Hungryline from "../screens/hungryline";
import Login from "../screens/login";
import Registration from "../screens/registration";
import Waiting_line from "../screens/waiting_line";
import Queuestatus from "../screens/queue_status";
import Dining from "../screens/dining";

export type RootStackParamList = {
  Hungryline: undefined;
  Login: undefined;
  Registration: undefined;
  Queuestatus: undefined;
  Waiting_line: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator
    //     initialRouteName="Hungryline"
    //     screenOptions={{ headerShown: false }}
    //   >
    //     <Stack.Screen name="Hungryline" component={Hungryline} />
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="Registration" component={Registration} />
    //     <Stack.Screen name="Queuestatus" component={Queuestatus}/>
    //     <Stack.Screen name="Waiting_line" component={Waiting_line}/>
    //   </Stack.Navigator>
    // </NavigationContainer>
    <Dining />
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

