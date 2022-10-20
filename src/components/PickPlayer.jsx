import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import IconX from "../assets/IconX.jsx";

export default function PickPlayer() {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.playerTitle}>PICK PLAYER 1’S MARK</Text>

      <View>
        <IconX style={styles.iconX} width={100} height={100} />
      </View>

      <Text style={styles.remember}>REMEMBER : X GOES FIRST</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 327,
    height: 205,
    backgroundColor: "#1F3641",
    shadowColor: "#10212A",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10
  },
  playerTitle: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",

    fontSize: 16,
    lineHeight: 20,
    color: "#A8BFC9",
    textAlign: "center",
    marginTop: 24
  },
  iconX: {
    transform: [{ scale: 0.7 }]
  },

  remember: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 16,
    color: "#A8BFC9",
    textAlign: "center",
    marginTop: 17,
    opacity: 0.5
  }
});
