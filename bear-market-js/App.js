import React from "react";
import { Text, View, ImageBackground, StyleSheet } from "react-native";
import Item from "./app/components/Item";
// import ViewImageScreen from "./app/screens/ViewImageScreen";
// import WelcomeScreen from "./app/screens/WelcomeScreen";
// import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
// import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
// import MessagesScreen from "./app/screens/MessagesScreen";
// import MyAccountScreen from "./app/screens/MyAccountScreen";
// import Screen from "./app/components/Screen";
// import Icon from "./app/components/Icon";
// import ListItem from "./app/components/ListItem";
// import AccountScreen from "./app/screens/AccountScreen";
// import ListingScreen from "./app/screens/ListingScreen";

// import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks';

export default function App() {
  return <Item ImgSource={require("./app/assets/couch.jpg")} />;
}
