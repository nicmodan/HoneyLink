import { View } from 'react-native'
import styles from '../../style'
import MatchHeader from '../../components/MatchHeader'
import MatchCongrats from '../../components/MatchCongrats'
import OverlappingProfiles from '../../components/OverlappingProfiles'
const Match = () => {
  return (
    <View style={styles.container}>
        <MatchHeader />      
        <OverlappingProfiles />
        <MatchCongrats />
    </View> 
  )
}

export default Match
