import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Notification from "../screens/notification";
import Hungryline from "../screens/hungryline";
import Login from "../screens/login";
import Registration from "../screens/registration";
import WaitingLine from "../screens/waiting_line";
import Queuestatus from "../screens/queue_status";
import Dining from "../screens/dining";

//SplashScreen.preventAutoHideAsync();

export type RootStackParamList = {
  Hungryline: undefined;
  Login: undefined;
  Registration: undefined;
  Queuestatus: undefined;
  WaitingLine: undefined;
  Dining: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const getFonts = () =>
  Font.loadAsync({
    "poppins-regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "poppins-bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "poppins-extrabold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "poppins-light": require("../assets/fonts/Poppins-Light.ttf"),
    "poppins-medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "poppins-semibold": require("../assets/fonts/Poppins-SemiBold.ttf"),
  });

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await getFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

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
        <Stack.Screen name="Queuestatus" component={Queuestatus} />
        <Stack.Screen name="WaitingLine" component={WaitingLine} />
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
