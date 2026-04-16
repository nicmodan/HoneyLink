import { useRef, useState } from "react";
import {
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  COLUMNS,
  IMAGES,
  SCREEN_WIDTH,
} from "../constants/layout";
import styles from "../style";

const GalleryScreen = () => {
  const [activeTab, setActiveTab] = useState("gallery");
  const [visible, setVisible] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const viewerRef = useRef(null);

  const openViewer = (index) => {
    setStartIndex(index);
    setVisible(true);
  };

  const renderGridItem = ({ item, index }) => (
    <TouchableOpacity
      style={styles.defaultProfileTile}
      activeOpacity={0.85}
      onPress={() => openViewer(index)}
    >
      <Image
        source={item.source}
        style={styles.defaultProfileTileImage}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );

  const renderViewerItem = ({ item }) => (
    <View style={styles.defaultProfileViewerSlide}>
      <Image
        source={item.source}
        style={styles.defaultProfileViewerImage}
        resizeMode="contain"
      />
    </View>
  );

  return (
    <View style={styles.defaultProfileContent}>
      <View style={styles.defaultProfileTabRow}>
        <TouchableOpacity
          style={styles.defaultProfileTabButton}
          onPress={() => setActiveTab("about")}
        >
          <Text
            style={[
              styles.defaultProfileTabText,
              activeTab === "about" && styles.defaultProfileTabTextActive,
            ]}
          >
            About
          </Text>
          {activeTab === "about" && <View style={styles.defaultProfileTabIndicator} />}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.defaultProfileTabButton}
          onPress={() => setActiveTab("gallery")}
        >
          <Text
            style={[
              styles.defaultProfileTabText,
              activeTab === "gallery" && styles.defaultProfileTabTextActive,
            ]}
          >
            Gallery
          </Text>
          {activeTab === "gallery" && (
            <View style={styles.defaultProfileTabIndicator} />
          )}
        </TouchableOpacity>
      </View>

      {activeTab === "about" ? (
        <View style={styles.defaultProfileAbout}>
          <Text style={styles.defaultProfileAboutText}>
            Passionate traveler, photographer, designer, and developer.
          </Text>
        </View>
      ) : (
        <SafeAreaView style={styles.defaultProfileGalleryWrapper}>
          <View style={styles.defaultProfileInner}>
            <FlatList
              data={IMAGES}
              keyExtractor={(item) => item.id}
              numColumns={COLUMNS}
              renderItem={renderGridItem}
              style={styles.defaultProfileGalleryList}
              contentContainerStyle={styles.defaultProfileGrid}
              showsVerticalScrollIndicator={false}
            />
          </View>

          <Modal
            visible={visible}
            transparent={false}
            animationType="fade"
            onRequestClose={() => setVisible(false)}
          >
            <StatusBar backgroundColor="#000" barStyle="light-content" />
            <View style={styles.defaultProfileViewerContainer}>
              <TouchableOpacity
                style={styles.defaultProfileCloseBtn}
                onPress={() => setVisible(false)}
              >
                <Text style={styles.defaultProfileCloseText}>X</Text>
              </TouchableOpacity>

              <FlatList
                ref={viewerRef}
                data={IMAGES}
                keyExtractor={(item) => item.id}
                renderItem={renderViewerItem}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                initialScrollIndex={startIndex}
                getItemLayout={(_, index) => ({
                  length: SCREEN_WIDTH,
                  offset: SCREEN_WIDTH * index,
                  index,
                })}
              />
            </View>
          </Modal>
        </SafeAreaView>
      )}
    </View>
  );
};

export default GalleryScreen;
