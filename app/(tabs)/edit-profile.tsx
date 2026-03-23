import React, { useState } from "react";
import {
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { router } from "expo-router";
import Icon from "@react-native-vector-icons/ionicons";
import Navigation from "./navigation";
import styles from "@/style";

export default function ProfileScreen() {
  const [profileForm, setProfileForm] = useState({
    userName: "Divine",
    email: "divine@gmail.com",
    phone: "",
    location: "my house",
    dateOfBirth: "20-8-1934",
  });

  const profileFields = [
    { key: "userName", label: "User Name", value: profileForm.userName },
    { key: "email", label: "Email", value: profileForm.email },
    { key: "phone", label: "Phone", value: profileForm.phone },
    { key: "location", label: "Location", value: profileForm.location },
    { key: "dateOfBirth", label: "Date of Birth", value: profileForm.dateOfBirth },
  ] as const;

  return (
    <SafeAreaView style={styles.profileDetailsScreen}>
      <View style={styles.profileDetailsHeader}>
        <Pressable
          onPress={() => router.back()}
          style={styles.profileDetailsHeaderButton}
        >
          <Icon name="chevron-back" size={22} color="#111827" />
        </Pressable>

        <Text style={styles.profileDetailsHeaderTitle}>Profile</Text>

        <Pressable
          style={styles.profileDetailsSaveButton}
          onPress={() => Alert.alert("Saved", "Profile details updated.")}
        >
          <Text style={styles.profileDetailsSaveText}>Save</Text>
        </Pressable>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.profileDetailsContent}
      >
        <View style={styles.profileDetailsAvatarWrap}>
          <View style={styles.profileDetailsAvatarFrame}>
            <Image
              source={require("../../assets/images/sample.jpg")}
              style={styles.profileDetailsAvatar}
            />

            <Pressable
              style={styles.profileDetailsCameraButton}
              onPress={() =>
                Alert.alert("Profile photo", "Photo editing will be connected next.")
              }
            >
              <Icon name="camera-outline" size={16} color="#FFFFFF" />
            </Pressable>
          </View>
        </View>

        <View style={styles.profileDetailsFields}>
          {profileFields.map((field) => (
            <View key={field.label} style={styles.profileDetailsFieldCard}>
              <Text style={styles.profileDetailsFieldLabel}>{field.label}</Text>
              <TextInput
                value={field.value}
                onChangeText={(text) =>
                  setProfileForm((current) => ({
                    ...current,
                    [field.key]: text,
                  }))
                }
                style={styles.profileDetailsFieldInput}
                placeholder={field.label}
                placeholderTextColor="#9CA3AF"
              />
            </View>
          ))}
        </View>
      </ScrollView>

      <Navigation activeTab="profile" />
    </SafeAreaView>
  );
}
