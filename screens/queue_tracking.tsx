import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Ellipse from "../components/ellipse";
import Button from "../components/button";

export default function Queue_tracking() {
    return (
        <View style={styles.container}>
            <Ellipse />
            <Text style={styles.title}>Your seat is ready!</Text>
            <Text style={styles.secretText}>Secret Code: Butter</Text>
            <Text style={styles.midText}> Please show the dinning hall staff
                this confirmation page and tell them the
                secret code :&#41; </Text>

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
        fontWeight: "600",
        lineHeight: 23,

    },
    secretText: {
        color: "#000",
        textAlign: "center",
        // fontFamily: Poppins,
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: 23,
        width: 171,
        height: 24,
        backgroundColor: "#F7E1AE",
    },
    midText: {
        color: "#000",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: 23,
        width: 273,
        height: 73,
    }
});
