import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../style";

const EmailPassword = ({
  email = "",
  setEmail = () => {},
  password = "",
  setPassword = () => {},
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.formContainer}>
      {/* Email Input */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#666"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress"
        />
      </View>

      {/* Password Input */}
      <View style={[styles.inputContainer, styles.passwordRow]}>
        <TextInput
          placeholder="Password"
          placeholderTextColor="#666"
          secureTextEntry={!passwordVisible}
          style={[styles.input, { flex: 1 }]}
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="password"
        />
        <TouchableOpacity
          onPress={() => {
            setPasswordVisible(!passwordVisible);
          }}
        >
          {passwordVisible ? (
            <Feather name="eye" size={24} color="#666" />
          ) : (
            <Feather name="eye-off" size={24} color="#666" />
          )}
        </TouchableOpacity>
      </View>

      {/* Forgot Password Link */}
      <TouchableOpacity style={styles.forgotButton}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmailPassword;
