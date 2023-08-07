import React from "react";
import { StyleSheet, Image } from "react-native";

export default function Ellipse() {
    return (
        <>
        <Image style={styles.ell} source={require('../assets/ellipse_2.png')} />
        <Image style={styles.ell} source={require('../assets/ellipse_1.png')} />
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