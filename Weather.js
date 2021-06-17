import React from "react";
import propTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default class Weather extends React.Component {
  render() {
    var { temp } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.halfContainer}>
          <MaterialCommunityIcons
            name="weather-rainy"
            size={96}
            color="black"
          />
          <Text style={styles.temperature}>홀리쉣 최영민 {temp}°</Text>
        </View>
        <View style={styles.halfContainer}></View>
      </View>
    );
  }
}

Weather.propTypes = {
  temp: propTypes.number.isRequired,
  condition: propTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
    "Fog",
    "Smoke",
    "Sand",
    "Ash",
    "Squall",
    "Tornado",
  ]).isRequired,
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temperature: {
    fontSize: 28,
  },
});
