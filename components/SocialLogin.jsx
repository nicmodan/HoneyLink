import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../style';

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
    <TouchableOpacity style={[styles.socialButton, styles.facebook]} onPress={onPress}>
      <View style={styles.facebookContent}>
        <Text style={styles.facebookIcon}>f</Text>
        <Text style={styles.buttonText}>Sign up with Facebook</Text>
      </View>
    </TouchableOpacity>
  );
}

function GmailButton({ onPress }) {
  return (
    <TouchableOpacity style={[styles.socialButton, styles.gmail]} onPress={onPress}>
      <Text style={styles.gmailText}>Sign up with Gmail</Text>
    </TouchableOpacity>
  );
}

function TermsText() {
  return <Text style={styles.termsText}>Terms of Use & Privacy Policy</Text>;
}

export default function SocialLogin({ onFacebookPress, onGmailPress }) {
  return (
    <View style={styles.socialLoginContainer}>
      <Divider />
      <FacebookButton onPress={onFacebookPress} />
      <GmailButton onPress={onGmailPress} />
      <TermsText />
    </View>
  );
}
