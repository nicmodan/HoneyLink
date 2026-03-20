import { useState } from 'react'
import { View, Text } from 'react-native'
import Navigation from '../../components/Navigation'
import styles from '../../style'
const ProfileUI = () => {
  const [activeTab, setActiveTab] = useState('profile')
  return (
    <View style={styles.container}>
      <Text style={styles.subText}>Profile UI</Text>
        <Navigation activeTab={activeTab} onTabPress={setActiveTab} />
    </View>
  )
}

export default ProfileUI
