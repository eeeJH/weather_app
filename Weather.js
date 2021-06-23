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
        colors={weatherOptions[condition].gradient}
        style={styles.container}
      >
        <StatusBar barStyle="light-content" />
        <View style={styles.halfContainer}>
          <MaterialCommunityIcons
            name={weatherOptions[condition].iconName || "weather-sunset"}
            size={96}
            color="white"
          />
          <Text style={styles.weatherContainer} color="white">
            {condition}
          </Text>
          <Text style={styles.temperature} color="white">
            {temp}°
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{weatherOptions[condition].title}</Text>
          <Text style={styles.subtitle}>
            {weatherOptions[condition].subTitle}
          </Text>
        </View>
      </LinearGradient>
    );
  }
}

var weatherOptions = {
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#8e9eab", "#eef2f3"],
    title: "Haze",
    subTitle: "I can`t see it.",
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#1e3c72", "#2a5298"],
    title: "Thunderstorm",
    subTitle: "Keeping inside.",
  },
  Drizzle: {
    iconName: "weather-fog",
    gradient: ["#304352", "#d7d2cc"],
    title: "Drizzle",
    subTitle: "What is this? Do you know this weather?",
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#43cea2", "#185a9d"],
    title: "Rain",
    subTitle: "Take an umbrella",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#304352", "#d7d2cc"],
    title: "Snow",
    subTitle: "Make a snow-man.",
  },
  Atmosphere: {
    iconName: "weather-fog",
    gradient: ["#e53935", "#e35d5b"],
    title: "Atmosphere",
    subTitle: "Not bad.",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#ffb347", "#ffcc33"],
    title: "Clear",
    subTitle: "Clean.",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#73C8A9", "#3f3B44"],
    title: "Clouds",
    subTitle: "Wow.. There are so a lot.",
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#304352", "#d7d2cc"],
    title: "Mist",
    subTitle: "Please give it skin.",
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#BA8B02", "#181818"],
    title: "Dust",
    subTitle: "Oh.. my... ",
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#304352", "#d7d2cc"],
    title: "Fog",
    subTitle: "Did you see that? ??: Nope.",
  },
  Smoke: {
    iconName: "weather-fog",
    gradient: ["#c2e59c", "#64b3f4"],
    title: "Smoke",
    subTitle: "Dont`t smoke. 🫁",
  },
  Sand: {
    iconName: "weather-fog",
    gradient: ["#CCCCB2", "#757519"],
    title: "Sand",
    subTitle: "Create sand-cattle outside.",
  },
  Ash: {
    iconName: "weather-hazy",
    gradient: ["#304352", "#d7d2cc"],
    title: "Ash",
    subTitle: "What is it? lol?",
  },
  Squall: {
    iconName: "weather-pouring",
    gradient: ["#fc00ff", "#00dbde"],
    title: "Squall",
    subTitle: "Get inside.",
  },
  Tornado: {
    iconName: "weather-tornado",
    gradient: ["#F1F2B5", "#135058"],
    title: "Tornado",
    subTitle: "Good Luck... 🙏🏻",
  },
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
  weatherContainer: {
    fontSize: 12,
    color: "white",
    margin: 20,
  },
  title: {
    fontSize: 44,
    color: "white",
    marginBottom: 10,
    textAlign: "left",
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
    textAlign: "left",
  },
  textContainer: {
    alignItems: "flex-start",
    paddingHorizontal: 40,
    justifyContent: "center",
    flex: 1,
  },
});
