import React, { useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Modal,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_GAP = 10;
const CARD_SIZE = (SCREEN_WIDTH - 32 - CARD_GAP) / 2;

const COLORS = {
  bg: '#F7F5F2',
  white: '#FFFFFF',
  pink: '#E8385A',
  text: '#1A1A1A',
  textMuted: '#9B9B9B',
  overlay: 'rgba(0,0,0,0.65)',
};

const PROFILES = [
  { id: '1', name: 'Katty Pary', age: 24, role: 'Student', color: '#C9847A', matchChance: 0.3 },
  { id: '2', name: 'Shakila Mahmud', age: 25, role: 'Music & Sport Activist', color: '#7A9EC9', matchChance: 0.95 },
  { id: '3', name: 'Katty Pary', age: 22, role: 'Student', color: '#8DC97A', matchChance: 0.2 },
  { id: '4', name: 'Shakira', age: 28, role: 'Student', color: '#C9A87A', matchChance: 0.4 },
  { id: '5', name: 'Katty Pary', age: 21, role: 'Student', color: '#A07AC9', matchChance: 0.15 },
  { id: '6', name: 'Shakira', age: 26, role: 'Student', color: '#7AC9B8', matchChance: 0.35 },
];

type Profile = (typeof PROFILES)[0];

function ConfettiPiece({ x, delay, color }: { x: number; delay: number; color: string }) {
  const translateY = useRef(new Animated.Value(-10)).current;
  const opacity = useRef(new Animated.Value(1)).current;
  const rotate = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(translateY, { toValue: 300, duration: 1200, delay, useNativeDriver: true }),
      Animated.timing(opacity, { toValue: 0, duration: 1200, delay, useNativeDriver: true }),
      Animated.timing(rotate, { toValue: 6, duration: 1200, delay, useNativeDriver: true }),
    ]).start();
  }, [delay, opacity, rotate, translateY]);

  const spin = rotate.interpolate({ inputRange: [0, 6], outputRange: ['0deg', '540deg'] });

  return (
    <Animated.View
      style={{
        position: 'absolute',
        left: x,
        top: 60,
        width: 8,
        height: 8,
        borderRadius: 2,
        backgroundColor: color,
        transform: [{ translateY }, { rotate: spin }],
        opacity,
      }}
    />
  );
}

function MatchModal({
  visible,
  profile,
  onMessage,
  onDismiss,
}: {
  visible: boolean;
  profile: Profile | null;
  onMessage: () => void;
  onDismiss: () => void;
}) {
  const scale = useRef(new Animated.Value(0.7)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.spring(scale, { toValue: 1, friction: 6, tension: 100, useNativeDriver: true }),
        Animated.timing(opacity, { toValue: 1, duration: 250, useNativeDriver: true }),
      ]).start();
    } else {
      scale.setValue(0.7);
      opacity.setValue(0);
    }
  }, [opacity, scale, visible]);

  const confettiColors = [COLORS.pink, '#FFD166', '#FFFFFF', '#A8DADC', '#F4A261'];
  const pieces = Array.from({ length: 22 }, (_, i) => ({
    id: i,
    x: Math.random() * (SCREEN_WIDTH - 20),
    delay: Math.random() * 300,
    color: confettiColors[i % confettiColors.length],
  }));

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onDismiss}>
      <View style={styles.matchBackdrop}>
        {pieces.map((piece) => (
          <ConfettiPiece key={piece.id} x={piece.x} delay={piece.delay} color={piece.color} />
        ))}
        <Animated.View style={[styles.matchCard, { transform: [{ scale }], opacity }]}>
          <Ionicons name="heart" size={36} color={COLORS.pink} style={{ marginBottom: 8 }} />
          <Text style={styles.matchTitle}>Congrats it&apos;s a Match!</Text>
          <Text style={styles.matchSub}>Start a conversation now</Text>

          <View style={styles.matchAvatars}>
            <View style={[styles.matchAvatar, { backgroundColor: '#C9847A' }]}>
              <Text style={styles.matchAvatarText}>You</Text>
            </View>
            <View style={styles.matchHeartBadge}>
              <Ionicons name="heart" size={14} color="#fff" />
            </View>
            <View style={[styles.matchAvatar, { backgroundColor: profile?.color ?? '#999999' }]}>
              <Text style={styles.matchAvatarText}>{profile?.name?.split(' ')[0]?.[0] ?? '?'}</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.matchMsgBtn} onPress={onMessage} activeOpacity={0.85}>
            <Text style={styles.matchMsgBtnText}>Send Message</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onDismiss} style={styles.matchSkip}>
            <Text style={styles.matchSkipText}>Keep playing</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </Modal>
  );
}

function FullScreenProfile({
  profile,
  onClose,
  onLike,
  onPass,
}: {
  profile: Profile;
  onClose: () => void;
  onLike: () => void;
  onPass: () => void;
}) {
  const likeScale = useRef(new Animated.Value(1)).current;
  const passScale = useRef(new Animated.Value(1)).current;

  const animateBtn = (anim: Animated.Value, callback: () => void) => {
    Animated.sequence([
      Animated.spring(anim, { toValue: 1.25, friction: 4, useNativeDriver: true }),
      Animated.spring(anim, { toValue: 1, friction: 5, useNativeDriver: true }),
    ]).start(() => callback());
  };

  return (
    <Modal visible animationType="slide" onRequestClose={onClose}>
      <View style={styles.fullScreen}>
        <StatusBar barStyle="light-content" />

        <View style={[styles.fullPhoto, { backgroundColor: profile.color }]}>
          <Ionicons name="person" size={80} color="rgba(255,255,255,0.25)" />
        </View>

        <View style={styles.fullGradient} />

        <SafeAreaView style={styles.fullTopBar}>
          <TouchableOpacity onPress={onClose} style={styles.backBtn}>
            <Ionicons name="chevron-back" size={26} color="#fff" />
          </TouchableOpacity>
        </SafeAreaView>

        <View style={styles.fullInfo}>
          <Text style={styles.fullName}>
            {profile.name}, {profile.age}
          </Text>
          <Text style={styles.fullRole}>{profile.role}</Text>
        </View>

        <View style={styles.fullActions}>
          <Animated.View style={{ transform: [{ scale: passScale }] }}>
            <TouchableOpacity
              style={styles.passBtn}
              onPress={() => animateBtn(passScale, onPass)}
              activeOpacity={0.85}>
              <Ionicons name="close" size={30} color="#999" />
            </TouchableOpacity>
          </Animated.View>

          <Animated.View style={{ transform: [{ scale: likeScale }] }}>
            <TouchableOpacity
              style={styles.likeBtn}
              onPress={() => animateBtn(likeScale, onLike)}
              activeOpacity={0.85}>
              <Ionicons name="heart" size={30} color="#fff" />
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </Modal>
  );
}

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
          <Ionicons name="person" size={40} color="rgba(255,255,255,0.4)" />
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

export default function DiscoveryScreen() {
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [matchedProfile, setMatchedProfile] = useState<Profile | null>(null);
  const [showMatch, setShowMatch] = useState(false);
  const matchPending = useRef(false);

  const handleLike = () => {
    if (!selectedProfile) return;
    const profile = selectedProfile;
    setSelectedProfile(null);

    if (!matchPending.current && Math.random() < profile.matchChance) {
      matchPending.current = true;
      setTimeout(() => {
        setMatchedProfile(profile);
        setShowMatch(true);
      }, 300);
    }
  };

  const handlePass = () => setSelectedProfile(null);

  const closeMatch = () => {
    setShowMatch(false);
    matchPending.current = false;
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.bg} />

      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navBack}>
          <Ionicons name="chevron-back" size={24} color={COLORS.textMuted} />
        </TouchableOpacity>
        <Text style={styles.navTitle}>Discover</Text>
        <View style={styles.navIcons}>
          <TouchableOpacity style={styles.navIconBtn}>
            <Ionicons name="bookmark-outline" size={22} color={COLORS.textMuted} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navIconBtn}>
            <Ionicons name="options-outline" size={22} color={COLORS.textMuted} />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={PROFILES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProfileCard profile={item} onPress={() => setSelectedProfile(item)} />
        )}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.grid}
        showsVerticalScrollIndicator={false}
      />

      {selectedProfile ? (
        <FullScreenProfile
          profile={selectedProfile}
          onClose={() => setSelectedProfile(null)}
          onLike={handleLike}
          onPass={handlePass}
        />
      ) : null}

      <MatchModal
        visible={showMatch}
        profile={matchedProfile}
        onMessage={closeMatch}
        onDismiss={closeMatch}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.bg },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: COLORS.bg,
  },
  navBack: { width: 36, height: 36, alignItems: 'center', justifyContent: 'center' },
  navTitle: { fontSize: 18, fontWeight: '700', color: COLORS.text, letterSpacing: -0.3 },
  navIcons: { flexDirection: 'row', gap: 4 },
  navIconBtn: { minWidth: 36, height: 36, alignItems: 'center', justifyContent: 'center' },
  grid: { paddingHorizontal: 16, paddingBottom: 24, paddingTop: 4 },
  row: { gap: CARD_GAP, marginBottom: CARD_GAP },
  card: {
    width: CARD_SIZE,
    height: CARD_SIZE * 1.35,
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: '#CCCCCC',
  },
  cardPhoto: { ...StyleSheet.absoluteFillObject, alignItems: 'center', justifyContent: 'center' },
  cardGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '55%',
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    backgroundColor: 'rgba(0,0,0,0.38)',
  },
  cardInfo: { position: 'absolute', bottom: 10, left: 10 },
  cardName: { color: COLORS.white, fontSize: 13, fontWeight: '700', letterSpacing: -0.2 },
  cardRole: { color: 'rgba(255,255,255,0.75)', fontSize: 10, fontWeight: '500' },
  fullScreen: { flex: 1, backgroundColor: '#000000' },
  fullPhoto: { ...StyleSheet.absoluteFillObject, alignItems: 'center', justifyContent: 'center' },
  fullGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50%',
    backgroundColor: 'rgba(0,0,0,0.55)',
  },
  fullTopBar: { position: 'absolute', top: 0, left: 0, right: 0, paddingHorizontal: 16, paddingTop: 8 },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullInfo: { position: 'absolute', bottom: 130, left: 24 },
  fullName: { color: '#FFFFFF', fontSize: 28, fontWeight: '800', letterSpacing: -0.5 },
  fullRole: { color: 'rgba(255,255,255,0.8)', fontSize: 14, fontWeight: '500', marginTop: 4 },
  fullActions: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 40,
    alignItems: 'center',
  },
  passBtn: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  likeBtn: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: COLORS.pink,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: COLORS.pink,
    shadowOpacity: 0.5,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 8,
  },
  matchBackdrop: {
    flex: 1,
    backgroundColor: COLORS.overlay,
    alignItems: 'center',
    justifyContent: 'center',
  },
  matchCard: {
    width: SCREEN_WIDTH * 0.82,
    backgroundColor: COLORS.white,
    borderRadius: 28,
    padding: 28,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 8 },
    elevation: 12,
  },
  matchTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: COLORS.pink,
    letterSpacing: -0.5,
    marginBottom: 6,
    textAlign: 'center',
  },
  matchSub: { fontSize: 13, color: COLORS.textMuted, marginBottom: 24, textAlign: 'center' },
  matchAvatars: { flexDirection: 'row', alignItems: 'center', marginBottom: 28 },
  matchAvatar: {
    width: 68,
    height: 68,
    borderRadius: 34,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: COLORS.white,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  matchAvatarText: { color: '#FFFFFF', fontWeight: '700', fontSize: 15 },
  matchHeartBadge: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: COLORS.pink,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: -8,
    zIndex: 2,
    borderWidth: 2,
    borderColor: COLORS.white,
  },
  matchMsgBtn: {
    width: '100%',
    backgroundColor: COLORS.pink,
    borderRadius: 50,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 12,
  },
  matchMsgBtnText: { color: COLORS.white, fontSize: 15, fontWeight: '700', letterSpacing: -0.2 },
  matchSkip: { paddingVertical: 6 },
  matchSkipText: { color: COLORS.textMuted, fontSize: 13, fontWeight: '500' },
});
