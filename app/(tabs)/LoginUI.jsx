import { useMutation } from "@apollo/client/react";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Keyboard,
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import EmailPassword from "../../components/EmailPassword";
import HeaderSection from "../../components/HeaderSection";
import SocialLogin from "../../components/SocialLogin";
import { saveToken } from "../../scripts/auth";
import { LOGIN } from "../../scripts/graphql";
import styles from "../../style";

const getAuthErrorMessage = (err) => {
  if (err?.message?.includes("Network request failed")) {
    return "Cannot reach the server right now. Check that the backend is running and EXPO_PUBLIC_GRAPHQL_URL is correct.";
  }

  return err?.message || "Something went wrong. Please try again.";
};

const LoginUI = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [popup, setPopup] = useState({
    visible: false,
    type: "success",
    title: "",
    message: "",
  });

  const showPopup = (type, title, message) =>
    setPopup({ visible: true, type, title, message });
  const closePopup = () =>
    setPopup((current) => ({ ...current, visible: false }));

  const [doLogin, { loading }] = useMutation(LOGIN, {
    onCompleted: async ({ login }) => {
      const token = login?.token;

      if (!token) {
        showPopup(
          "error",
          "Login failed",
          "Invalid credentials or no token returned from the server.",
        );
        return;
      }

      console.log("[LoginUI] Token received, saving...");
      await saveToken(token);
      console.log("[LoginUI] Token saved successfully");
      showPopup("success", "Login successful", "Welcome back!");
    },
    onError: (err) => {
      console.error("[LoginUI] Login error:", err);
      console.error("[LoginUI] Error details:", {
        message: err?.message,
        graphQLErrors: err?.graphQLErrors,
        networkError: err?.networkError,
      });
      showPopup("error", "Login failed", getAuthErrorMessage(err));
    },
  });

  const handleLogin = async () => {
    if (!email || !password) {
      showPopup(
        "error",
        "Missing information",
        "Enter your email and password to continue.",
      );
      return;
    }

    console.log("[LoginUI] Starting login attempt for:", email);
    console.log("[LoginUI] Calling mutation...");

    await doLogin({ variables: { email, password } });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <HeaderSection />
        <EmailPassword
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
        <SocialLogin onLogin={handleLogin} loading={loading} />

        <Modal
          transparent
          animationType="fade"
          visible={popup.visible}
          onRequestClose={closePopup}
        >
          <View style={styles.popupOverlay}>
            <View style={styles.popupCard}>
              <Text
                style={[
                  styles.popupTitle,
                  popup.type === "error"
                    ? styles.popupTitleError
                    : styles.popupTitleSuccess,
                ]}
              >
                {popup.title}
              </Text>
              <Text style={styles.popupMessage}>{popup.message}</Text>
              <TouchableOpacity
                style={[
                  styles.popupButton,
                  popup.type === "error"
                    ? styles.popupButtonError
                    : styles.popupButtonSuccess,
                ]}
                onPress={() => {
                  const isSuccess = popup.type === "success";
                  closePopup();

                  if (isSuccess) {
                    router.replace("/homepage");
                  }
                }}
              >
                <Text style={styles.popupButtonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginUI;
