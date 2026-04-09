import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import styles from '../style';


function LogIn({ onPress, loading }) {
  return (
    <TouchableOpacity style={styles.loginButton} onPress={onPress}>
      <Text style={styles.loginButtonText}>{loading ? 'Logging in...' : 'Log In'}</Text>
    </TouchableOpacity>
  )
}

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
        <FontAwesome name="facebook" size={24} color="white" style={styles.facebookIcon} />
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

export default function SocialLogin({ onFacebookPress, onGmailPress, onLogin, loading = false }) {
  return (
    <View style={styles.socialLoginContainer}>
      <LogIn onPress={onLogin} loading={loading} />
      <Divider />
      <FacebookButton onPress={onFacebookPress} />
      <GmailButton onPress={onGmailPress} />
      <TermsText />      
    </View>
  );
}
