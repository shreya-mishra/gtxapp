import React from "react";
import { View, Image, StyleSheet } from "react-native";
import EditModal from "../components/EditModal";

const Homepage = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image source={require("../assets/office.jpg")} style={styles.image} />
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignItems: "center",
    position: "absolute",
    justifyContent: "center",
    resizeMode: "cover",
  },
});
