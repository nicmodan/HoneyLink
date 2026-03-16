import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function Divider() {
  return (
    <View style={styles.dividerRow}>
      <View style={styles.divider} />
      <Text style={styles.dividerLabel}>or</Text>
      <View style={styles.divider} />
    </View>
  );
}

function FacebookButton({ onPress }) {
  return (
    <TouchableOpacity style={[styles.button, styles.facebook]} onPress={onPress}>
      <Text style={styles.buttonText}>Sign up with Facebook</Text>
    </TouchableOpacity>
  );
}

function AppleButton({ onPress }) {
  return (
    <TouchableOpacity style={[styles.button, styles.apple]} onPress={onPress}>
      <Text style={styles.buttonText}>Sign up with Apple</Text>
    </TouchableOpacity>
  );
}

function SignupLink({ onPress }) {
  return (
    <TouchableOpacity style={styles.signupLink} onPress={onPress}>
      <Text style={styles.signupText}>Don't have an account? Sign up</Text>
    </TouchableOpacity>
  );
}

export default function SocialLogin({ onFacebookPress, onApplePress, onSignupPress }) {
  return (
    <View style={styles.container}>
      <Divider />
      <FacebookButton onPress={onFacebookPress} />
      <AppleButton onPress={onApplePress} />
      <SignupLink onPress={onSignupPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 24,
    paddingVertical: 16,
    gap: 16,
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#D1D5DB',
  },
  dividerLabel: {
    textTransform: 'uppercase',
    fontSize: 12,
    color: '#6B7280',
  },
  button: {
    height: 48,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  facebook: {
    backgroundColor: '#1877F2',
  },
  apple: {
    backgroundColor: '#000',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  signupLink: {
    marginTop: 8,
    alignItems: 'center',
  },
  signupText: {
    fontSize: 14,
    color: '#2563EB',
  },
});
