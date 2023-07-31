import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Ellipse from "../components/ellipse";
import * as Progress from 'react-native-progress';
import Button from "../components/button";

export default function Waiting_line(){
    const totalPeople = 20;  // total number of people in the queue
    const waitingPeople = 5;  // people ahead of you
    const progress = (totalPeople - waitingPeople) / totalPeople;

    const handlePress = () => {
        // This function will be called when the button is pressed.
        // Need navigation
        // Go to queue status page
        console.log("Button pressed!");
      };

    return (
        <View style={styles.container}>
            <Ellipse />
            <Text style={styles.title}>{waitingPeople} people waiting ahead of you </Text>
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
            <Image style={styles.image} source={require('../assets/map.png')} />
            <Button text="Quit The Queue" onPress={handlePress} />
    </View>
    )
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
        marginBottom: 25
    },

    progressBar: {
        width: 300,
        borderRadius: 20,
        marginBottom: 25
      },

    staticText: {
        backgroundColor: "#F7E1AE",
        color: "#000",
        padding: 15,
        textAlign: "center",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: 23,
        marginBottom: 30
    },

    dynamicText: {
        color: "#617A55",
        fontWeight: "600",
        fontSize: 16,
        fontFamily: "Poppins",
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
