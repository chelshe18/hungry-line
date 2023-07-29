import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Notification from "../screens/notification";
import Queue_tracking from "../screens/queue_tracking";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <StatusBar style="auto" />
    // </View>
    <Queue_tracking />
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
