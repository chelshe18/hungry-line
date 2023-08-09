import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { FIREBASE_AUTH, db } from "../../firebase.config";
import Ellipse from "../components/ellipse";
import Button from "../components/button";
import { setDoc, getDoc, doc } from "firebase/firestore";
import QueueCount from "../components/queue_count";

type QueueStatusProps = NativeStackScreenProps<
  RootStackParamList,
  "QueueStatus"
>;

export default function QueueStatus({ navigation, route }: QueueStatusProps) {
  const auth = FIREBASE_AUTH;
  const user = {
    email: auth.currentUser?.email,
    id: auth.currentUser?.uid,
  };
  const images = new Map([
    ["community-dining-center", require("../assets/dining_hall_1.jpg")],
    ["downtown-hall", require("../assets/dining_hall_2.jpg")],
    ["dumpling-dining-center", require("../assets/dining_hall_3.jpg")],
  ]);
  const hallId = route.params.hallId;
  //const collectionRef = collection(db, "current-line-queue");

  const joinQueue = () => {
    const joinedAt = Date.now();
    setDoc(doc(db, "dining-halls", hallId, "queue", user.id ? user.id : ""), {
      email: user.email,
      joinedAt: joinedAt,
    });
    navigation.navigate("WaitingLine", {
      hallId: hallId,
      time: joinedAt,
    });
  };

  const [hallName, setHallName] = useState("");
  const docRef = doc(db, "dining-halls", hallId);
  getDoc(docRef).then((docSnap) => {
    if (docSnap.exists()) {
      setHallName(docSnap.data().name);
    }
  });

  return (
    <View style={styles.container}>
      <Ellipse />
      <Text style={styles.heading}>{hallName}</Text>
      <Image style={styles.image} source={images.get(hallId)} />
      <Text style={styles.midText}>
        There {QueueCount(hallId) == 1 ? "is" : "are"} currently
        <Text style={{ color: "#CF4F4F" }}>
          {" "}
          {QueueCount(hallId)} {QueueCount(hallId) == 1 ? "person" : "people"}{" "}
        </Text>
        ahead of you in the queue.
      </Text>
      <Text style={styles.staticText}>
        Estimate wait times:
        <Text style={styles.dynamicText}>
          {" "}
          {QueueCount(hallId)} {QueueCount(hallId) == 1 ? "minute" : "minutes"}
        </Text>
      </Text>
      <Text style={styles.subtitle}>If you join the queue now</Text>
      <View style={{ marginBottom: 10 }}>
        <Button text="Join queue" onPress={joinQueue} />
      </View>
      <Button
        text="Switch Dining Halls"
        onPress={() => {
          navigation.pop();
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
    width: 280,
    height: 160,
    marginBottom: 24,
  },
  heading: {
    fontFamily: "poppins-bold",
    fontSize: 22,
    color: "#617a44",
    padding: 25,
    textAlign: "center",
    marginTop: 40,
  },
  midText: {
    color: "#000",
    fontSize: 16,
    fontStyle: "normal",
    fontFamily: "poppins-semibold",
    lineHeight: 23,
    width: 300,
    height: 75,
    textAlign: "center",
  },
  staticText: {
    backgroundColor: "#F7E1AE",
    color: "#000",
    padding: 15,
    textAlign: "center",
    fontSize: 16,
    fontStyle: "normal",
    fontFamily: "poppins-semibold",
    lineHeight: 23,
    borderRadius: 15,
  },
  subtitle: {
    color: "#000",
    fontSize: 13,
    fontFamily: "poppins-regular",
    marginTop: 10,
    marginBottom: 25,
  },
  dynamicText: {
    color: "#617A55",
    fontFamily: "poppins-semibold",
    fontSize: 16,
  },
});
