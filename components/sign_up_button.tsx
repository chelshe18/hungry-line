import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function SignUpButton({ text, onPress }) {
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
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "right",
    textAlignVertical: "center",
    paddingVertical: 10,
  },
});
