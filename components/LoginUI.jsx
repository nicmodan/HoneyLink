import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import styles from '../style';
import HeaderSection from './HeaderSection';
import SocialLogin from './SocialLogin';
const loginUI = () => {
  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <HeaderSection />
        <SocialLogin />
    </View>
  )
}

export default loginUI
