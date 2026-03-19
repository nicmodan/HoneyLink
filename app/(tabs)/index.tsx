import { router } from "expo-router";
import React, { useState } from "react";

import {
  ImageBackground,
  Pressable,
  Text,
  View,
} from "react-native";
import Footer from "./Navigation";
import styles from '../../style'
export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState("home");
  return (
    <ImageBackground
      source={require("../../assets/images/Couples.jpg")}
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.overlay} />
      <View style={styles.content}>
        <Text style={styles.displayText}>Find Your Perfect Match Today</Text>

        <Pressable
          style={styles.primaryButton}
          onPress={() => router.push("./LoginUI")}
        >
          <Text style={styles.primaryButtonText}>Login</Text>
        </Pressable>

        <Pressable
          style={styles.secondaryButton}
          onPress={() => router.push("./signUp")}
        >
          <Text style={styles.secondaryButtonText}>Signup</Text>
        </Pressable>
      </View>

    </ImageBackground>
    
  );
}
