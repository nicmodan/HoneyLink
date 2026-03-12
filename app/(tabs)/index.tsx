// import { Image } from 'expo-image';
import { Platform, StyleSheet, StatusBar } from 'react-native';
import { Link } from 'expo-router';
import { Text, View, Image} from 'react-native';
// import Button from '../components/ui/button';
import Button from '@/components/ui/button';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/images/sample.jpg')}
        style={styles.backgroundImageStyle}
      />
      <View style={styles.subContainer}>
          <View style={styles.innerSubContainer}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Find Your Perfect Match</Text>

            <Button to="/login">
              <Text>Sign In</Text>
            </Button>
            <Button to="/signup">
              <Text>Sign Up</Text>
            </Button>
          </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    // flexDirection: 'column',
    position: 'relative',
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight,
      },
      ios: {
        paddingTop: 20, 
      }
    }),
  },
  backgroundImageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    
    
  },
  subContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.44)', // 半透明の黒背景
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerSubContainer: {
    width: '80%',
    height: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // 半透明の白背景
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }

});
