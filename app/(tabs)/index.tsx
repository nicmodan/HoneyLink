<<<<<<< HEAD
// import { Image } from 'expo-image';
import { Platform, StyleSheet, StatusBar } from 'react-native';
import { Link } from 'expo-router';
import { Text, View, Image} from 'react-native';
// import Button from '../components/ui/button';
import Button from '@/components/ui/button';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/images/sample.jpg')}
        style={styles.backgroundImageStyle}
      />
      <View style={styles.subContainer}>
          <View style={styles.innerSubContainer}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Find Your Perfect Match</Text>

            <Button to="/login">
              <Text>Sign In</Text>
            </Button>
            <Button to="/signup">
              <Text>Sign Up</Text>
            </Button>
          </View>
=======
import { router } from "expo-router";
import {
  ImageBackground,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

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
          onPress={() => router.push("/login")}
        >
          <Text style={styles.primaryButtonText}>Login</Text>
        </Pressable>

        <Pressable
          style={styles.secondaryButton}
          onPress={() => router.push("/signing")}
        >
          <Text style={styles.secondaryButtonText}>Signup</Text>
        </Pressable>
>>>>>>> favour
      </View>
    </ImageBackground>
  );
}

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
<<<<<<< HEAD
  subContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.44)', // 半透明の黒背景
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerSubContainer: {
    width: '80%',
    height: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // 半透明の白背景
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }

});
=======
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
>>>>>>> favour
