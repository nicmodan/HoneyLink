import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import styles from '../style';

const SignUpScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // A placeholder function for the sign-up logic
  const handleSignUp = () => {
    console.log('Signing up with:', { email, password });
    // Here you would add your sign-up logic (e.g., API call)
    // On success, you might navigate the user to the main app:
    // router.replace('/(tabs)/homepage');
  };

  return (
    <SafeAreaView style={styles.signUpContainer} edges={['top', 'bottom']}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        {/* Header is part of the main view, not scrollable */}
        <View style={styles.signUpHeader}>
          <TouchableOpacity onPress={() => router.back()} style={styles.signUpBackArrow}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
          <Text style={styles.signUpTitle}>Create an account</Text>
          <Text style={styles.signUpSubtitle}>Let's get you started on HoneyLink.</Text>

          <View style={styles.signUpForm}>
            <TextInput
              placeholder="Email"
              style={styles.signUpInput}
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              placeholder="Password"
              style={styles.signUpInput}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>

          <View style={styles.signUpTermsContainer}>
            <Text style={styles.signUpTermsText}>
              By signing up, you agree to our{' '}
              <Text style={styles.signUpTermsLink}>Terms</Text> and{' '}
              <Text style={styles.signUpTermsLink}>Conditions</Text>.
            </Text>
          </View>
        </ScrollView>

        {/* Footer sticks to the bottom */}
        <View style={styles.signUpFooter}>
          <Text style={styles.signUpFooterText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => router.replace('/login')}>
            <Text style={styles.signUpFooterLink}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
