import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";

// Capital when it is a real component
function ListItem({
  image,
  IconComponent,
  title,
  subTitle,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}> {title} </AppText>
            {subTitle && (
              <AppText style={styles.subTitle}> {subTitle} </AppText>
            )}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 10,
    padding: 15,
    flexDirection: "row",
    backgroundColor: "yellow",
  },

  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },

  title: {
    fontWeight: "500",
  },

  subTitle: {
    color: "grey",
  },
});

export default ListItem;
