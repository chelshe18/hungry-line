import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";

type props = {
  name: string;
  open: boolean;
  time: string;
  image: any;
};

export default function Card({ name, open, time, image }: props) {
  return (
    <View style={styles.card}>
      <Image style={styles.cardImage} source={image} />
      <View style={styles.cardBody}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.cardTitle}>{name}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.distanceLabel}>Dist. </Text>
            <Text style={styles.distance}>0.2 mi</Text>
          </View>
        </View>
        <Text style={styles.cardLabel}>
          {open ? "Open" : "Closed"} until {time}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 301,
    height: 191,
    borderRadius: 15,
    marginVertical: 12,
    marginHorizontal: 16,
    alignSelf: "center",
    backgroundColor: "#F7E1AE",
  },
  cardImage: {
    width: 301,
    height: 120,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
    backgroundColor: "#F7E1AE",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  cardTitle: {
    color: "#000000",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
  },
  cardLabel: {
    color: "#000000",
    fontSize: 12,
    marginBottom: 6,
  },
  distance: {
    fontSize: 12,
    fontWeight: "600",
    color: "#617A55",
    textAlign: "right",
  },
  distanceLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: "#000",
    textAlign: "right",
  },
});
