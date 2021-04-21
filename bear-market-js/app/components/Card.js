import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.smallContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 15,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: 200,
  },

  smallContainer: {
    padding: 20,
    marginTop: 10,
  },

  title: {
    marginBottom: 7,
  },

  subTitle: {
    color: colors.secondary,
  },
});

export default Card;
