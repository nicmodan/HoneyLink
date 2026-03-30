import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CongratsMatch() {
  return (
    <View style={styles.container}>
      <Text style={styles.title} numberOfLines={1} adjustsFontSizeToFit>
        Congrats it's a Match!
      </Text>
      <Text style={styles.subtitle}>Start a conversation now to each other</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 40,
    fontWeight: '700',
    color: '#f43f78',
    textAlign: 'center',
    letterSpacing: 0.2,
  },
  subtitle: {
    marginTop: 16,
    fontSize: 18,
    fontWeight: '500',
    color: '#8f8f8f',
    textAlign: 'center',
  },
});
