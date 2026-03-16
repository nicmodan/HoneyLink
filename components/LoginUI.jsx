import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import styles from '../style';
import HeaderSection from './HeaderSection';

const loginUI = () => {
  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <HeaderSection />

    </View>
  )
}

export default loginUI
