import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

type props = {
  text: string;
  onPress: () => void;
};

export default function Button({ text, onPress }: props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 16,
    paddingHorizontal: 20,
    marginTop: 5,
    width: 301,
    height: 60,
    backgroundColor: "#a4d0a4",
  },
  buttonText: {
    color: "#fff8d6",
    fontFamily: "poppins-bold",
    fontSize: 16,
    textAlign: "center",
    textAlignVertical: "center",
    padding: 18,
  },
});
