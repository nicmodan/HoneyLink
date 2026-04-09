import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { router } from 'expo-router';
import Icon from '@expo/vector-icons/Ionicons';
import { useQuery, useMutation } from '@apollo/client/react';
import { ME, UPDATE_PROFILE } from '../../scripts/graphql';

const PINK = '#E8476A';

export default function EditProfileScreen() {
  const { data, loading } = useQuery(ME);
  const [doUpdate, { loading: saving }] = useMutation(UPDATE_PROFILE, {
    refetchQueries: [{ query: ME }],
    onCompleted: () => {
      Alert.alert('Saved', 'Profile updated successfully.');
      router.back();
    },
    onError: (e) => Alert.alert('Error', e.message),
  });

  const [form, setForm] = useState({ bio: '', age: '', city: '', interests: '' });

  useEffect(() => {
    if (data?.me?.profile) {
      const p = data.me.profile;
      setForm({
        bio: p.bio ?? '',
        age: p.age ? String(p.age) : '',
        city: p.city ?? '',
        interests: (p.interests ?? []).join(', '),
      });
    }
  }, [data]);

  const handleSave = () => {
    const input: any = {
      bio: form.bio,
      city: form.city,
      interests: form.interests.split(',').map((s: string) => s.trim()).filter(Boolean),
    };
    if (form.age) input.age = parseInt(form.age, 10);
    doUpdate({ variables: { input } });
  };

  const photo = data?.me?.profile?.photos?.[0] || 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400';

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.headerBtn}>
          <Icon name="chevron-back" size={22} color="#111827" />
        </Pressable>
        <Text style={styles.headerTitle}>Edit Profile</Text>
        <Pressable style={styles.saveBtn} onPress={handleSave} disabled={saving}>
          {saving ? (
            <ActivityIndicator size="small" color={PINK} />
          ) : (
            <Text style={styles.saveText}>Save</Text>
          )}
        </Pressable>
      </View>

      {loading ? (
        <View style={styles.centered}>
          <ActivityIndicator size="large" color={PINK} />
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
          {/* Avatar */}
          <View style={styles.avatarWrap}>
            <View style={styles.avatarFrame}>
              <Image source={{ uri: photo }} style={styles.avatar} />
              <Pressable style={styles.cameraBtn} onPress={() => Alert.alert('Photo', 'Photo upload coming soon.')}>
                <Icon name="camera-outline" size={16} color="#fff" />
              </Pressable>
            </View>
          </View>

          {/* Fields */}
          <View style={styles.fields}>
            <FieldCard label="Bio" value={form.bio} onChange={(v) => setForm((f) => ({ ...f, bio: v }))} multiline placeholder="Tell others about yourself..." />
            <FieldCard label="Age" value={form.age} onChange={(v) => setForm((f) => ({ ...f, age: v }))} keyboardType="numeric" placeholder="Your age" />
            <FieldCard label="City" value={form.city} onChange={(v) => setForm((f) => ({ ...f, city: v }))} placeholder="Your city" />
            <FieldCard label="Interests (comma-separated)" value={form.interests} onChange={(v) => setForm((f) => ({ ...f, interests: v }))} placeholder="e.g. hiking, music, travel" />
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

function FieldCard({ label, value, onChange, placeholder, multiline, keyboardType }: any) {
  return (
    <View style={styles.fieldCard}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChange}
        style={[styles.fieldInput, multiline && { height: 90, textAlignVertical: 'top' }]}
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        multiline={multiline}
        keyboardType={keyboardType ?? 'default'}
        autoCapitalize="none"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#fff' },
  centered: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  headerBtn: { padding: 4 },
  headerTitle: { fontSize: 17, fontWeight: '700', color: '#111' },
  saveBtn: { paddingHorizontal: 14, paddingVertical: 6, backgroundColor: PINK, borderRadius: 99 },
  saveText: { color: '#fff', fontWeight: '700', fontSize: 14 },
  content: { paddingBottom: 40 },
  avatarWrap: { alignItems: 'center', paddingVertical: 24 },
  avatarFrame: { position: 'relative' },
  avatar: { width: 100, height: 100, borderRadius: 50 },
  cameraBtn: {
    position: 'absolute', bottom: 0, right: 0,
    backgroundColor: PINK, width: 32, height: 32, borderRadius: 16,
    alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: '#fff',
  },
  fields: { paddingHorizontal: 20 },
  fieldCard: { marginBottom: 16 },
  fieldLabel: { fontSize: 12, fontWeight: '600', color: '#888', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 6 },
  fieldInput: {
    borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 12,
    paddingHorizontal: 14, paddingVertical: 12,
    fontSize: 15, color: '#111',
  },
});
