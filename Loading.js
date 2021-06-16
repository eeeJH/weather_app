import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Getting the holy cool weather!!!</Text>
    </View>
  );
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#f3ac42",
  },
  text: {
    color: "#2c2c2c",
    fontSize: 29,
  },
});

export default Loading;
