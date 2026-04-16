<<<<<<< HEAD
import { useState } from 'react'
import { View } from 'react-native'
import Navigation from '../../components/Navigation'
import ProfileHeader from '../../components/ProfileHeader'
import GalleryScreen from '../../components/GalleryScreen'
import styles from '../../style'
const ProfileUI = () => {
  const [activeTab, setActiveTab] = useState('profile')
  return (
    <View style={styles.container}>
      <ProfileHeader />
      <View style={styles.profileContent}>
        <GalleryScreen />
      </View>
      <Navigation activeTab={activeTab} onTabPress={setActiveTab} />
    </View>
  )
}

export default ProfileUI
=======
export { default } from "./profile";
>>>>>>> ed01e430a4991e9820c23cbcc243ae279088c535
