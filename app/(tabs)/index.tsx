import { Image } from 'expo-image';
import { Platform, StyleSheet, StatusBar } from 'react-native';
import { View, Text, TextInput, Pressable  } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
    <Image
      source= {require('../../assets/images/sample.jpg' )}
      // style={styles?}
    />   
    <view 
      // style={styles.subContainer}
    >
    
    </view>
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
    backgroundImage: 'red',
    ...Platform.select({
      ios:{
        paddingTop: 25
      },
      android: {
        paddingTop: StatusBar.currentHeight
      }
    })
  },
backgroungImageStyle: {
  width: '100%',
  height: '100%',
  resizeMode: 'cover'

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
