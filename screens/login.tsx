import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../src/App";
import { Formik } from "formik";
import LoginButton from "../components/button";
import PasswordButton from "../components/password_button";
import SignUpButton from "../components/sign_up_button";
import Ellipse from "../components/ellipse";

type LoginProps = NativeStackScreenProps<RootStackParamList, "Login">;

export default function Login({ navigation }: LoginProps) {
  return (
    <View style={styles.container}>
      <Ellipse />
      <View>
        <Text style={styles.heading}>Welcome Back!</Text>
        <Image
          style={styles.image}
          source={require("../assets/undraw_breakfast.png")}
        />
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {}}
        >
          {(props) => (
            <View>
              <TextInput
                style={styles.input}
                placeholder="Enter your school email"
                onChangeText={props.handleChange("email")}
                value={props.values.email}
              />
              <TextInput
                style={styles.input}
                placeholder="Enter password"
                onChangeText={props.handleChange("password")}
                value={props.values.password}
              />
              <PasswordButton onPress={() => {}} />
              <LoginButton text="Sign In" onPress={() => {}} />
              <View style={styles.createAccount}>
                <Text style={styles.text}>Don't have an account?</Text>
                <SignUpButton
                  text="Sign Up"
                  onPress={() => {
                    navigation.navigate("Registration");
                  }}
                />
              </View>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff8d6",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#617a44",
    padding: 10,
    textAlign: "center",
    marginTop: 50,
  },
  image: {
    height: 138,
    width: 241,
    padding: 20,
    margin: 20,
    alignSelf: "center",
  },
  input: {
    backgroundColor: "#f7e1ae",
    color: "#393A39",
    borderColor: "black",
    padding: 20,
    fontSize: 16,
    borderRadius: 15,
    height: 60,
    width: 301,
    textAlign: "left",
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 5,
  },
  text: {
    color: "#617A55",
    fontWeight: "bold",
    fontSize: 15,
    paddingVertical: 10,
  },
  createAccount: {
    flexDirection: "row",
    justifyContent: "center",
    width: 301,
  },
});
