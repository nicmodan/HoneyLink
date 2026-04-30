import { router } from 'expo-router';
import React from 'react';
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import styles from '../../style';

const DEV_ROUTES = [
  { label: 'Chat List', path: '/chatlist' },
  { label: 'Chat Room', path: '/chat-room', params: { chatId: 'dev-chat', chatName: 'Demo Chat' } },
  { label: 'Matches', path: '/matches' },
  { label: 'Swipe', path: '/swipe' },
  { label: 'Profile', path: '/profile' },
  { label: 'Shorts', path: '/shorts' },
];

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('../../assets/images/Couples.jpg')}
        resizeMode="cover"
        style={styles.background}>
        <View style={styles.overlay} />
        <View style={styles.content}>
          <Text style={styles.displayText}>Find Your Perfect Match Today</Text>

          <Pressable style={styles.primaryButton} onPress={() => router.push('/login')}>
            <Text style={styles.primaryButtonText}>Login</Text>
          </Pressable>

          <Pressable style={styles.secondaryButton} onPress={() => router.push('/signup')}>
            <Text style={styles.secondaryButtonText}>Sign Up</Text>
          </Pressable>

          <View style={devStyles.devPanel}>
            <Text style={devStyles.devTitle}>Temporary Dev Shortcuts</Text>
            <Text style={devStyles.devSubtitle}>
              Remove this when the backend is back.
            </Text>
            <View style={devStyles.devGrid}>
              {DEV_ROUTES.map((route) => (
                <Pressable
                  key={route.label}
                  style={devStyles.devButton}
                  onPress={() =>
                    route.params
                      ? router.push({ pathname: route.path as never, params: route.params })
                      : router.push(route.path as never)
                  }>
                  <Text style={devStyles.devButtonText}>{route.label}</Text>
                </Pressable>
              ))}
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const devStyles = StyleSheet.create({
  devPanel: {
    marginTop: 24,
    borderRadius: 24,
    backgroundColor: 'rgba(17, 24, 39, 0.72)',
    padding: 18,
  },
  devTitle: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
  devSubtitle: {
    color: 'rgba(255,255,255,0.78)',
    fontSize: 12,
    marginTop: 4,
    marginBottom: 14,
  },
  devGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  devButton: {
    minWidth: '47%',
    flexGrow: 1,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.18)',
    backgroundColor: 'rgba(255,255,255,0.12)',
    paddingVertical: 12,
    paddingHorizontal: 14,
    alignItems: 'center',
  },
  devButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
});
