import react from "react";
import { View, Text, StyleSheet } from "react-native";
import PickPlayer from "./PickPlayer";

const Main = () => {
  return (
    <View style={styles.container}>
      <PickPlayer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A2A33",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Main;
