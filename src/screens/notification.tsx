import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { FIREBASE_AUTH } from "../../firebase.config";
import Timer from "../components/timer";
import Ellipse from "../components/ellipse";
import Button from "../components/button";

type NotificationProps = NativeStackScreenProps<
  RootStackParamList,
  "Notification"
>;

export default function Notification({ navigation, route }: NotificationProps) {
  const auth = FIREBASE_AUTH;
  const hallId = route.params.hallId;

  return (
    <View style={styles.container}>
      <Ellipse />
      <Image style={styles.image} source={require("../assets/noti.png")} />
      <Text style={styles.midText}>
        Hi {auth.currentUser?.displayName}, your table is almost ready. Please
        arrive within 5 minutes or your position in the queue will be canceled.
      </Text>
      <Timer
        onFinish={() => {
          navigation.navigate("QueueStatus", { hallId: hallId });
        }}
      />
      <Button
        text="Here"
        onPress={() => {
          navigation.navigate("QueueTracking", { hallId: hallId });
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
    marginTop: 60,
  },

  midText: {
    color: "#000",
    lineHeight: 23,
    fontSize: 16,
    fontStyle: "normal",
    fontFamily: "poppins-semibold",
    width: 275,
    height: 108,
    flexShrink: 0,
    marginTop: 68,
    marginLeft: 15,
    marginBottom: 3,
    textAlign: "center",
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
    // verticalAlign:"middle",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    fontSize: 15,
    // fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "600",
  },
});
