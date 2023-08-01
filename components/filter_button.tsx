import React from "react";
import { StyleSheet, Image } from "react-native";

export default function Filter() {
    return (
        <Image style={styles.filterButton} source={require('../assets/filter.png')} />
    );
}

const styles = StyleSheet.create({

    filterButton: {
        alignSelf: 'flex-end',
        top: 0,
        position: 'absolute',
    },
});