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
    <View style={styles.navigationWrapper}>
         <View style={styles.navigationContainer}>
          {/* Home */}
          <TouchableOpacity onPress={() => onTabPress("home")}>
            <Icon
              name="home-outline"
              size={24}
              color={activeTab === "home" ? "#ff2b78" : "#999"}
            />
          </TouchableOpacity>

          {/* Favorites */}
          <TouchableOpacity onPress={() => onTabPress("favorites")}>
            <Icon
              name="heart-outline"
              size={24}
              color={activeTab === "favorites" ? "#ff2b78" : "#999"}
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
              color={activeTab === "messages" ? "#ff2b78" : "#999"}
            />
          </TouchableOpacity>

          {/* Profile */}
          <TouchableOpacity onPress={() => onTabPress("profile")}>
            <Icon
              name="person-outline"
              size={24}
              color={activeTab === "profile" ? "#ff2b78" : "#999"}
            />
          </TouchableOpacity>
        </View>
    </View>
   
  );
};

export default Navigation;