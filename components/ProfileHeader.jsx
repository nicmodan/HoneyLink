import { View, Text, TouchableOpacity, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import styles from "../style";

const ProfileHeader = () => {
  const router = useRouter();

  return (
    <View style={styles.defaultProfileHeaderContainer}>
      <View style={styles.defaultProfileHeaderRow}>
        <TouchableOpacity
          style={styles.defaultProfileBackButton}
          onPress={() => router.back()}
        >
          <Entypo name="chevron-left" size={28} color="#111" />
        </TouchableOpacity>

        <Text style={styles.defaultProfileTitle}>Profile</Text>

        <TouchableOpacity onPress={() => router.push("/edit-profile")}>
          <Text style={styles.defaultProfileEditButton}>Edit</Text>
        </TouchableOpacity>
      </View>

      <Image
        source={require("../assets/images/sample.jpg")}
        style={styles.defaultProfileImage}
      />

      <Text style={styles.defaultProfileName}>Jayson Moama, 34</Text>
      <Text style={styles.defaultProfileLocation}>San Francisco, USA</Text>

      <View style={styles.defaultProfileStatsRow}>
        <View style={styles.defaultProfileStat}>
          <Text style={styles.defaultProfileStatNumber}>120</Text>
          <Text style={styles.defaultProfileStatLabel}>Matches</Text>
        </View>

        <View style={styles.defaultProfileStat}>
          <Text style={styles.defaultProfileStatNumber}>300</Text>
          <Text style={styles.defaultProfileStatLabel}>Likes</Text>
        </View>

        <View style={styles.defaultProfileStat}>
          <Text style={styles.defaultProfileStatNumber}>50</Text>
          <Text style={styles.defaultProfileStatLabel}>Favourites</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileHeader;
