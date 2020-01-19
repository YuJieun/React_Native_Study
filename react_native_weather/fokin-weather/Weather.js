import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#bdc3c7", "#2c3e50"],
    title: "Thunderstrom",
    subtitle: "Actually, outside of the house"
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#2193b0", "#6dd5ed"],
    title: "Drizzle",
    subtitle: "Is like rain!"
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#00d2ff", "#928DAB"],
    title: "Rain",
    subtitle: "For more info look outside"
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#c2e59c", "#64b3f4"],
    title: "Snow",
    subtitle: "Do you want to build a snowman?"
  },
  Atmosphere: {
    iconName: "weather-hail",
    gradient: ["#8e9eab", "#eef2f3"],
    title: "Atmosphere",
    subtitle: "boring"
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FFAFBD", "#ffc3a0"],
    title: "Sunny",
    subtitle: "Go get your ass burnt"
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#2c3e50", "#2980b9"],
    title: "Clouds",
    subtitle: "I know, fucking boring"
  },
  Mist: {
    iconName: "weather-hail",
    gradient: ["#83a4d4", "#b6fbff"],
    title: "Mist",
    subtitle: "so wet"
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#304352", "#d7d2cc"],
    title: "Dust",
    subtitle: "Please stay at home"
  },
  Haze: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Haze",
    subtitle: "Just don't go outside."
  }
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
      "Thunderstorm",
      "Drizzle",
      "Rain",
      "Snow",
      "Atmosphere",
      "Clear",
      "Clouds",
      "Haze",
      "Mist",
      "Dust"
    ]).isRequired
  };

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  temp: {
    fontSize: 42,
    color: "white"
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontWeight: "600",
    color: "white",
    fontSize: 44,
    marginBottom: 10,
    textAlign: "left"
  },
  subtitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "800",
    textAlign: "left"
  },
  textContainer: {
    alignItems: "flex-start",
    paddingHorizontal: 40,
    justifyContent: "center",
    flex: 1
  }
});
