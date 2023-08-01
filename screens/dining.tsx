import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Card from "../components/card";

export default function Dining() {
  return (
    <View style={styles.container}>
      <View style={styles.top}></View>
      <View style={styles.bottom}>
        <Card
          name="Community Dining Center"
          time="9pm"
          open={true}
          image={require("../assets/dining_hall_1.jpg")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },

  top: {
    backgroundColor: "#A4D0A4",
    height: "40%",
  },

  bottom: {
    backgroundColor: "#FFF8D6",
    height: "60%",
  },
});
