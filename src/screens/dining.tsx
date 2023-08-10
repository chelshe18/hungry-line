import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Image, Modal, TextInput } from "react-native";
import { collection, query, getDocs } from "firebase/firestore";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { FIREBASE_AUTH, db } from "../../firebase.config";
import { Ionicons } from "@expo/vector-icons";
import Yellow from "../components/yellow_ellipse";
import FilterComponent from "../components/filter_compon";
import Card from "../components/card";

type DiningProps = NativeStackScreenProps<RootStackParamList, "Dining">;

export default function Dining({ navigation }: DiningProps) {
  const auth = FIREBASE_AUTH;
  const [modalOpen, setModalOpen] = useState(false);
  const [idArray, setIdArray] = useState<string[]>([]);
  const images = new Map([
    ["community-dining-center", require("../assets/dining_hall_1.jpg")],
    ["downtown-hall", require("../assets/dining_hall_2.jpg")],
    ["dumpling-dining-center", require("../assets/dining_hall_3.jpg")],
  ]);

  useEffect(() => {
    const ids: string[] = [];
    const q = query(collection(db, "dining-halls"));
    getDocs(q)
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          ids.push(doc.id);
        });
      })
      .then(() => {
        setIdArray(ids);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Yellow />
        <Image
          style={styles.profilepic}
          source={require("../assets/profile.png")}
        />
        <Text style={styles.welcomeText}>
          Welcome, {auth.currentUser?.displayName}!
        </Text>
      </View>
      <View style={styles.bottom}>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <View style={styles.searchBarContainer}>            
            <Ionicons name="search" size={22} style={{ padding: 4 }} />
            <TextInput placeholder="Search Dining and Menus"></TextInput>
          </View>
          <Ionicons
            name="filter"
            size={24}
            color="black"
            onPress={() => {
              setModalOpen(true);
            }}
            style={{ padding: 7 }}
          />
        </View>

        <ScrollView>
          {idArray.map((id) => (
            <Card
              key={id}
              id={id}
              image={images.get(id)}
              onPress={() => navigation.navigate("QueueStatus", { hallId: id })}
            />
          ))}
        </ScrollView>

        <Modal visible={modalOpen} animationType="slide" transparent={true}>
          <Ionicons
            name="close"
            size={24}
            onPress={() => {
              setModalOpen(false);
            }}
            style={{ position: "absolute", bottom: 225, left: 11, zIndex: 2 }}
          />
          <FilterComponent />
        </Modal>
      </View>
    </View>
  );
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
    fontFamily: "poppins-semibold",
    fontSize: 20,
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
    flexDirection: "row",
    //marginRight: 80,
    marginTop: 5,
    width: 250,
    height: 30,
  },
});
