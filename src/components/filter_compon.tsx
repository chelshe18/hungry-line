import React from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import Checkbox from "./checkbox";

export default function FilterComponent() {
    return (
        <View style={styles.filter}>
            <View style={styles.filterContainer}>
                <TouchableOpacity>
                    <Text style={styles.FilterComponentText}>X</Text>
                </TouchableOpacity>
                    <Text style={styles.FilterComponentText}>Filter</Text>
                <TouchableOpacity>
                    <Text style={styles.FilterComponentText}>Clear</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.buttonContainer}>
                <Checkbox />
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
        display: "flex",
        width: "100%",
        position: "absolute",
        flex: 1,
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
        marginLeft: 15,
        marginRight: 15,
        marginTop: 13,
    },

    buttonContainer: {
        alignItems: "center",
        paddingBottom: 16,
    },

    button: {
        borderRadius: 15,
        paddingHorizontal: 130,
        paddingVertical: 13,
        backgroundColor: "#a2cea2",
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