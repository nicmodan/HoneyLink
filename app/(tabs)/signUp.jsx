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
import Entypo from '@expo/vector-icons/Entypo';
import { useRouter } from 'expo-router';
import styles from '../../style';
import Feather from '@expo/vector-icons/Feather';

const SignUpScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);


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
            <Entypo name="chevron-left" size={30} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle2}>Sign Up</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
          <Text style={styles.signUpTitle}>Create an account</Text>
          <Text style={styles.signUpSubtitle}>Create an account to continue</Text>

          <View style={styles.signUpForm}>

            <TextInput
              placeholder="User Name"
              style={styles.signUpInput}
              autoCapitalize="none"              
            />

            <TextInput
              placeholder="Email"
              style={styles.signUpInput}
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
            <View style={styles.signUpPasswordContainer}>
              <TextInput
                placeholder="Password"
                style={[styles.signUpInput, styles.signUpPasswordInput]}
                secureTextEntry={!passwordVisible}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity
                style={styles.signUpPasswordToggle}
                onPress={() => setPasswordVisible(!passwordVisible)}>
                {passwordVisible ? (
                  <Feather name="eye" size={24} color="#666" />
                ) : (
                  <Feather name="eye-off" size={24} color="#666" />
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.signUpPasswordContainer}>
              <TextInput
                placeholder="Confirm Password"
                style={[styles.signUpInput, styles.signUpPasswordInput]}
                secureTextEntry={!passwordVisible}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
              <TouchableOpacity
                style={styles.signUpPasswordToggle}
                onPress={() => setPasswordVisible(!passwordVisible)}>
                {passwordVisible ? (
                  <Feather name="eye" size={24} color="#666" />
                ) : (
                  <Feather name="eye-off" size={24} color="#666" />
                )}
              </TouchableOpacity>
            </View>
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
          <TouchableOpacity onPress={() => router.replace('/LoginUI')}>
            <Text style={styles.signUpFooterLink}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
