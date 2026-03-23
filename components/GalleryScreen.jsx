import { useState, useRef } from 'react';
import {
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Modal,
  StatusBar,
  Text,
  SafeAreaView,
} from 'react-native';

import { SCREEN_WIDTH, COLUMNS, IMAGES } from "../constants/layout"
import styles from '../style';

export default function GalleryScreen() {
  const [visible, setVisible] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const viewerRef = useRef(null);

  const openViewer = (index) => {
    setStartIndex(index);
    setVisible(true);
  };

  const closeViewer = () => setVisible(false);

  const renderGridItem = ({ item, index }) => (
    <TouchableOpacity
      style={styles.tile}
      activeOpacity={0.85}
      onPress={() => openViewer(index)}
    >
      <Image source={item.source} style={styles.tileImage} resizeMode="cover" />
    </TouchableOpacity>
  );

  const renderViewerItem = ({ item }) => (
    <View style={styles.viewerSlide}>
      <Image source={item.source} style={styles.viewerImage} resizeMode="contain" />
    </View>
  );

  return (
    <SafeAreaView style={styles.containerGallery}>
      <View style={styles.inner}>
        <FlatList
          data={IMAGES}
          keyExtractor={(item) => item.id}
          numColumns={COLUMNS}
          renderItem={renderGridItem}
          contentContainerStyle={styles.grid}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
        />
      </View>

      <Modal visible={visible} transparent={false} animationType="fade" onRequestClose={closeViewer}>
        <StatusBar backgroundColor="#000" barStyle="light-content" />
        <View style={styles.viewerContainer}>
          {/* Close button */}
          <TouchableOpacity style={styles.closeBtn} onPress={closeViewer}>
            <Text style={styles.closeText}>✕</Text>
          </TouchableOpacity>

          {/* Swipeable full-screen viewer */}
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
  );
}

