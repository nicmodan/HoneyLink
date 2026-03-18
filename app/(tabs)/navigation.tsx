import React from "react";
import {
  View,
  TouchableOpacity,
} from "react-native";
import Icon from "@react-native-vector-icons/ionicons";
import styles from "@/style";

type Props = {
  activeTab: string;
  onTabPress: (tab: string) => void;
};

const Navigation: React.FC<Props> = ({ activeTab, onTabPress }) => {
  return (
    <View style={styles.navigationContainer}>
      {/* Home */}
      <TouchableOpacity onPress={() => onTabPress("home")}>
        <Icon
          name="home-outline"
          size={24}
          color={activeTab === "home" ? "#FF4D6D" : "#999"}
        />
      </TouchableOpacity>

      {/* Favorites */}
      <TouchableOpacity onPress={() => onTabPress("favorites")}>
        <Icon
          name="heart-outline"
          size={24}
          color={activeTab === "favorites" ? "#FF4D6D" : "#999"}
        />
      </TouchableOpacity>

      {/* Floating Add Button */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => onTabPress("add")}
      >
        <Icon name="add" size={28} color="#fff" />
      </TouchableOpacity>

      {/* Messages */}
      <TouchableOpacity onPress={() => onTabPress("messages")}>
        <Icon
          name="chatbubble-outline"
          size={24}
          color={activeTab === "messages" ? "#FF4D6D" : "#999"}
        />
      </TouchableOpacity>

      {/* Profile */}
      <TouchableOpacity onPress={() => onTabPress("profile")}>
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