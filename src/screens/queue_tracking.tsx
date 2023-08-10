import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../firebase.config";
import { generate } from "random-words";
import Ellipse from "../components/ellipse";
import * as Progress from "react-native-progress";

type QueueTrackingProps = NativeStackScreenProps<
  RootStackParamList,
  "QueueTracking"
>;

export default function QueueTracking({
  navigation,
  route,
}: QueueTrackingProps) {
  const secretCode = String(generate());

  setDoc(doc(db, "dining-halls", route.params.hallId, "codes", secretCode), {
    code: secretCode,
  });

  // Go back to dining screen after 20 seconds
  setTimeout(() => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Dining" }],
    });
  }, 20000);

  return (
    <View style={styles.container}>
      <Ellipse />
      <Text style={styles.title}>Your seat is ready!</Text>
      <Progress.Bar
        progress={1}
        width={250}
        height={11}
        style={styles.progressBar}
        color={"#A4D0A4"}
        borderWidth={4}
        borderRadius={10}
        unfilledColor={"#617A55"}
      />
      <Text style={styles.secretText}>Secret Code: {secretCode}</Text>
      <Text style={styles.midText}>
        {" "}
        Please show the dinning hall staff this confirmation page and tell them
        the secret code :D
      </Text>
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
  title: {
    color: "#000",
    fontSize: 20,
    fontStyle: "normal",
    fontFamily: "poppins-semibold",
    lineHeight: 23,
    marginBottom: 25,
  },
  progressBar: {
    width: 300,
    borderRadius: 20,
    marginBottom: 25,
  },
  secretText: {
    backgroundColor: "#f7e1ae",
    color: "#393A39",
    borderColor: "black",
    padding: 20,
    fontSize: 16,
    lineHeight: 23,
    textAlign: "center",
    fontFamily: "poppins-bold",
    marginBottom: 30,
    borderRadius: 15,
  },
  midText: {
    color: "#000",
    fontSize: 16,
    fontStyle: "normal",
    fontFamily: "poppins-semibold",
    lineHeight: 23,
    width: 273,
    height: 73,
    textAlign: "center",
  },
});
