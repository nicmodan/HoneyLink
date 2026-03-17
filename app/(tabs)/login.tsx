import { View, Text, StyleSheet, Platform, StatusBar } from "react-native";

const LoginScreen = () => {
  return (
    <View style={styles.container}>  
        <Text>Login Screen</Text>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
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