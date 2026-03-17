import { router } from "expo-router";
import React, { useState } from "react";

import {
  ImageBackground,
  Pressable,
  Text,
  View,
} from "react-native";
import styles from '../../style'

export default function HomeScreen() {
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
<<<<<<< HEAD
          onPress={() => router.push("./LoginUI")}
=======
          onPress={() => router.push("/LoginUI")}
>>>>>>> 16cdb3e (Update login UI flow and router setup)
        >
          <Text style={styles.primaryButtonText}>Login</Text>
        </Pressable>

        <Pressable
          style={styles.secondaryButton}
          onPress={() => router.push("./signUp")}
        >
          <Text style={styles.secondaryButtonText}>Signup</Text>
        </Pressable>
<<<<<<< HEAD

        <Pressable
          onPress={() => router.push("./ProfileUI")}
        >
          <Text style={styles.linkText}>Continue as Guest</Text>
        </Pressable>

=======
>>>>>>> 16cdb3e (Update login UI flow and router setup)
      </View>
    </ImageBackground>
    
  );
}
<<<<<<< HEAD
=======

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(223, 51, 110, 0.34)",
  },
  content: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 24,
    paddingBottom: 72,
    paddingTop: Platform.select({
      ios: 48,
      android: (StatusBar.currentHeight ?? 0) + 24,
      default: 24,
    }),
  },
  displayText: {
    maxWidth: 240,
    marginBottom: 28,
    fontSize: 42,
    fontWeight: "800",
    lineHeight: 46,
    color: "#FFFFFF",
  },

  primaryButton: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 52,
    marginBottom: 14,
    borderRadius: 999,
    backgroundColor: "#ff2b78",
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  secondaryButton: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 52,
    borderRadius: 999,
    backgroundColor: "#FFFFFF",
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#3A3A3A",
  },
});
>>>>>>> 16cdb3e (Update login UI flow and router setup)
