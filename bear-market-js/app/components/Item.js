import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import colors from "../config/colors";

function Item({ ImgSource }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image1} source={ImgSource}></Image>
      <Text style={styles.title}> 빨간재킷 팝니다ㅏㅏㅏㅏㅏㅏ</Text>
      <View style={styles.image3}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: "grey",
  },

  image1: {
    borderRadius: 50,
    backgroundColor: "black",
    width: "100%",
    height: 200,
  },

  title: {
    fontSize: 20,
    backgroundColor: colors.primary,
    width: "100%",
    height: 50,
  },
  image3: {
    backgroundColor: colors.secondary,
    width: "100%",
    height: 50,
  },
});

// <View style={styles.image} />
// <Text style={styles.text1}>hooman</Text>
// <Text style={styles.text2}>100</Text>

// const styles = StyleSheet.create({
//   card: {
//     paddingTop: 20,
//     backgroundColor: "yellow",
//     flexDirection: "row",
//   },

//   text1: {
//     backgroundColor: "green",
//   },

//   text2: {
//     backgroundColor: "blue",
//   },

//   image: {
//     backgroundColor: "red",
//     width: 50,
//     height: 50,
//   },

//   smallContainer: {
//     padding: 20,
//     marginTop: 10,
//   },
// });

export default Item;
