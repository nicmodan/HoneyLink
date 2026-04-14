import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from '../style';
const OverlappingProfiles = () => {
  const imageSize = 80;
  const overlapAmount = 20; // How much the images overlap

  return (
    <View style={styles.container}>
      <View style={styles.profileWrapper}>
        
        {/* Left Profile */}
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }}
          style={[styles.profileImageP, { width: imageSize, height: imageSize, borderRadius: imageSize / 2 }]}
        />

        {/* Right Profile (with negative margin to overlap) */}
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }}
          style={[
            styles.profileImage, 
            { 
              width: imageSize, 
              height: imageSize, 
              borderRadius: imageSize / 2,
              marginLeft: -overlapAmount 
            }
          ]}
        />

        {/* Center Heart Icon */}
        <View style={styles.heartContainer}>
          <Text style={styles.heartText}>❤️</Text>
        </View>

      </View>
    </View>
  );
};

export default OverlappingProfiles;