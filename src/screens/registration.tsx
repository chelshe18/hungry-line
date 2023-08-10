import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Formik } from "formik";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import Button from "../components/button";
import SignUpButton from "../components/sign_up_button";
import Ellipse from "../components/ellipse";
import { FIREBASE_AUTH } from "../../firebase.config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

type RegistrationProps = NativeStackScreenProps<
  RootStackParamList,
  "Registration"
>;

export default function Registration({ navigation }: RegistrationProps) {
  const auth = FIREBASE_AUTH;

  const signUp = (values: {
    name: string;
    email: string;
    password: string;
  }) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        return updateProfile(userCredential.user, {
          displayName: values.name,
        });
      })
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: "Dining" }],
        });
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email":
            alert("Not a valid email address.");
            break;
          case "auth/email-already-in-use":
            alert("This email address is already in use.");
            break;
          case "auth/operation-not-allowed":
            alert("Signing in with email and password is not allowed.");
            break;
          case "auth/weak-password":
            alert("Password is not strong enough.");
            break;
          case "auth/missing-password":
            alert("You didn't enter a password");
            break;
          default:
            alert(error.message);
        }
      });
  };

  return (
    <View style={styles.container}>
      <Ellipse />
      <View>
        <Text style={styles.heading}>Welcome Onboard!</Text>
        <Text style={styles.subtitle}>
          Let's help you get into the dining queue
        </Text>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(values) => {
            if (values.password != values.confirmPassword) {
              alert("Your passwords don't match.");
            } else {
              signUp(values);
            }
          }}
        >
          {(props) => (
            <View>
              <TextInput
                style={styles.input}
                placeholder="Enter your full name"
                onChangeText={props.handleChange("name")}
                value={props.values.name}
              />
              <TextInput
                style={styles.input}
                placeholder="Enter your school email"
                onChangeText={props.handleChange("email")}
                value={props.values.email}
              />
              <TextInput
                secureTextEntry={true}
                style={styles.input}
                placeholder="Enter password"
                onChangeText={props.handleChange("password")}
                value={props.values.password}
              />
              <TextInput
                secureTextEntry={true}
                style={styles.input}
                placeholder="Confirm password"
                onChangeText={props.handleChange("confirmPassword")}
                value={props.values.confirmPassword}
              />
              <Text style={styles.subtitle}></Text>
              <Button text="Register" onPress={props.handleSubmit} />
              <View style={styles.createAccount}>
                <Text style={styles.text}>Already have an account?</Text>
                <SignUpButton
                  text="Sign In"
                  onPress={() => {
                    navigation.pop();
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
    fontFamily: "poppins-bold",
    fontSize: 24,
    color: "#617a44",
    padding: 8,
    textAlign: "center",
    marginTop: 50,
  },
  subtitle: {
    fontSize: 13,
    textAlign: "center",
    fontFamily: "poppins-semibold",
    color: "#617a55",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#f7e1ae",
    color: "#393A39",
    borderColor: "black",
    paddingHorizontal: 20,
    fontSize: 14,
    borderRadius: 15,
    height: 60,
    width: 301,
    textAlign: "left",
    textAlignVertical: "center",
    fontFamily: "poppins-regular",
    marginBottom: 5,
    marginTop: 5,
  },
  text: {
    color: "#617A55",
    fontFamily: "poppins-semibold",
    fontSize: 14,
    paddingVertical: 10,
  },
  createAccount: {
    flexDirection: "row",
    justifyContent: "center",
    width: 301,
  },
});
