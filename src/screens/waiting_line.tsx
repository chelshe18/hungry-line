import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { deleteDoc, doc } from "firebase/firestore";
import { FIREBASE_AUTH, db } from "../../firebase.config";
import { collection, onSnapshot } from "firebase/firestore";
import Ellipse from "../components/ellipse";
import * as Progress from "react-native-progress";
import Button from "../components/button";
import QueueCount from "../components/queue_count";

type WaitingLineProps = NativeStackScreenProps<
  RootStackParamList,
  "WaitingLine"
>;

export default function WaitingLine({ navigation }: WaitingLineProps) {
  const totalPeople = QueueCount(); // total number of people in the queue
  const waitingPeople = 1; // people ahead of you
  const progress = (totalPeople - waitingPeople) / totalPeople;
  const auth = FIREBASE_AUTH;
  const user = {
    email: auth.currentUser?.email,
    id: auth.currentUser?.uid,
  };
  const [firstInQueue, setFirstInQueue] = useState(0);

  onSnapshot(collection(db, "queue"), (snapshot) => {
    let timestamps: number[] = [];
    snapshot.docs.forEach((doc) => {
      timestamps.push({ ...doc.data() }.joinedAt);
    });
    setFirstInQueue(Math.min.apply(Math, timestamps));
    //console.log(Math.min.apply(Math, timestamps));
  });

  console.log(firstInQueue);

  const handlePress = () => {
    deleteDoc(doc(db, "queue", user.id ? user.id : ""));
    navigation.pop();
  };

  return (
    <View style={styles.container}>
      <Ellipse />
      <Text style={styles.title}>
        {waitingPeople} {waitingPeople == 1 ? "person" : "people"} waiting ahead
        of you
      </Text>
      <Progress.Bar
        progress={progress}
        width={null}
        height={18}
        style={styles.progressBar}
        color="#A4D0A4"
        unfilledColor="#617A55"
        borderWidth={0}
      />
      <Text style={styles.staticText}>
        Estimate wait times:
        <Text style={styles.dynamicText}> 11 minutes</Text>
      </Text>
      <Image style={styles.image} source={require("../assets/map.png")} />
      <Button text="Quit The Queue" onPress={handlePress} />
      <Button
        text="TEMP BUTTON: Notification"
        onPress={() => {
          navigation.navigate("Notification");
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

  title: {
    color: "#000",
    fontSize: 17,
    fontStyle: "normal",
    fontFamily: "poppins-semibold",
    lineHeight: 23,
    marginBottom: 22,
  },

  progressBar: {
    width: 300,
    borderRadius: 20,
    marginBottom: 25,
  },

  staticText: {
    backgroundColor: "#F7E1AE",
    color: "#000",
    padding: 15,
    textAlign: "center",
    fontSize: 15,
    fontStyle: "normal",
    fontFamily: "poppins-semibold",
    lineHeight: 23,
    marginBottom: 30,
    borderRadius: 15,
  },

  dynamicText: {
    color: "#617A55",
    fontSize: 15,
    fontFamily: "poppins-semibold",
  },

  image: {
    marginBottom: 40,
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
});
