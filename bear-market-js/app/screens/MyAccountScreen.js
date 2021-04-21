import React from "react";
import {} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "../components/Screen";
import MyProfile from "../components/MyProfile";
import ListItem from "../components/ListItem";
function MyAccountScreen(props) {
  return (
    <Screen>
      {/* <MyProfile image={require("../assets/mosh.jpg")} /> */}
      <ListItem
        title={"Baback Sseggi"}
        subTitle={"programmingwithmosh@gmail.com"}
        image={require("../assets/mosh.jpg")}
      />
    </Screen>
  );
}

export default MyAccountScreen;
