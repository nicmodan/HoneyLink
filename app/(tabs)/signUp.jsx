// import { Image } from 'expo-image';
import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../style';

export default function Signing() {
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirm, setHideConfirm] = useState(true);

  return (
    <View style={styles.container3}>
      <View style={styles.header}>
        <Text style={styles.arrow}>{"<"}</Text>
        <Text style={styles.text}>Sign up</Text>
      </View>
      
      <Text style={styles.title}>Create an account</Text>
      <Text style={styles.subtitle}>
        Create account to continue
      </Text>
       
      <View style={styles.inputContainer3}>
        <TextInput
          placeholder="User Name"
          placeholderTextColor="#aaa"
          style={styles.input3}
        />

        <TextInput
          placeholder="Email Address"
          placeholderTextColor="#aaa"
          style={styles.input3}
        />

        {/* Password with eye icon */}
        <View style={{ width: "89%", flexDirection: "row", alignItems: "center", borderWidth: 2, borderColor: "#aaa", borderRadius: 30, marginBottom: 27, backgroundColor: "#f5f5f5", paddingHorizontal: 15 }}>
          <TextInput
            placeholder="Password"
            placeholderTextColor="#aaa"
            secureTextEntry={hidePassword}
            style={{ flex: 1, paddingVertical: 17, fontSize: 16 }}
          />
          <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
            <Ionicons name={hidePassword ? "eye-off" : "eye"} size={24} color="#aaa" />
          </TouchableOpacity>
        </View>

        {/* Re-enter Password with eye icon */}
        <View style={{ width: "89%", flexDirection: "row", alignItems: "center", borderWidth: 2, borderColor: "#aaa", borderRadius: 30, marginBottom: 27, backgroundColor: "#f5f5f5", paddingHorizontal: 15 }}>
          <TextInput
            placeholder="Re enter Password"
            placeholderTextColor="#aaa"
            secureTextEntry={hideConfirm}
            style={{ flex: 1, paddingVertical: 17, fontSize: 16 }}
          />
          <TouchableOpacity onPress={() => setHideConfirm(!hideConfirm)}>
            <Ionicons name={hideConfirm ? "eye-off" : "eye"} size={24} color="#aaa" />
          </TouchableOpacity>
        </View>
      </View>
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      
      <View style={styles.cautionContainer}>
        <Text style={styles.caution}>
          by Signing up you will agree with our
        </Text>
        <Text style={styles.cautionDetails}>
          <Text style={styles.terms}>terms</Text>{" "}
          <Text style={styles.cautionText}>&</Text>{" "}
          <Text style={styles.condition}>conditions of use</Text>
        </Text>
      </View>

      <Text style={styles.loginText}>
        Already have an account? 
        <Text style={styles.loginLink}> Login</Text>
      </Text>
    </View>
  );
}
