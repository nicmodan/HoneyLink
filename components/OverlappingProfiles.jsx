import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const OverlappingProfiles = () => {
  const imageSize = 80;
  const overlapAmount = 20; // How much the images overlap

  return (
    <View style={styles.container}>
      <View style={styles.profileWrapper}>
        
        {/* Left Profile */}
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }}
          style={[styles.profileImage, { width: imageSize, height: imageSize, borderRadius: imageSize / 2 }]}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  profileWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative', // Necessary for absolute children
  },
  profileImage: {
    borderWidth: 3,
    borderColor: '#fff', // Creates the "cutout" look
  },
  heartContainer: {
    position: 'absolute',
    backgroundColor: '#FF2D55',
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  heartText: {
    fontSize: 16,
  },
});

export default OverlappingProfiles;