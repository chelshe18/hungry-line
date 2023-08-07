import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

type props = {
  text: string;
  onPress: () => void;
};

export default function SignUpButton({ text, onPress }: props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}> {text} </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 16,
    paddingHorizontal: 0,
    width: 59,
    paddingBottom: 30,
    alignSelf: "flex-end",
  },
  buttonText: {
    color: "#a2cea2",
    fontFamily: "poppins-semibold",
    fontSize: 14,
    textAlign: "center",
    textAlignVertical: "center",
    paddingVertical: 10,
  },
});
