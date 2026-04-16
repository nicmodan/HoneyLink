import { StatusBar } from 'expo-status-bar';
import { Keyboard, Modal, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
<<<<<<< HEAD
=======
import { useMutation } from '@apollo/client/react';
import { useRouter } from 'expo-router';
import { useState } from 'react';
>>>>>>> ed01e430a4991e9820c23cbcc243ae279088c535
import styles from '../../style';
import HeaderSection from '../../components/HeaderSection';
import SocialLogin from '../../components/SocialLogin';
import EmailPassword from '../../components/EmailPassword';
<<<<<<< HEAD
import { useMutation, gql } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { useRouter } from 'expo-router';

const LOGIN = gql`
  mutation Login($identifier: String!, $password: String!) {
    login(identifier: $identifier, password: $password) {
      token
      user {
        id
        username
        email
      }
    }
  }
`;
=======
import { LOGIN } from '../../scripts/graphql';
import { saveToken } from '../../scripts/auth';
>>>>>>> ed01e430a4991e9820c23cbcc243ae279088c535

const LoginUI = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
<<<<<<< HEAD
  const [popup, setPopup] = useState({
    visible: false,
    type: 'success',
    title: '',
    message: '',
  });

  const showPopup = (type, title, message) => {
    setPopup({
      visible: true,
      type,
      title,
      message,
    });
  };

  const closePopup = () => {
    setPopup((currentPopup) => ({ ...currentPopup, visible: false }));
  };

  const [doLogin, { loading }] = useMutation(LOGIN, {
    onCompleted: async ({ login }) => {
      await AsyncStorage.setItem('token', login.token);
      showPopup('success', 'Login successful', 'You have logged in successfully.');
    },
    onError: (mutationError) => {
      showPopup('error', 'Login failed', mutationError.message);
    },
=======
  const [popup, setPopup] = useState({ visible: false, type: 'success', title: '', message: '' });

  const showPopup = (type, title, message) => setPopup({ visible: true, type, title, message });
  const closePopup = () => setPopup((p) => ({ ...p, visible: false }));

  const [doLogin, { loading }] = useMutation(LOGIN, {
    onCompleted: async ({ login }) => {
      await saveToken(login.token);
      showPopup('success', 'Login successful', 'Welcome back!');
    },
    onError: (err) => showPopup('error', 'Login failed', err.message),
>>>>>>> ed01e430a4991e9820c23cbcc243ae279088c535
  });

  const handleLogin = () => {
    if (!email || !password) {
      showPopup('error', 'Missing information', 'Enter your email and password to continue.');
      return;
    }
<<<<<<< HEAD

    doLogin({ variables: { identifier: email, password } });
=======
    doLogin({ variables: { email, password } });
>>>>>>> ed01e430a4991e9820c23cbcc243ae279088c535
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

<<<<<<< HEAD
        <Modal
          transparent
          animationType="fade"
          visible={popup.visible}
          onRequestClose={closePopup}>
=======
        <Modal transparent animationType="fade" visible={popup.visible} onRequestClose={closePopup}>
>>>>>>> ed01e430a4991e9820c23cbcc243ae279088c535
          <View style={styles.popupOverlay}>
            <View style={styles.popupCard}>
              <Text
                style={[
                  styles.popupTitle,
                  popup.type === 'error' ? styles.popupTitleError : styles.popupTitleSuccess,
                ]}>
                {popup.title}
              </Text>
              <Text style={styles.popupMessage}>{popup.message}</Text>
              <TouchableOpacity
                style={[
                  styles.popupButton,
                  popup.type === 'error' ? styles.popupButtonError : styles.popupButtonSuccess,
                ]}
                onPress={() => {
                  const isSuccess = popup.type === 'success';
                  closePopup();
<<<<<<< HEAD

                  if (isSuccess) {
                    router.replace('/(tabs)/ProfileUI');
                  }
=======
                  if (isSuccess) router.replace('/swipe');
>>>>>>> ed01e430a4991e9820c23cbcc243ae279088c535
                }}>
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
