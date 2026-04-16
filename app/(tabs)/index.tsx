import { router } from 'expo-router';
import React from 'react';
import { ImageBackground, Pressable, Text, View } from 'react-native';
import styles from '../../style';

<<<<<<< HEAD
import {
  ImageBackground,
  Pressable,
  Text,
  View,
} from "react-native";
import styles from '../../style'

=======
>>>>>>> ed01e430a4991e9820c23cbcc243ae279088c535
export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('../../assets/images/Couples.jpg')}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.overlay} />
        <View style={styles.content}>
          <Text style={styles.displayText}>Find Your Perfect Match Today</Text>

          <Pressable style={styles.primaryButton} onPress={() => router.push('/LoginUI')}>
            <Text style={styles.primaryButtonText}>Login</Text>
          </Pressable>

<<<<<<< HEAD
        <Pressable
          style={styles.secondaryButton}
          onPress={() => router.push("./signUp")}
        >
          <Text style={styles.secondaryButtonText}>Signup</Text>
        </Pressable>

        <Pressable
          onPress={() => router.push("./ProfileUI")}
        >
          <Text style={styles.linkText}>Continue as Guest</Text>
        </Pressable>

      </View>
    </ImageBackground>
    
=======
          <Pressable style={styles.secondaryButton} onPress={() => router.push('/signUp')}>
            <Text style={styles.secondaryButtonText}>Sign Up</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
>>>>>>> ed01e430a4991e9820c23cbcc243ae279088c535
  );
}