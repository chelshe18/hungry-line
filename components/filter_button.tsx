import React, { useState } from "react";
import { StyleSheet, Image, TouchableOpacity, Text, View } from "react-native";
import FilterComponent from "./filter_compon";

export default function Filter() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleVisibility}>
                <Image style={styles.filterButton} source={require('../assets/filter.png')} />
            </TouchableOpacity>
            {isVisible && (
                <FilterComponent />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
    },

    filterButton: {
        alignSelf: 'flex-end',
        top: -25,
        position: 'absolute',
    },

    filter: {
        borderRadius: 15,
        backgroundColor: "#F7E1AE",
        height: "50%",
        display: "flex",
        width: "100%",
        position: "absolute",
        bottom: 0,
    },


    // component: {
    //     marginTop: 20,
    //     padding: 10,
    //     backgroundColor: "#f0f0f0",
    //     borderRadius: 5,
    // },
});