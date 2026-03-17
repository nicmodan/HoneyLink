import Entypo from '@expo/vector-icons/Entypo';
import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../style';

const HeaderSection = () => {
  const router = useRouter();
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerContainer2}>        
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Entypo name="chevron-left" size={35} color="black" />
        </TouchableOpacity>     
        <Text style={styles.headerTitle}>Login</Text> 
      </View>
      
      <Text style={styles.welcomeText}>Welcome Back</Text>
      <Text style={styles.subText}>Sign in to continue</Text>
    </View>
  );
};

export default HeaderSection;
