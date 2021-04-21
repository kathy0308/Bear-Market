import React from "react";
import { View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";

function MyProfile({ image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.white,
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default MyProfile;
