import { Image } from 'expo-image';
import { Platform, StyleSheet, StatusBar } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
// import { Text } from '@react-navigation/elements';
import { View, Text, TextInput, Pressable  } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>

        <View style={styles.centerTextContainer}>
          <Text style={styles.displayText}>
            Find Your Perfect March
          </Text>
          <Pressable style={{marginBottom: 10, backgroundColor: "pink", borderRadius: 10}}>
            <Text style={{color: '#000000', fontSize: 18, fontWeight: 'bold'}}></Text>
              Get Started
            </Text>
          </Pressable>
          <Pressable style={{marginBottom: 10, backgroundColor: "gray", borderRadius: 10}}>
            <Text style={{color: '#000000', fontSize: 18, fontWeight: 'bold'}}></Text>
              Get Started
            </Text>
          </Pressable>

        </View>
        
       

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundImage: 'url(../assets/images/frontimage.png)',
    // backgroundSize: 'cover',
    // backgroundAttachment: 'fixed',
    ...Platform.select({
      ios:{
        paddingTop: 25
      },
      android: {
        paddingTop: StatusBar.currentHeight
      }
    })
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    height: '100vh',
    backgroundImage: 'url(../assets/images/frontimage.png)',
    // backgroundColor: 'rgba(197, 43, 43, 0.17)', // Adjust the opacity as needed
  },
  cneterTextContiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', 
    width: '85%',
    height: '50%'
  },
  displayText:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 20,
  }

});
