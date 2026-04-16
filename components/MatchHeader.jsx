import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import styles from '../style'; // This points to your shared style.js file

const MatchHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.backButton}>
        <Entypo name="chevron-left" size={30} color="#000" />
      </TouchableOpacity>
      
      <Text style={styles.headerTitle}>Match</Text>
      
      {/* Spacer to keep the title perfectly centered */}
      <View style={{ width: 30 }} />
    </View>
  );
};

export default MatchHeader;