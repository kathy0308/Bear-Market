import React from "react";
import { View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";

function ListingDetailsScreen(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.smallContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.subTitle}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Daemeri Bakbak"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },

  image: {
    width: "100%",
    flex: 0.4,
  },

  smallContainer: {
    backgroundColor: "green",
    padding: 10,
    marginTop: 10,
  },

  title: {
    marginBottom: 7,
  },

  subTitle: {
    color: colors.secondary,
  },

  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
