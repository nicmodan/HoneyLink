import { View, Text, StyleSheet, Platform, StatusBar  } from "react-native";

const SignUp = () => {
  return (
    <View style={styles.container}>  
        <Text>Sign up Screen</Text>
    </View>
  );
}

export default SignUp;


const styles = StyleSheet.create({
    container: {
        // width: '100%',
        // height: '100%',
        flex: 1,
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
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
})