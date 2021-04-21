import React from "react";
import { ImageBackground, View, StyleSheet, Image, Text } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={10}
      source={require("../assets/background.jpg")}
      style={styles.bkImage}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.greetings}>Bear Market</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" />
        <AppButton title="Sign up" color="secondary" />
      </View>
    </ImageBackground>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  bkImage: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  buttonContainer: {
    padding: 10,
    width: "100%",
  },

  logoContainer: {
    position: "absolute",
    top: "20%",
    alignItems: "center",
  },

  logo: {
    width: 50,
    height: 50,
  },

  greetings: {
    paddingTop: 10,
    fontSize: 25,
    fontWeight: "500",
  },
});
