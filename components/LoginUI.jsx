import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import styles from '../style';
import HeaderSection from './HeaderSection';
import SocialLogin from './SocialLogin';
import EmailPassword from './EmailPassword';
const loginUI = () => {
  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <HeaderSection />
        <EmailPassword />
        <SocialLogin />
    </View>
  )
}

export default loginUI
