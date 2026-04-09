import React from 'react';
import { Platform, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import styles from '@/style';

type Props = {
  activeTab: string;
  onTabPress?: (tab: string) => void;
};

const PINK = '#FF4D6D';
const GREY = '#999';

const Navigation: React.FC<Props> = ({ activeTab, onTabPress }) => {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const bottomInset = Platform.OS === 'ios' ? Math.max(insets.bottom, 10) : 15;

  const handleTabPress = (tab: string) => {
    onTabPress?.(tab);
    if (tab === 'home') router.push('/swipe');
    if (tab === 'favorites') router.push('/matches');
    if (tab === 'messages') router.push('/messages');
    if (tab === 'profile') router.push('/profile');
    if (tab === 'add') router.push('/shorts');
  };

  const iconColor = (tab: string) => (activeTab === tab ? PINK : GREY);

  return (
    <View
      style={[
        styles.navigationContainer,
        { paddingBottom: bottomInset, height: 72 + bottomInset },
      ]}>
      <TouchableOpacity onPress={() => handleTabPress('home')}>
        <Ionicons name="home-outline" size={24} color={iconColor('home')} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleTabPress('favorites')}>
        <Ionicons name="heart-outline" size={24} color={iconColor('favorites')} />
      </TouchableOpacity>

      {/* Floating Add / Shorts Button */}
      <TouchableOpacity
        style={[styles.fab, { bottom: Platform.OS === 'ios' ? bottomInset + 4 : 57 }]}
        onPress={() => handleTabPress('add')}>
        <Ionicons name="play" size={24} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleTabPress('messages')}>
        <Ionicons name="chatbubble-outline" size={24} color={iconColor('messages')} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleTabPress('profile')}>
        <Ionicons name="person-outline" size={24} color={iconColor('profile')} />
      </TouchableOpacity>
    </View>
  );
};

export default Navigation;
