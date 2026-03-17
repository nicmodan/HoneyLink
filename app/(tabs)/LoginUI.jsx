import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import styles from '../../style';
import HeaderSection from '../../components/HeaderSection';
import SocialLogin from '../../components/SocialLogin';
import EmailPassword from '../../components/EmailPassword';
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
