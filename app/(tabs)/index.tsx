import { Image } from 'expo-image';
import { Platform, StyleSheet, StatusBar } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
// import { Text } from '@react-navigation/elements';
import { View, Text } from 'react-native';


export default function HomeScreen() {
  return (
    <Text style={styles.container}>
      Hello
    </Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios:{
        paddingTop: 25
      },
      android: {
        paddingTop: StatusBar.currentHeight
      }
    })
  }
});
