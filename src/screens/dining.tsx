import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Yellow from "../components/yellow_ellipse";
import Filter from "../components/filter_button";
import { SearchBar } from "react-native-screens";
import FilterComponent from "../components/filter_compon";

export default function Dining(this: any) {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Yellow />
                <Image style={styles.profilepic} source={require("../assets/profile.png")} />
                <Text style={styles.welcomeText}>Welcome [Name]</Text>
            </View>
            <View style={styles.bottom}>
                <View style={styles.searchBarContainer}>
                    {/* <SearchBar
                        placeholder="Search Dining and Menus"
                        onChangeText={this.updateSearch}
                        value={search}> */}
                    <Image source={require("../assets/searchpic.png")} />

                    {/* </SearchBar> */}
                </View>
                <Filter />
                {/* <FilterComponent /> */}
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
    },

    top: {
        backgroundColor: "#A4D0A4",
        height: "40%",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
    },

    profilepic: {
        width: 130,
        height: 129,
        display: "flex",
        marginTop: 60,
    },

    welcomeText: {
        color: "#617A55",
        // fontfamily: "Poppins",
        fontSize: 24,
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: 23,
        marginTop: 25,
    },

    bottom: {
        backgroundColor: "#FFF8D6",
        height: "60%",
    },

    searchBarContainer: {
        borderRadius: 15,
        backgroundColor: "#F7E1AE",
        display: "flex",
        flexDirection: "row",
        marginRight: 80,
        marginLeft: 35,
        height: 30,
    },
})