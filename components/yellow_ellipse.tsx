import React from "react";
import { StyleSheet, Image } from "react-native";

export default function Yellow() {
    return (
        <>
        <Image style={styles.ell} source={require('../assets/yellow_1.png')} />
        <Image style={styles.ell} source={require('../assets/yellow_2.png')} />
        </>
    );
}
const styles = StyleSheet.create({

    ell: {
        alignSelf: 'flex-start',
        top: 0,
        position: 'absolute',
    },
});