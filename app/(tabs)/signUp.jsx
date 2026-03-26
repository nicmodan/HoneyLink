import { gql } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../../style";
import { useMutation } from "@apollo/client/react";

const SIGNUP = gql`
  mutation Signup($email: String!, $password: String!, $username: String!) {
    signup(email: $email, password: $password, username: $username) {
      token
      user {
        id
        username
        email
        isVerified
        profile {
          bio
          age
          city
        }
        subscription {
          plan
          status
        }
      }
    }
  }
`;

const SignUpScreen = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [signUpUser, { loading }] = useMutation(SIGNUP, {
    onCompleted: async ({ signup }) => {
      try {
        await AsyncStorage.setItem("token", signup.token);
        console.log("Signup successful:", signup.user.username);
        Alert.alert("Success", "Account created successfully");
        router.replace("/(tabs)/homepage");
      } catch (err) {
        console.error("Storage error:", err);
        Alert.alert("Error", "Could not save token");
      }
    },
    onError: (err) => {
      console.error("Signup failed:", err.message);
      Alert.alert("Signup Failed", err.message);
    },
  });

  const handleSignUp = async () => {
    if (!username || !email || !password || !confirmPassword) {
      Alert.alert("Missing fields", "Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    try {
      await signUpUser({
        variables: {
          email,
          password,
          username,
        },
      });
    } catch (err) {
      console.log("Signup error:", err);
    }
  };

  return (
    <SafeAreaView style={styles.signUpContainer} edges={["top", "bottom"]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View style={styles.signUpHeader}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.signUpBackArrow}
          >
            <Entypo name="chevron-left" size={30} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle2}>Sign Up</Text>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.signUpTitle}>Create an account</Text>
          <Text style={styles.signUpSubtitle}>
            Create an account to continue
          </Text>

          <View style={styles.signUpForm}>
            <TextInput
              placeholder="User Name"
              style={styles.signUpInput}
              autoCapitalize="none"
              value={username}
              onChangeText={setUsername}
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
                onPress={() => setPasswordVisible(!passwordVisible)}
              >
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
                onPress={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? (
                  <Feather name="eye" size={24} color="#666" />
                ) : (
                  <Feather name="eye-off" size={24} color="#666" />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            style={styles.signUpButton}
            onPress={handleSignUp}
            disabled={loading}
          >
            <Text style={styles.signUpButtonText}>
              {loading ? "Signing Up..." : "Sign Up"}
            </Text>
          </TouchableOpacity>

          <View style={styles.signUpTermsContainer}>
            <Text style={styles.signUpTermsText}>
              By signing up, you agree to our{" "}
              <Text style={styles.signUpTermsLink}>Terms</Text> and{" "}
              <Text style={styles.signUpTermsLink}>Conditions</Text>.
            </Text>
          </View>
        </ScrollView>

        <View style={styles.signUpFooter}>
          <Text style={styles.signUpFooterText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => router.replace("/LoginUI")}>
            <Text style={styles.signUpFooterLink}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUpScreen;