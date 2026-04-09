import React, { useState } from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useQuery } from '@apollo/client/react';
import { useRouter } from 'expo-router';
import { ME } from '../../scripts/graphql';
import Navigation from './navigation';

const PINK = '#E8476A';

export default function ProfileScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('profile');
  const [tab, setTab] = useState<'about' | 'gallery'>('about');

  const { data, loading } = useQuery(ME);
  const me = data?.me;

  const handleTabPress = (t: string) => {
    setActiveTab(t);
    if (t === 'home') router.push('/swipe');
    if (t === 'favorites') router.push('/matches');
    if (t === 'messages') router.push('/messages');
    if (t === 'add') router.push('/shorts');
  };

  const photo = me?.profile?.photos?.[0] || 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400';

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>My Profile</Text>
        <TouchableOpacity onPress={() => router.push('/edit-profile')}>
          <Ionicons name="create-outline" size={24} color={PINK} />
        </TouchableOpacity>
      </View>

      {loading ? (
        <View style={styles.centered}>
          <ActivityIndicator size="large" color={PINK} />
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
          {/* Avatar */}
          <View style={styles.avatarSection}>
            <Image source={{ uri: photo }} style={styles.avatar} />
            <Text style={styles.name}>{me?.username ?? 'Your Name'}</Text>
            {me?.profile?.city ? (
              <View style={styles.locationRow}>
                <Ionicons name="location-outline" size={14} color="#888" />
                <Text style={styles.location}>{me.profile.city}</Text>
              </View>
            ) : null}
            <View style={[styles.planBadge, me?.subscription?.status === 'active' ? styles.planBadgePro : {}]}>
              <Text style={styles.planBadgeText}>
                {me?.subscription?.status === 'active' ? `${me.subscription.plan?.toUpperCase()} ✨` : 'FREE'}
              </Text>
            </View>
          </View>

          {/* Tabs */}
          <View style={styles.tabs}>
            <TouchableOpacity
              style={[styles.tabBtn, tab === 'about' && styles.tabBtnActive]}
              onPress={() => setTab('about')}>
              <Text style={[styles.tabText, tab === 'about' && styles.tabTextActive]}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tabBtn, tab === 'gallery' && styles.tabBtnActive]}
              onPress={() => setTab('gallery')}>
              <Text style={[styles.tabText, tab === 'gallery' && styles.tabTextActive]}>Gallery</Text>
            </TouchableOpacity>
          </View>

          {tab === 'about' ? (
            <View style={styles.aboutSection}>
              <InfoRow icon="person-outline" label="Username" value={me?.username} />
              <InfoRow icon="mail-outline" label="Email" value={me?.email} />
              <InfoRow icon="calendar-outline" label="Age" value={me?.profile?.age ? String(me.profile.age) : undefined} />
              <InfoRow icon="location-outline" label="City" value={me?.profile?.city} />
              {me?.profile?.bio ? (
                <View style={styles.bioBox}>
                  <Text style={styles.bioLabel}>Bio</Text>
                  <Text style={styles.bioText}>{me.profile.bio}</Text>
                </View>
              ) : null}
              {me?.profile?.interests?.length ? (
                <View style={styles.interestSection}>
                  <Text style={styles.bioLabel}>Interests</Text>
                  <View style={styles.interestTags}>
                    {me.profile.interests.map((interest: string) => (
                      <View key={interest} style={styles.tag}>
                        <Text style={styles.tagText}>{interest}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              ) : null}
            </View>
          ) : (
            <View style={styles.gallery}>
              {(me?.profile?.photos ?? []).map((uri: string, i: number) => (
                <Image key={i} source={{ uri }} style={styles.galleryImg} />
              ))}
              {(!me?.profile?.photos || me.profile.photos.length === 0) && (
                <Text style={styles.noPhotos}>No photos yet. Edit your profile to add some!</Text>
              )}
            </View>
          )}

          <TouchableOpacity style={styles.editBtn} onPress={() => router.push('/edit-profile')}>
            <Text style={styles.editBtnText}>Edit Profile</Text>
          </TouchableOpacity>
        </ScrollView>
      )}

      <Navigation activeTab={activeTab} onTabPress={handleTabPress} />
    </SafeAreaView>
  );
}

function InfoRow({ icon, label, value }: { icon: any; label: string; value?: string }) {
  if (!value) return null;
  return (
    <View style={styles.infoRow}>
      <Ionicons name={icon} size={18} color="#888" />
      <View>
        <Text style={styles.infoLabel}>{label}</Text>
        <Text style={styles.infoValue}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#fff' },
  centered: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  title: { fontSize: 22, fontWeight: '800', color: '#111' },
  content: { paddingBottom: 40 },
  avatarSection: { alignItems: 'center', paddingVertical: 28 },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 12 },
  name: { fontSize: 22, fontWeight: '700', color: '#111', marginBottom: 4 },
  locationRow: { flexDirection: 'row', alignItems: 'center', gap: 4, marginBottom: 10 },
  location: { fontSize: 13, color: '#888' },
  planBadge: { backgroundColor: '#F3F4F6', paddingHorizontal: 14, paddingVertical: 5, borderRadius: 99 },
  planBadgePro: { backgroundColor: '#FFF0F5', borderWidth: 1, borderColor: PINK },
  planBadgeText: { fontSize: 12, fontWeight: '700', color: PINK },
  tabs: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#F3F4F6', marginHorizontal: 20 },
  tabBtn: { flex: 1, paddingVertical: 12, alignItems: 'center' },
  tabBtnActive: { borderBottomWidth: 2, borderBottomColor: PINK },
  tabText: { fontSize: 14, fontWeight: '600', color: '#888' },
  tabTextActive: { color: PINK },
  aboutSection: { paddingHorizontal: 20, paddingTop: 16 },
  infoRow: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#F9FAFB' },
  infoLabel: { fontSize: 11, color: '#aaa', textTransform: 'uppercase', letterSpacing: 0.5 },
  infoValue: { fontSize: 15, color: '#333', marginTop: 1 },
  bioBox: { paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#F9FAFB' },
  bioLabel: { fontSize: 11, color: '#aaa', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 6 },
  bioText: { fontSize: 15, color: '#444', lineHeight: 22 },
  interestSection: { paddingVertical: 14 },
  interestTags: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 8 },
  tag: { backgroundColor: '#FFF0F5', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 99, borderWidth: 1, borderColor: '#FFD6E0' },
  tagText: { fontSize: 13, color: PINK, fontWeight: '600' },
  gallery: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 16, paddingTop: 16, gap: 4 },
  galleryImg: { width: '31%', aspectRatio: 1, borderRadius: 10 },
  noPhotos: { fontSize: 14, color: '#aaa', textAlign: 'center', paddingVertical: 30, width: '100%' },
  editBtn: {
    marginHorizontal: 20,
    marginTop: 24,
    backgroundColor: PINK,
    borderRadius: 99,
    paddingVertical: 14,
    alignItems: 'center',
  },
  editBtnText: { color: '#fff', fontWeight: '700', fontSize: 16 },
});
