import React from "react";
import propTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";

export default class Weather extends React.Component {
  render() {
    var { temp } = this.props;

    return (
      <View style={styles.container}>
        <Text>홀리쉣 최영민 {temp}</Text>
      </View>
    );
  }
}

Weather.propTypes = {
  temp: propTypes.number.isRequired,
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
