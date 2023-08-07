import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import Ellipse from "../components/ellipse";
import Button from "../components/button";

type HungrylineProps = NativeStackScreenProps<RootStackParamList, "Hungryline">;

export default function Hungryline({ navigation }: HungrylineProps) {
  return (
    <View style={styles.container}>
      <Ellipse />
      <Image style={styles.image} source={require("../assets/Picture1.png")} />
      <Text style={styles.heading}>Hungry Line </Text>
      <Text style={styles.midText}>
        Say goodbye to the frustration of long queues and hello to a seamless,
        time-saving dining experience!
      </Text>
      <Button
        text="Get started"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8D6",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginTop: 17,
    marginLeft: 3.4,
    marginRight: 3.4,
    width: 318,
    height: 179,
  },

  midText: {
    color: "#000",
    marginLeft: 40,
    marginRight: 40,
    paddingTop: 20,
    paddingBottom: 40,
    fontSize: 16,
    fontFamily: "poppins-regular",
  },

  button: {
    backgroundColor: "#A4D0A4",
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#A4D0A4",
    width: 301,
    height: 60,
  },

  textButton: {
    color: "#FFF8D6",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "600",
  },

  heading: {
    fontFamily: "poppins-bold",
    fontSize: 32,
    color: "#617a44",
    padding: 10,
    textAlign: "center",
    marginTop: 50,
  },
});
