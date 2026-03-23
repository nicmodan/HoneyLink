import React, { useState, useRef } from 'react';
import {
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Dimensions,
  StatusBar,
  Text,
  SafeAreaView,
} from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const OUTER_PADDING = 20;          // card margin from screen edge
const GRID_SPACING = 8;
const COLUMNS = 3;
const INNER_WIDTH = SCREEN_WIDTH - OUTER_PADDING * 2;
const TILE_SIZE = (INNER_WIDTH - GRID_SPACING * (COLUMNS + 1)) / COLUMNS;

// Using the same image 6 times — swap in other images whenever you have them
const IMAGES = [
  { id: '1', source: require('../assets/light bulb.jpg') },
  { id: '2', source: require('../assets/light bulb.jpg') },
  { id: '3', source: require('../assets/light bulb.jpg') },
  { id: '4', source: require('../assets/light bulb.jpg') },
  { id: '5', source: require('../assets/light bulb.jpg') },
  { id: '6', source: require('../assets/light bulb.jpg') },
];

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
    <SafeAreaView style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',      // center card vertically
    alignItems: 'center',
  },
  inner: {
    width: INNER_WIDTH,
    backgroundColor: '#fff',
    marginHorizontal: OUTER_PADDING,
    borderRadius: 18,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.10,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },

  // ── Grid ──────────────────────────────────────────────
  grid: {
    paddingHorizontal: GRID_SPACING / 2,  // matches tile outer margin — no overflow
    paddingTop: 14,
    paddingBottom: 14,
  },
  tile: {
    width: TILE_SIZE,
    height: TILE_SIZE * 1.05,
    borderRadius: 14,
    overflow: 'hidden',
    margin: GRID_SPACING / 2,
  },
  tileImage: {
    width: '100%',
    height: '100%',
  },

  // ── Full-screen viewer ────────────────────────────────
  viewerContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  viewerSlide: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewerImage: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  closeBtn: {
    position: 'absolute',
    top: 48,
    right: 20,
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});
