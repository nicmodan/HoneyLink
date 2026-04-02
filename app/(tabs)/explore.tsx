import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  FlatList,
  Dimensions,
  Modal,
  StatusBar,
  SafeAreaView,
} from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_GAP = 10;
const CARD_SIZE = (SCREEN_WIDTH - 32 - CARD_GAP) / 2;

const COLORS = {
  bg: '#F7F5F2',
  white: '#FFFFFF',
  pink: '#E8385A',
  text: '#1A1A1A',
  textMuted: '#9B9B9B',
};

const PROFILES = [
  { id: '1', name: 'Katty Pary',     age: 24, role: 'Student',                color: '#C9847A' },
  { id: '2', name: 'Shakila Mahmud', age: 25, role: 'Music & Sport Activist', color: '#7A9EC9' },
  { id: '3', name: 'Katty Pary',     age: 22, role: 'Student',                color: '#8DC97A' },
  { id: '4', name: 'Shakira',        age: 28, role: 'Student',                color: '#C9A87A' },
  { id: '5', name: 'Katty Pary',     age: 21, role: 'Student',                color: '#A07AC9' },
  { id: '6', name: 'Shakira',        age: 26, role: 'Student',                color: '#7AC9B8' },
];

type Profile = (typeof PROFILES)[0];

// --- Full Screen Profile ---
function FullScreenProfile({ profile, onClose, onLike, onPass }: {
  profile: Profile; onClose: () => void; onLike: () => void; onPass: () => void;
}) {
  const likeScale = useRef(new Animated.Value(1)).current;
  const passScale = useRef(new Animated.Value(1)).current;

  const animateBtn = (anim: Animated.Value, cb: () => void) => {
    Animated.sequence([
      Animated.spring(anim, { toValue: 1.25, friction: 4, useNativeDriver: true }),
      Animated.spring(anim, { toValue: 1,    friction: 5, useNativeDriver: true }),
    ]).start(() => cb());
  };

  return (
    <Modal visible animationType="slide" onRequestClose={onClose}>
      <View style={styles.fullScreen}>
        <StatusBar barStyle="light-content" />

        <View style={[styles.fullPhoto, { backgroundColor: profile.color }]}>
          <Text style={styles.fullPhotoIcon}>◉</Text>
        </View>

        <View style={styles.fullGradient} />

        <SafeAreaView style={styles.fullTopBar}>
          <TouchableOpacity onPress={onClose} style={styles.backBtn}>
            <Text style={styles.backBtnText}>‹</Text>
          </TouchableOpacity>
        </SafeAreaView>

        <View style={styles.fullInfo}>
          <Text style={styles.fullName}>{profile.name}, {profile.age}</Text>
          <Text style={styles.fullRole}>{profile.role}</Text>
        </View>

        <View style={styles.fullActions}>
          <Animated.View style={{ transform: [{ scale: passScale }] }}>
            <TouchableOpacity
              style={styles.passBtn}
              onPress={() => animateBtn(passScale, onPass)}
              activeOpacity={0.85}
            >
              <Text style={styles.passBtnText}>✕</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View style={{ transform: [{ scale: likeScale }] }}>
            <TouchableOpacity
              style={styles.likeBtn}
              onPress={() => animateBtn(likeScale, onLike)}
              activeOpacity={0.85}
            >
              <Text style={styles.likeBtnText}>♥</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </Modal>
  );
}

// --- Grid Card ---
function ProfileCard({ profile, onPress }: { profile: Profile; onPress: () => void }) {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, { toValue: 0.95, duration: 80, useNativeDriver: true }),
      Animated.spring(scaleAnim, { toValue: 1, friction: 5, useNativeDriver: true }),
    ]).start(() => onPress());
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.9}>
      <Animated.View style={[styles.card, { transform: [{ scale: scaleAnim }] }]}>
        <View style={[styles.cardPhoto, { backgroundColor: profile.color }]}>
          <Text style={styles.cardPhotoIcon}>◉</Text>
        </View>
        <View style={styles.cardGradient} />
        <View style={styles.cardInfo}>
          <Text style={styles.cardName}>{profile.name}</Text>
          <Text style={styles.cardRole}>{profile.role}</Text>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
}

// --- Main Screen ---
export default function DiscoveryScreen() {
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

  const handleLike = () => setSelectedProfile(null);
  const handlePass = () => setSelectedProfile(null);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.bg} />

      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navBack}>
          <Text style={styles.navBackText}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.navTitle}>Discover</Text>
        <View style={styles.navIcons}>
          <TouchableOpacity style={styles.navIconBtn}><Text style={styles.navIcon}>♡</Text></TouchableOpacity>
          <TouchableOpacity style={styles.navIconBtn}><Text style={styles.navIcon}>≡</Text></TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={PROFILES}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ProfileCard profile={item} onPress={() => setSelectedProfile(item)} />
        )}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.grid}
        showsVerticalScrollIndicator={false}
      />

      {selectedProfile && (
        <FullScreenProfile
          profile={selectedProfile}
          onClose={() => setSelectedProfile(null)}
          onLike={handleLike}
          onPass={handlePass}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.bg },

  navbar: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 16, paddingVertical: 12, backgroundColor: COLORS.bg,
  },
  navBack:     { width: 36, height: 36, alignItems: 'center', justifyContent: 'center' },
  navBackText: { fontSize: 28, color: COLORS.textMuted, lineHeight: 32 },
  navTitle:    { fontSize: 18, fontWeight: '700', color: COLORS.text, letterSpacing: -0.3 },
  navIcons:    { flexDirection: 'row', gap: 4 },
  navIconBtn:  { width: 36, height: 36, alignItems: 'center', justifyContent: 'center' },
  navIcon:     { fontSize: 20, color: COLORS.textMuted },

  grid: { paddingHorizontal: 16, paddingBottom: 24, paddingTop: 4 },
  row:  { gap: CARD_GAP, marginBottom: CARD_GAP },

  card:         { width: CARD_SIZE, height: CARD_SIZE * 1.35, borderRadius: 18, overflow: 'hidden', backgroundColor: '#ccc' },
  cardPhoto:    { ...StyleSheet.absoluteFillObject, alignItems: 'center', justifyContent: 'center' },
  cardPhotoIcon:{ fontSize: 48, opacity: 0.2, color: '#fff' },
  cardGradient: {
    position: 'absolute', bottom: 0, left: 0, right: 0, height: '55%',
    borderBottomLeftRadius: 18, borderBottomRightRadius: 18,
    backgroundColor: 'rgba(0,0,0,0.38)',
  },
  cardInfo: { position: 'absolute', bottom: 10, left: 10 },
  cardName: { color: COLORS.white, fontSize: 13, fontWeight: '700', letterSpacing: -0.2 },
  cardRole: { color: 'rgba(255,255,255,0.75)', fontSize: 10, fontWeight: '500' },

  fullScreen:    { flex: 1, backgroundColor: '#000' },
  fullPhoto:     { ...StyleSheet.absoluteFillObject, alignItems: 'center', justifyContent: 'center' },
  fullPhotoIcon: { fontSize: 120, opacity: 0.15, color: '#fff' },
  fullGradient:  {
    position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%',
    backgroundColor: 'rgba(0,0,0,0.55)',
  },
  fullTopBar: { position: 'absolute', top: 0, left: 0, right: 0, paddingHorizontal: 16, paddingTop: 8 },
  backBtn:    {
    width: 40, height: 40, borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center', justifyContent: 'center',
  },
  backBtnText: { fontSize: 28, color: '#fff', lineHeight: 34 },
  fullInfo:    { position: 'absolute', bottom: 130, left: 24 },
  fullName:    { color: '#fff', fontSize: 28, fontWeight: '800', letterSpacing: -0.5 },
  fullRole:    { color: 'rgba(255,255,255,0.8)', fontSize: 14, fontWeight: '500', marginTop: 4 },

  fullActions: {
    position: 'absolute', bottom: 50,
    width: '100%', flexDirection: 'row',
    justifyContent: 'center', gap: 40, alignItems: 'center',
  },
  passBtn: {
    width: 64, height: 64, borderRadius: 32,
    backgroundColor: COLORS.white,
    alignItems: 'center', justifyContent: 'center',
    shadowColor: '#000', shadowOpacity: 0.15, shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 }, elevation: 6,
  },
  passBtnText: { fontSize: 24, color: '#999' },
  likeBtn: {
    width: 72, height: 72, borderRadius: 36,
    backgroundColor: COLORS.pink,
    alignItems: 'center', justifyContent: 'center',
    shadowColor: COLORS.pink, shadowOpacity: 0.5, shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 }, elevation: 8,
  },
  likeBtnText: { fontSize: 28, color: '#fff' },
});