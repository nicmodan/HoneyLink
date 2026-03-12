import { Image } from 'expo-image';
import { Platform, StyleSheet, StatusBar } from 'react-native';
import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View >
        
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    ...Platform.select({
      android: {
        padding: StatusBar.currentHeight,
      },
      ios: {
        paddingTop: 20, 
      }
    }),
  }
});
