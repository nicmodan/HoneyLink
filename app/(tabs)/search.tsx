import React, { useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useLazyQuery } from '@apollo/client/react';
import { useRouter } from 'expo-router';
import { SEARCH_USERS } from '../../scripts/graphql';
import Navigation from './navigation';

const PINK = '#E8476A';

export default function SearchScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('home');
  const [query, setQuery] = useState('');
  const [city, setCity] = useState('');
  const [minAge, setMinAge] = useState('');
  const [maxAge, setMaxAge] = useState('');

  const [doSearch, { data, loading }] = useLazyQuery(SEARCH_USERS);

  const results: any[] = data?.searchUsers ?? [];

  const handleSearch = () => {
    if (!query.trim()) return;
    doSearch({
      variables: {
        q: query.trim(),
        limit: 20,
        city: city.trim() || undefined,
        minAge: minAge ? parseInt(minAge) : undefined,
        maxAge: maxAge ? parseInt(maxAge) : undefined,
      },
    });
  };

  const handleTabPress = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'home') router.push('/swipe');
    if (tab === 'favorites') router.push('/matches');
    if (tab === 'messages') router.push('/messages');
    if (tab === 'profile') router.push('/profile');
    if (tab === 'add') router.push('/shorts');
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>Search</Text>
      </View>

      {/* Search bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={18} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search by username..."
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={handleSearch}
          returnKeyType="search"
          autoCapitalize="none"
        />
      </View>

      {/* Filters */}
      <View style={styles.filters}>
        <TextInput
          style={styles.filterInput}
          placeholder="City"
          value={city}
          onChangeText={setCity}
          autoCapitalize="words"
        />
        <TextInput
          style={styles.filterInput}
          placeholder="Min age"
          value={minAge}
          onChangeText={setMinAge}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.filterInput}
          placeholder="Max age"
          value={maxAge}
          onChangeText={setMaxAge}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
          <Text style={styles.searchBtnText}>Go</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <View style={styles.centered}>
          <ActivityIndicator size="large" color={PINK} />
        </View>
      ) : (
        <FlatList
          data={results}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            data ? (
              <View style={styles.centered}>
                <Text style={styles.emptyText}>No users found</Text>
              </View>
            ) : null
          }
          renderItem={({ item }) => {
            const photo = item.profile?.photos?.[0] || 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200';
            return (
              <View style={styles.resultRow}>
                <Image source={{ uri: photo }} style={styles.avatar} />
                <View style={styles.resultInfo}>
                  <Text style={styles.resultName}>{item.username}</Text>
                  <Text style={styles.resultMeta}>
                    {[item.profile?.city, item.profile?.age ? `${item.profile.age} yo` : null].filter(Boolean).join(' · ')}
                  </Text>
                </View>
              </View>
            );
          }}
        />
      )}

      <Navigation activeTab={activeTab} onTabPress={handleTabPress} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#fff' },
  centered: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 40 },
  header: { paddingHorizontal: 20, paddingTop: 16, paddingBottom: 8 },
  title: { fontSize: 26, fontWeight: '800', color: '#111' },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: '#F3F4F6',
    borderRadius: 14,
    paddingHorizontal: 14,
  },
  searchIcon: { marginRight: 8 },
  searchInput: { flex: 1, height: 44, fontSize: 15, color: '#111' },
  filters: { flexDirection: 'row', paddingHorizontal: 20, gap: 8, marginBottom: 10 },
  filterInput: {
    flex: 1,
    height: 38,
    backgroundColor: '#F3F4F6',
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 13,
    color: '#111',
  },
  searchBtn: {
    backgroundColor: PINK,
    borderRadius: 10,
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBtnText: { color: '#fff', fontWeight: '700', fontSize: 14 },
  list: { paddingHorizontal: 20, paddingBottom: 20 },
  resultRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F9FAFB',
  },
  avatar: { width: 52, height: 52, borderRadius: 26, marginRight: 14 },
  resultInfo: { flex: 1 },
  resultName: { fontSize: 16, fontWeight: '600', color: '#111' },
  resultMeta: { fontSize: 13, color: '#888', marginTop: 2 },
  emptyText: { fontSize: 15, color: '#aaa' },
});
