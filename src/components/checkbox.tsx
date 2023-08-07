import React, { useState } from "react";
import { View, StyleSheet, Text, Button, Platform } from "react-native";
import CheckBox from "expo-checkbox";

export default function Checkbox() {
    const [option1, setOption1] = useState(false);
    const [option2, setOption2] = useState(false);
    const [option3, setOption3] = useState(false);
    const [option4, setOption4] = useState(false);
    const [option5, setOption5] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <CheckBox
                    value={option1}
                    onValueChange={() => setOption1(!option1)}
                    color={option1 ? "#4630EB" : undefined}
                />
                <Text style={styles.text}>Closest</Text>
            </View>
            <View style={styles.wrapper}>
                <CheckBox
                    value={option2}
                    onValueChange={() => setOption2(!option2)}
                    color={option2 ? "#4630EB" : undefined}
                />
                <Text style={styles.text}>Open now</Text>
            </View>
            <View style={styles.wrapper}>
                <CheckBox
                    value={option3}
                    onValueChange={() => setOption3(!option3)}
                    color={option3 ? "#4630EB" : undefined}
                />
                <Text style={styles.text}>Halal</Text>
            </View>
            <View style={styles.wrapper}>
                <CheckBox
                    value={option4}
                    onValueChange={() => setOption4(!option4)}
                    color={option4 ? "#4630EB" : undefined}
                />
                <Text style={styles.text}>Shortest time </Text>
            </View>
            <View style={styles.wrapper}>
                <CheckBox
                    value={option5}
                    onValueChange={() => setOption5(!option5)}
                    color={option5 ? "#4630EB" : undefined}
                />
                <Text style={styles.text}>Favorites</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "80%",
        marginHorizontal: 15,
        padding: 16,
    },
    wrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 2,
    },
    
    text: {
        // lineHeight: ,
        marginLeft: 10,
        color: "#000",
        fontFamily: "poppins-semibold",
        fontSize: 12,
        fontStyle: "normal",
        // lineHeight: "normal",
    },
});
