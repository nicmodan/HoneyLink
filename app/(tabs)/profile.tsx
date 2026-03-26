import { useState } from "react";
import { View } from "react-native";
import Navigation from "./navigation";
import GalleryScreen from "../../components/GalleryScreen";
import ProfileHeader from "../../components/ProfileHeader";
import styles from "../../style";

const ProfileUI = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <View style={styles.defaultProfileScreen}>
      <ProfileHeader />
      <GalleryScreen />
      <Navigation activeTab={activeTab} onTabPress={setActiveTab} />
    </View>
  );
};

export default ProfileUI;
