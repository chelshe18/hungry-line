import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Ellipse from "../components/ellipse";
import Button from "../components/button";
import * as Progress from 'react-native-progress';

export default function queue_tracking() {
    return (
        <View style={styles.container}>
            <Ellipse />
            <Text style={styles.title}>Your seat is ready!</Text>
            <Progress.Bar 
                progress={1} 
                width={250} 
                height={11}
                style={styles.progressBar} 
                color={"#A4D0A4"} 
                borderWidth={4} 
                borderRadius={10} 
                unfilledColor={"#617A55"} 
            />
            <Text style={styles.secretText}>Secret Code: Butter</Text>
            <Text style={styles.midText}> Please show the dinning hall staff
                this confirmation page and tell them the
                secret code:D</Text>

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
        marginBottom: 25, 
    },
    progressBar: {
        width: 300,
        borderRadius: 20,
        marginBottom: 25, 
    },
    secretText: {
        backgroundColor: "#f7e1ae",
        color: "#393A39",
        borderColor: "black",
        padding: 20,  
        fontSize: 16,
        lineHeight: 23,  
        textAlign: 'center',
        fontWeight: "bold",
        marginBottom: 30, 
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
