import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import styles from '../style';

const HeaderSection = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerContainer2}>        
        <TouchableOpacity style={styles.backButton}>
          <Entypo name="chevron-left" size={35} color="black" />
        </TouchableOpacity>     
        <Text style={styles.headerTitle}>Login</Text> 
      </View>
      
      <Text style={styles.welcomeText}>Welcome Back</Text>
      <Text style={styles.subText}>Sign in to continue</Text>
    </View>
  );
};

export default HeaderSection;
