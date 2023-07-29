import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Notification from "../screens/notification";
import Hungryline from "../screens/hungryline";
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      
    </>
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
