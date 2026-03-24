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
