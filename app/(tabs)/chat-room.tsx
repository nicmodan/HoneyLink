import React, { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useQuery, useMutation } from '@apollo/client/react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { MESSAGES, SEND_MESSAGE } from '../../scripts/graphql';

const PINK = '#E8476A';

export default function ChatRoomScreen() {
  const router = useRouter();
  const { chatId } = useLocalSearchParams<{ chatId: string }>();
  const [input, setInput] = useState('');
  const flatListRef = useRef<FlatList>(null);

  const { data, loading, startPolling, stopPolling } = useQuery(MESSAGES, {
    variables: { chatId, limit: 60 },
    skip: !chatId,
  });

  const [sendMessage, { loading: sending }] = useMutation(SEND_MESSAGE);

  useEffect(() => {
    startPolling(3000);
    return () => stopPolling();
  }, []);

  const messages: any[] = data?.messages ?? [];

  const handleSend = async () => {
    const text = input.trim();
    if (!text || !chatId) return;
    setInput('');
    try {
      await sendMessage({ variables: { chatId, text } });
    } catch (e: any) {
      console.warn('Send message error:', e.message);
    }
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="chevron-back" size={26} color={PINK} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chat</Text>
      </View>

      {loading && messages.length === 0 ? (
        <View style={styles.centered}>
          <ActivityIndicator size="large" color={PINK} />
        </View>
      ) : (
        <KeyboardAvoidingView
          style={styles.flex}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <FlatList
            ref={flatListRef}
            data={messages}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.messageList}
            showsVerticalScrollIndicator={false}
            onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
            renderItem={({ item }) => {
              const fromMe = false; // TODO: compare item.sender.id to current user id
              return (
                <View style={[styles.msgRow, fromMe ? styles.msgRowMe : styles.msgRowThem]}>
                  <View style={[styles.bubble, fromMe ? styles.bubbleMe : styles.bubbleThem]}>
                    <Text style={[styles.bubbleText, fromMe && styles.bubbleTextMe]}>{item.text}</Text>
                  </View>
                </View>
              );
            }}
          />

          <View style={styles.inputBar}>
            <TextInput
              value={input}
              onChangeText={setInput}
              placeholder="Type a message..."
              placeholderTextColor="#9ca3af"
              style={styles.textInput}
              multiline
              returnKeyType="send"
              onSubmitEditing={handleSend}
            />
            <TouchableOpacity
              onPress={handleSend}
              disabled={sending || !input.trim()}
              style={[styles.sendBtn, input.trim() ? styles.sendBtnActive : styles.sendBtnInactive]}>
              <Ionicons name="send" size={18} color="#fff" />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#fff' },
  flex: { flex: 1 },
  centered: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  backBtn: { marginRight: 10, padding: 4 },
  headerTitle: { fontSize: 17, fontWeight: '600', color: '#111' },
  messageList: { paddingHorizontal: 16, paddingVertical: 12, gap: 10 },
  msgRow: { flexDirection: 'row', marginBottom: 10 },
  msgRowMe: { justifyContent: 'flex-end' },
  msgRowThem: { justifyContent: 'flex-start' },
  bubble: { maxWidth: '72%', paddingHorizontal: 14, paddingVertical: 10, borderRadius: 18 },
  bubbleMe: { backgroundColor: PINK, borderBottomRightRadius: 4 },
  bubbleThem: { backgroundColor: '#F3F4F6', borderBottomLeftRadius: 4 },
  bubbleText: { fontSize: 14, color: '#1F2937', lineHeight: 20 },
  bubbleTextMe: { color: '#fff' },
  inputBar: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    gap: 8,
  },
  textInput: {
    flex: 1,
    minHeight: 42,
    maxHeight: 96,
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 14,
    color: '#1F2937',
  },
  sendBtn: { width: 42, height: 42, borderRadius: 21, alignItems: 'center', justifyContent: 'center' },
  sendBtnActive: { backgroundColor: PINK },
  sendBtnInactive: { backgroundColor: '#E5E7EB' },
});
