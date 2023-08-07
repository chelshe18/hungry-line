import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Notification from "./screens/notification";
import Hungryline from "./screens/hungryline";
import Login from "./screens/login";
import Registration from "./screens/registration";
import WaitingLine from "./screens/waiting_line";
import QueueStatus from "./screens/queue_status";
import Dining from "./screens/dining";
import QueueTracking from "./screens/queue_tracking";

//SplashScreen.preventAutoHideAsync();

export type RootStackParamList = {
  Hungryline: undefined;
  Login: undefined;
  Registration: undefined;
  Queuestatus: undefined;
  Waiting_line: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const getFonts = () =>
  Font.loadAsync({
    "poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "poppins-extrabold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
    "poppins-light": require("./assets/fonts/Poppins-Light.ttf"),
    "poppins-medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "poppins-semibold": require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Hungryline"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Hungryline" component={Hungryline} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Dining" component={Dining} />
        <Stack.Screen name="QueueStatus" component={QueueStatus} />
        <Stack.Screen name="WaitingLine" component={WaitingLine} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="QueueTracking" component={QueueTracking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

