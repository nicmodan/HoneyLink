// import { Image } from 'expo-image';
import { Platform, StyleSheet, StatusBar } from 'react-native';
import { Link } from 'expo-router';
import { Text, View, Image} from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/images/sample.jpg')}
        style={styles.backgroundImageStyle}
      />
      <View style={styles.subContainer}>

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
  }

});
