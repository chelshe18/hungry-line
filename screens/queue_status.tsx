import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../src/App";
import Ellipse from "../components/ellipse";
import Button from "../components/button";
import Queue_tracking from "./queue_tracking";

type QueuestatusProps = NativeStackScreenProps<RootStackParamList, "Queuestatus">;

export default function Queuestatus({ navigation }: QueuestatusProps) {
    const totalPeople = 20;
    return (
        <View style={styles.container}>
            <Ellipse/>
            <Text style={styles.heading}>Community Dining Center</Text>
            <Image style={styles.image} source={require ("../assets/queue_status.png")}/>
            <Text style={styles.midText}>
                There are currently 
                <Text style={{color: '#CF4F4F'}}> {totalPeople} people </Text>
            ahead of you in the queue.
            </Text>
            <Text style={styles.staticText}>
                Estimate wait times: 
                <Text style={styles.dynamicText}> 15 minutes</Text>
            </Text>
            <Text style={styles.subtitle}>If you join the queue now</Text>
            <View style= {{padding: 10, marginBottom: 30}}>
            <Button text="Join queue" onPress={() => {
                navigation.navigate("Waiting_line")
            }}/>
            </View>
            
            <Button text="Switch Dining Halls" onPress={() => {}}/>
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
        width: 280,
        height: 160,
        marginBottom: 40
    },
    heading: {
        fontWeight: "bold",
        fontSize: 24,
        color: "#617a44",
        padding: 25,
        textAlign: "center",
        marginTop: 40,
    },
    midText: {
        color: "#000",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: 23,
        width: 273,
        height: 73,
        marginBottom: 20
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
    },
    subtitle: {
        color: "#000",
        fontSize: 13,
        fontWeight: '500',
        marginTop: 15,
        marginBottom: 25
    },
    dynamicText: {
        color: "#617A55",
        fontWeight: "600",
        fontSize: 16,
    },
});
