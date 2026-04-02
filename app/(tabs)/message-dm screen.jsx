import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  Image,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';

// ─── Root ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [conversations, setConversations] = useState([]); // starts empty
  const [activeDM, setActiveDM] = useState(null);

  // Call this from anywhere in your app when a new match messages you
  const receiveMessage = (conversation) => {
    setConversations(prev => {
      const exists = prev.find(c => c.id === conversation.id);
      if (exists) return prev;
      return [conversation, ...prev];
    });
  };

  if (activeDM) {
    return (
      <DMScreen
        conversation={activeDM}
        onBack={() => setActiveDM(null)}
      />
    );
  }

  return (
    <MessagesScreen
      conversations={conversations}
      onOpenDM={setActiveDM}
    />
  );
}

// ─── Messages List Screen ─────────────────────────────────────────────────────

function MessagesScreen({ conversations, onOpenDM }) {
  const isEmpty = conversations.length === 0;

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.convoRow} onPress={() => onOpenDM(item)}>
      {/* Avatar */}
      <View style={styles.avatarWrapper}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        {item.online && <View style={styles.onlineDot} />}
      </View>

      {/* Text */}
      <View style={styles.convoText}>
        <View style={styles.convoTopRow}>
          <Text style={styles.convoName}>{item.name}</Text>
          <Text style={[styles.convoTime, item.unread > 0 && styles.convoTimeUnread]}>
            {item.time}
          </Text>
        </View>
        <View style={styles.convoBottomRow}>
          <Text
            numberOfLines={1}
            style={[styles.convoLastMsg, item.unread > 0 && styles.convoLastMsgUnread]}
          >
            {item.lastMessage}
          </Text>
          {item.unread > 0 && (
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadBadgeText}>{item.unread}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Messages</Text>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Empty state OR list */}
      {isEmpty ? (
        <View style={styles.emptyState}>
          <View style={styles.emptyIcon}>
            <Text style={{ fontSize: 36 }}>💌</Text>
          </View>
          <Text style={styles.emptyTitle}>You will see your messages here</Text>
          <Text style={styles.emptySubtitle}>
            Once someone matches and messages you, their conversation will appear here.
          </Text>
        </View>
      ) : (
        <FlatList
          data={conversations}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 24 }}
        />
      )}
    </SafeAreaView>
  );
}

// ─── DM Screen ────────────────────────────────────────────────────────────────

function DMScreen({ conversation, onBack }) {
  const [messages, setMessages] = useState(conversation.messages || []);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    const text = input.trim();
    if (!text) return;
    setMessages(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        text,
        fromMe: true,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
    setInput('');
  };

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        {/* Header */}
        <View style={styles.dmHeader}>
          <TouchableOpacity onPress={onBack} style={styles.backBtn}>
            <Text style={styles.backArrow}>‹</Text>
          </TouchableOpacity>

          <View style={styles.avatarWrapper}>
            <Image source={{ uri: conversation.avatar }} style={styles.avatar} />
            {conversation.online && <View style={styles.onlineDot} />}
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.dmName}>{conversation.name}</Text>
            <Text style={styles.dmStatus}>
              {conversation.online ? 'Online' : 'Offline'}
            </Text>
          </View>

          <TouchableOpacity style={styles.heartBtn}>
            <Text style={{ fontSize: 18 }}>❤️</Text>
          </TouchableOpacity>
        </View>

        {/* Messages */}
        <FlatList
          data={messages}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.messageList}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={[styles.msgRow, item.fromMe ? styles.msgRowMe : styles.msgRowThem]}>
              {!item.fromMe && (
                <Image source={{ uri: conversation.avatar }} style={styles.msgAvatar} />
              )}
              <View style={item.fromMe ? styles.msgRight : styles.msgLeft}>
                {item.image && (
                  <Image
                    source={{ uri: item.image }}
                    style={styles.msgImage}
                    resizeMode="cover"
                  />
                )}
                {item.text ? (
                  <View style={[styles.bubble, item.fromMe ? styles.bubbleMe : styles.bubbleThem]}>
                    <Text style={[styles.bubbleText, item.fromMe && styles.bubbleTextMe]}>
                      {item.text}
                    </Text>
                  </View>
                ) : null}
                <Text style={styles.msgTime}>{item.time}</Text>
              </View>
            </View>
          )}
        />

        {/* Input bar */}
        <View style={styles.inputBar}>
          <TouchableOpacity style={styles.attachBtn}>
            <Text style={{ fontSize: 20 }}>📎</Text>
          </TouchableOpacity>

          <TextInput
            value={input}
            onChangeText={setInput}
            placeholder="Type a message…"
            placeholderTextColor="#9ca3af"
            style={styles.textInput}
            multiline
            onSubmitEditing={sendMessage}
            returnKeyType="send"
          />

          <TouchableOpacity
            onPress={sendMessage}
            style={[styles.sendBtn, input.trim() ? styles.sendBtnActive : styles.sendBtnInactive]}
          >
            <Text style={styles.sendBtnText}>➤</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const PINK = '#e8476a';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },

  // Header
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: '#111',
    letterSpacing: -0.5,
  },
  divider: {
    height: 1,
    backgroundColor: '#f3f4f6',
    marginHorizontal: 20,
    marginBottom: 4,
  },

  // Conversation row
  convoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  avatarWrapper: {
    position: 'relative',
    marginRight: 12,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 99,
  },
  onlineDot: {
    position: 'absolute',
    bottom: 1,
    right: 1,
    width: 13,
    height: 13,
    borderRadius: 99,
    backgroundColor: '#22c55e',
    borderWidth: 2,
    borderColor: '#fff',
  },
  convoText: {
    flex: 1,
  },
  convoTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  convoName: {
    fontWeight: '600',
    fontSize: 15,
    color: '#111',
  },
  convoTime: {
    fontSize: 12,
    color: '#9ca3af',
  },
  convoTimeUnread: {
    color: PINK,
    fontWeight: '500',
  },
  convoBottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  convoLastMsg: {
    flex: 1,
    fontSize: 13,
    color: '#9ca3af',
  },
  convoLastMsgUnread: {
    color: '#1f2937',
    fontWeight: '500',
  },
  unreadBadge: {
    marginLeft: 8,
    width: 20,
    height: 20,
    borderRadius: 99,
    backgroundColor: PINK,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unreadBadgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '700',
  },

  // Empty state
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  emptyIcon: {
    width: 80,
    height: 80,
    borderRadius: 99,
    backgroundColor: '#fce7eb',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1f2937',
    textAlign: 'center',
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 14,
    color: '#9ca3af',
    textAlign: 'center',
    lineHeight: 20,
  },

  // DM header
  dmHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  backBtn: {
    marginRight: 8,
    padding: 4,
  },
  backArrow: {
    fontSize: 28,
    color: PINK,
    lineHeight: 30,
  },
  dmName: {
    fontWeight: '600',
    fontSize: 15,
    color: '#111',
  },
  dmStatus: {
    fontSize: 12,
    color: '#22c55e',
  },
  heartBtn: {
    width: 36,
    height: 36,
    borderRadius: 99,
    backgroundColor: '#fce7eb',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Messages
  messageList: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 10,
  },
  msgRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  msgRowMe: {
    justifyContent: 'flex-end',
  },
  msgRowThem: {
    justifyContent: 'flex-start',
  },
  msgAvatar: {
    width: 28,
    height: 28,
    borderRadius: 99,
    marginRight: 8,
    alignSelf: 'flex-end',
    marginBottom: 4,
  },
  msgRight: {
    maxWidth: '72%',
    alignItems: 'flex-end',
  },
  msgLeft: {
    maxWidth: '72%',
    alignItems: 'flex-start',
  },
  msgImage: {
    width: 190,
    height: 130,
    borderRadius: 16,
    marginBottom: 4,
  },
  bubble: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 18,
  },
  bubbleMe: {
    backgroundColor: PINK,
    borderBottomRightRadius: 4,
  },
  bubbleThem: {
    backgroundColor: '#f3f4f6',
    borderBottomLeftRadius: 4,
  },
  bubbleText: {
    fontSize: 14,
    color: '#1f2937',
    lineHeight: 20,
  },
  bubbleTextMe: {
    color: '#fff',
  },
  msgTime: {
    fontSize: 10,
    color: '#9ca3af',
    marginTop: 3,
    marginHorizontal: 4,
  },

  // Input bar
  inputBar: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#f3f4f6',
    gap: 8,
  },
  attachBtn: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    minHeight: 42,
    maxHeight: 96,
    backgroundColor: '#f3f4f6',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 14,
    color: '#1f2937',
  },
  sendBtn: {
    width: 40,
    height: 40,
    borderRadius: 99,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendBtnActive: {
    backgroundColor: PINK,
  },
  sendBtnInactive: {
    backgroundColor: '#e5e7eb',
  },
  sendBtnText: {
    color: '#fff',
    fontSize: 16,
  },
});
