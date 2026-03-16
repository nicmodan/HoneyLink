import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from '../style';
import Feather from '@expo/vector-icons/Feather';

const EmailPassword = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.formContainer}>
      {/* User Name Input */}
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="User Name" 
          placeholderTextColor="#666"
          style={styles.input} 
        />
      </View>

      {/* Password Input */}
      <View style={[styles.inputContainer, styles.passwordRow]}>
        <TextInput 
          placeholder="Password" 
          placeholderTextColor="#666"
          secureTextEntry={!passwordVisible}
          style={[styles.input, { flex: 1 }]} 
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          { passwordVisible ? <Feather name="eye" size={24} color="#666" /> : <Feather name="eye-off" size={24} color="#666" /> }
        </TouchableOpacity>
      </View>

      {/* Forgot Password Link */}
      <TouchableOpacity style={styles.forgotButton}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  )
}

export default EmailPassword