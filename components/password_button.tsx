import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

type props = {
  onPress: () => void;
};

export default function PasswordButton({ onPress }: props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}> Forgot Password </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 16,
    paddingHorizontal: 5,
    width: 200,
    paddingBottom: 50,
    alignSelf: "flex-end",
  },
  buttonText: {
    color: "#a2cea2",
    fontFamily: "poppins-semibold",
    fontSize: 15,
    textAlign: "right",
    textAlignVertical: "center",
    padding: 2,
  },
});
