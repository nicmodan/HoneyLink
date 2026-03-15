// import { Image } from 'expo-image';
import React, { useState } from "react";
import { Platform, StyleSheet, StatusBar } from 'react-native';
import { Text, View, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Signing() {
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirm, setHideConfirm] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.arrow}>{"<"}</Text>
        <Text style={styles.text}>Sign up</Text>
      </View>
      
      <Text style={styles.title}>Create an account</Text>
      <Text style={styles.subtitle}>
        Create account to continue
      </Text>
       
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="User Name"
          placeholderTextColor="#aaa"
          style={styles.input}
        />

        <TextInput
          placeholder="Email Address"
          placeholderTextColor="#aaa"
          style={styles.input}
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
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
  },

  header:{
    flexDirection: "row",
    // alignItems: "center",
    alignSelf: "flex-start",
    marginLeft: 20,
    // marginBottom: 70,
  },
  arrow:{
    fontSize: 20,
    marginRight: 140,
  },


  text: {
  fontSize: 16,
  paddingBottom: 70,
  marginBottom: 60,
  alignItems: "center",
  alignSelf: "center",
  marginRight: "auto",
  },

  title: {
    fontSize: 35,
    paddingRight: 70,
    fontWeight: "bold",
    marginTop: -100,
    // marginBottom: 100,
  },

  subtitle: {
    fontSize: 16,
    color: "gray",
    paddingRight: 160,
    marginBottom: 140,
    paddingBottom: 90,

  },

  input: {
    width: "89%",
    backgroundColor: "#f5f5f5",
    borderRadius: 30,
    padding: 17,
    marginBottom: 27,
    // marginTop: 50,
    fontSize: 16,
    borderWidth: 2,
    borderColor: "#aaa",
  },

  inputContainer: {
  width: "100%",      
  alignItems: "center", 
  marginBottom: 20,    
  marginTop: -190,     
 },

cautionContainer: {
  alignItems: "center",
  marginTop: 15,
  marginHorizontal: 30,
},

caution: {
  fontSize: 15,
  color: "gray",
  textAlign: "center",
},

cautionDetails: {
  fontSize: 15,
  color: "gray",
  textAlign: "center",
  marginTop: 2, 
},

terms: {
  color: "#ff2b78",
  fontWeight: "bold",
  marginRight: 5,
},

cautionText: {
  color: "gray",
  marginHorizontal: 5,

},

condition: {
  color: "#ff2b78",
  fontWeight: "bold",
  marginLeft: 5,
},


  button: {
    width: "89%",
    backgroundColor: "#ff2b78",
    padding: 19,
    borderRadius: 30,
    alignItems: "center",
    // marginTop: -10,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },

  loginText: {
    marginTop: 130,
    color: "gray",
  },

  loginLink: {
    color: "#ea147c",
    fontWeight: "bold",
  }

});
