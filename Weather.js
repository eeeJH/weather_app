import React from "react";
import propTypes from "prop-types";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default class Weather extends React.Component {
  render() {
    var { temp } = this.props;
    var { condition } = this.props;

    return (
      <LinearGradient
        // Background Linear Gradient
        colors={["#4c669f", "#3b5998", "#192f6a"]}
        style={styles.container}
      >
        <StatusBar barStyle="light-content" />
        <View style={styles.halfContainer}>
          <MaterialCommunityIcons
            name={weatherOptions[condition].iconName}
            size={96}
            color="white"
          />
          <Text style={styles.temperature} color="white">
            What a cool! {temp}°
          </Text>
        </View>
        <View style={styles.halfContainer}></View>
      </LinearGradient>
    );
  }
}

var weatherOptions = {
  Haze: { iconName: "dehaze", gradient: ["#8e9eab", "#eef2f3"] },
  Thunderstorm: { iconName: "thunderstorm", gradient: ["#304352", "#d7d2cc"] },
  Drizzle: { iconName: "dehaze", gradient: ["#304352", "#d7d2cc"] },
  Rain: { iconName: "dehaze", gradient: ["#304352", "#d7d2cc"] },
  Snow: { iconName: "dehaze", gradient: ["#304352", "#d7d2cc"] },
  Atmosphere: { iconName: "dehaze", gradient: ["#304352", "#d7d2cc"] },
  Clear: { iconName: "dehaze", gradient: ["#304352", "#d7d2cc"] },
  Clouds: { iconName: "dehaze", gradient: ["#304352", "#d7d2cc"] },
  Mist: { iconName: "dehaze", gradient: ["#304352", "#d7d2cc"] },
  Dust: { iconName: "dehaze", gradient: ["#304352", "#d7d2cc"] },
  Fog: { iconName: "dehaze", gradient: ["#304352", "#d7d2cc"] },
  Smoke: { iconName: "dehaze", gradient: ["#304352", "#d7d2cc"] },
  Sand: { iconName: "dehaze", gradient: ["#304352", "#d7d2cc"] },
  Ash: { iconName: "dehaze", gradient: ["#304352", "#d7d2cc"] },
  Squall: { iconName: "dehaze", gradient: ["#304352", "#d7d2cc"] },
  Tornado: { iconName: "dehaze", gradient: ["#304352", "#d7d2cc"] },
};

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
    "Mist",
    "Dust",
    "Fog",
    "Smoke",
    "Sand",
    "Ash",
    "Squall",
    "Tornado",
    "Haze",
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
    color: "white",
  },
});
