import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import styles from '../style'; 
import { useRouter } from 'expo-router';

const ProfileHeader = () => {
  const router = useRouter();
  return (
    <View style={styles.profileContainer}>
      <View style={styles.headerRow}>
        <TouchableOpacity style={styles.backButton2} onPress={() => router.back()}>
          <Entypo name="chevron-left" size={30} color="black" />
        </TouchableOpacity>
        
        <Text style={styles.profileTitle}>Profile</Text>
        
        <TouchableOpacity>
          <Text style={styles.editButton}>Edit</Text>
        </TouchableOpacity>
      </View>

      <Image
        source={require('../assets/light bulb.jpg')}
        style={styles.profileImage}
      />

      {/* Name */}
      <Text style={styles.profileName}>Jayson Moama, 34</Text>

      {/* Location */}
      <Text style={styles.profileLocation}>San Francisco, USA</Text>

      <View style={styles.statsRow}>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>
            120
          </Text>

          <Text style={styles.statLabel}>
            Followers
          </Text>
        </View>

        <View style={styles.stat}>
          <Text style={styles.statNumber}>
            300
          </Text>

          <Text style={styles.statLabel}>
            Following
          </Text>
        </View>

        <View style={styles.stat}>
          <Text style={styles.statNumber}>
            50
          </Text>

          <Text style={styles.statLabel}>
            Favourites
          </Text>
        </View>
      </View>

    </View>
  );
};

export default ProfileHeader;