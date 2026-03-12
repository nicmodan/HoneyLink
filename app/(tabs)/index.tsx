import { Image } from 'expo-image';
import { Platform, StyleSheet, StatusBar, View, Text, Pressable } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.centerTextContainer}>
          <Text style={styles.displayText}>
            Find Your Perfect March
          </Text>
          <Pressable style={{marginBottom: 10, backgroundColor: "pink", borderRadius: 10}}>
            <Text style={{color: '#000000', fontSize: 18, fontWeight: 'bold'}}>
              Get Started
            </Text>
          </Pressable>
          <Pressable style={{marginBottom: 10, backgroundColor: "gray", borderRadius: 10}}>
            <Text style={{color: '#000000', fontSize: 18, fontWeight: 'bold'}}>
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
    // backgroundImage: 'url(../assets/images/frontimage.png)',
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
    height: '100%',
    // backgroundImage: 'url(../assets/images/frontimage.png)',
  },
  centerTextContainer: {
    alignItems: 'center',
    justifyContent: 'center', 
    width: '85%',
  },
  displayText:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 20,
  }
});

