import React from "react";
import { Alert, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";

function AppButton({ title, onPress, color = "primary" }) {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: colors[color] }]}
      onPress={onPress /*() => Alert.alert("N/A")*/}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    width: "100%",
    borderRadius: 25,
    padding: 15,
    marginVertical: 10,
  },

  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
});

export default AppButton;
