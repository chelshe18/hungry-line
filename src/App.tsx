import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Queue_tracking from "../screens/queue_tracking";
import Waiting_line from "../screens/waiting_line";
import Notification from "../screens/notification";

export default function App() {
  return (
    <View style={styles.container}>
      <Queue_tracking />{}
    </View>
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

