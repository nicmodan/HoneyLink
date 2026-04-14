import React from 'react';
import { Text, View } from 'react-native';
import MatchButton from './MatchButton';
import styles from '../style';

export default function MatchCongrats() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleMC}>Congrats it&apos;s a Match!</Text>
      <Text style={styles.subtitleMC}>
        Start a conversation now to each other
      </Text>
      <MatchButton />
    </View>
  );
}