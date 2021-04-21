import React from "react";
import { StyleSheet, Image, View } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.delete}>
        <MaterialCommunityIcons name="close" color="white" size={35} />
      </View>
      <View style={styles.add}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={35}
        />
      </View>
      <Image
        resizeMode="contain"
        source={require("../assets/chair.jpg")}
        style={styles.item}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },

  item: {
    width: "100%",
    height: "100%",
  },

  options: {
    flex: 1,
    flexDirection: "row",
  },

  delete: {
    position: "absolute",
    top: 30,
    left: 30,
  },

  add: {
    position: "absolute",
    top: 30,
    right: 30,
  },
});

export default ViewImageScreen;
