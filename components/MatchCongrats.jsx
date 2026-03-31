import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MatchCongrats() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Congrats it&apos;s a Match!</Text>
      <Text style={styles.subtitle}>
        Start a conversation now to each other
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingBottom: 90,
  },
  title: {
    color: '#FF3B7C',
    fontSize: 34,
    fontWeight: '800',
    lineHeight: 40,
    textAlign: 'center',
    letterSpacing: -0.4,
    marginBottom: 20,
  },
  subtitle: {
    color: '#A3A3A3',
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 24,
    textAlign: 'center',
    maxWidth: 320,
  },
});
