import React from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";

export default function FilterComponent() {
    return (
        <View style={styles.filter}>
            <View style={styles.filterContainer}>
                <Text style={styles.FilterComponentText}>X</Text>
                <Text style={styles.FilterComponentText}>Filter</Text>
                <Text style={styles.FilterComponentText}>Clear</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Done</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    filter: {
        borderRadius: 15,
        backgroundColor: "#F7E1AE",
        height: "50%",
        display: "flex",
        width: "100%",
        position: "absolute",
        bottom: 0,
    },

    filterContainer: {
        color: "#000",
        textAlign: "center",
        // font- family: "Poppins",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },

    FilterComponentText: {
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: 23,
        fontSize: 19,
        justifyContent: "space-between",
    },

    buttonContainer: {
        alignItems: "center", // Center the button horizontally in the container
        // paddingBottom: 16, 
    },

    button: {
        borderRadius: 15,
        paddingHorizontal: 130, // Increase padding to make the button wider
        paddingVertical: 13, // Adjust as needed
        backgroundColor: "#a2cea2", // Add a background color to the button
    },

    buttonText: {
        fontWeight: "bold",
        fontSize: 15,
        textAlign: "center",
        color: "#000",
        // fontfamily: "Poppins",
        fontsize: 12,
        fontstyle: "normal",
        fontweight: 600,
    },
});