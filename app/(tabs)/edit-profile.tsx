import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import Icon from '@expo/vector-icons/Ionicons';
import { useQuery, useMutation } from '@apollo/client/react';
import { ME_WITH_COUNTS, UPDATE_PROFILE } from '../../scripts/graphql';

const PINK = '#E8476A';

export default function EditProfileScreen() {
  const insets = useSafeAreaInsets();
  const topPad = Platform.OS === 'android'
    ? (StatusBar.currentHeight ?? 0) + 8
    : insets.top + 8;

  const { data, loading } = useQuery(ME_WITH_COUNTS);
  const [doUpdate, { loading: saving }] = useMutation(UPDATE_PROFILE, {
    refetchQueries: [{ query: ME_WITH_COUNTS }],
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
      bio: form.bio.trim(),
      city: form.city.trim(),
      interests: form.interests.split(',').map((s: string) => s.trim()).filter(Boolean),
    };
    if (form.age) input.age = parseInt(form.age, 10);
    doUpdate({ variables: { input } });
  };

  const photo = data?.me?.profile?.photos?.[0] ||
    'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400';

  return (
    <View style={styles.screen}>
      {/* Responsive header */}
      <View style={[styles.header, { paddingTop: topPad }]}>
        <Pressable onPress={() => router.back()} style={styles.headerBtn} hitSlop={8}>
          <Icon name="chevron-back" size={24} color="#111" />
        </Pressable>
        <Text style={styles.headerTitle}>Edit Profile</Text>
        <Pressable
          style={[styles.saveBtn, saving && { opacity: 0.6 }]}
          onPress={handleSave}
          disabled={saving}>
          {saving
            ? <ActivityIndicator size="small" color="#fff" />
            : <Text style={styles.saveText}>Save</Text>}
        </Pressable>
      </View>

      {loading ? (
        <View style={styles.centered}>
          <ActivityIndicator size="large" color={PINK} />
        </View>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled">

          {/* Avatar */}
          <View style={styles.avatarWrap}>
            <View style={styles.avatarFrame}>
              <Image source={{ uri: photo }} style={styles.avatar} />
              <Pressable
                style={styles.cameraBtn}
                onPress={() => Alert.alert('Photo', 'Photo upload coming soon.')}>
                <Icon name="camera-outline" size={16} color="#fff" />
              </Pressable>
            </View>
            <Text style={styles.avatarHint}>Tap to change photo</Text>
          </View>

          {/* Fields */}
          <View style={styles.fields}>
            <Field
              label="Bio"
              value={form.bio}
              onChange={(v) => setForm((f) => ({ ...f, bio: v }))}
              placeholder="Tell others about yourself…"
              multiline
            />
            <Field
              label="Age"
              value={form.age}
              onChange={(v) => setForm((f) => ({ ...f, age: v }))}
              placeholder="Your age"
              keyboardType="numeric"
            />
            <Field
              label="City"
              value={form.city}
              onChange={(v) => setForm((f) => ({ ...f, city: v }))}
              placeholder="Your city"
            />
            <Field
              label="Interests"
              value={form.interests}
              onChange={(v) => setForm((f) => ({ ...f, interests: v }))}
              placeholder="e.g. hiking, music, travel  (comma-separated)"
            />
          </View>
        </ScrollView>
      )}
    </View>
  );
}

function Field({ label, value, onChange, placeholder, multiline, keyboardType }: any) {
  return (
    <View style={styles.fieldWrap}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChange}
        style={[
          styles.fieldInput,
          multiline && { height: 96, textAlignVertical: 'top', paddingTop: 12 },
        ]}
        placeholder={placeholder}
        placeholderTextColor="#C4C4C4"
        multiline={multiline}
        keyboardType={keyboardType ?? 'default'}
        autoCapitalize={label === 'City' ? 'words' : 'none'}
        returnKeyType={multiline ? 'default' : 'next'}
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
    paddingBottom: 12,
    backgroundColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#F0F0F0',
  },
  headerBtn: { padding: 4, minWidth: 36 },
  headerTitle: { fontSize: 17, fontWeight: '700', color: '#111' },
  saveBtn: {
    backgroundColor: PINK,
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 99,
    minWidth: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveText: { color: '#fff', fontWeight: '700', fontSize: 14 },
  content: { paddingBottom: 48 },
  avatarWrap: { alignItems: 'center', paddingVertical: 28 },
  avatarFrame: { position: 'relative', marginBottom: 8 },
  avatar: { width: 104, height: 104, borderRadius: 52, borderWidth: 3, borderColor: '#FFD6E0' },
  cameraBtn: {
    position: 'absolute', bottom: 2, right: 2,
    backgroundColor: PINK,
    width: 32, height: 32, borderRadius: 16,
    alignItems: 'center', justifyContent: 'center',
    borderWidth: 2, borderColor: '#fff',
  },
  avatarHint: { fontSize: 12, color: '#bbb' },
  fields: { paddingHorizontal: 20 },
  fieldWrap: { marginBottom: 18 },
  fieldLabel: {
    fontSize: 12, fontWeight: '600',
    color: '#888', textTransform: 'uppercase',
    letterSpacing: 0.6, marginBottom: 6,
  },
  fieldInput: {
    borderWidth: 1.5,
    borderColor: '#E8E8E8',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 13,
    fontSize: 15,
    color: '#111',
    backgroundColor: '#FAFAFA',
  },
});
