import React from "react";
import {
  Platform,
  View,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "@react-native-vector-icons/ionicons";
import styles from "@/style";

type Props = {
  activeTab: string;
  onTabPress?: (tab: string) => void;
};

const Navigation: React.FC<Props> = ({ activeTab, onTabPress }) => {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const bottomInset = Platform.OS === "ios" ? Math.max(insets.bottom, 10) : 15;

  const handleTabPress = (tab: string) => {
    onTabPress?.(tab);

    if (tab === "home") {
      router.push("/");
    }

    if (tab === "profile") {
      router.push("/profile");
    }
  };

  return (

    <View
      style={[
        styles.navigationContainer,
        {
          paddingBottom: bottomInset,
          height: 62 + bottomInset,
        },
      ]}
    >
      {/* Home */}
      <TouchableOpacity onPress={() => handleTabPress("home")}>
        <Icon
          name="home-outline"
          size={24}
          color={activeTab === "home" ? "#FF4D6D" : "#999"}
        />
      </TouchableOpacity>

      {/* Favorites */}
      <TouchableOpacity onPress={() => handleTabPress("favorites")}>
        <Icon
          name="heart-outline"
          size={24}
          color={activeTab === "favorites" ? "#FF4D6D" : "#999"}
        />
      </TouchableOpacity>

      {/* Floating Add Button */}
      <TouchableOpacity
        style={[
          styles.fab,
          {
            bottom: Platform.OS === "ios" ? bottomInset + 4 : 45,
          },
        ]}
        onPress={() => handleTabPress("add")}
      >
        <Icon name="add" size={28} color="#fff" />
      </TouchableOpacity>

      {/* Messages */}
      <TouchableOpacity onPress={() => handleTabPress("messages")}>
        <Icon
          name="chatbubble-outline"
          size={24}
          color={activeTab === "messages" ? "#FF4D6D" : "#999"}
        />
      </TouchableOpacity>

      {/* Profile */}
      <TouchableOpacity onPress={() => handleTabPress("profile")}>
        <Icon
          name="person-outline"
          size={24}
          color={activeTab === "profile" ? "#FF4D6D" : "#999"}
        />
      </TouchableOpacity>
    </View>
   
  );
};

export default Navigation;
