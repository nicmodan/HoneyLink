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
  useWindowDimensions,
} from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';

import { SCREEN_WIDTH, COLUMNS, IMAGES } from "../constants/layout"
import styles from '../style';

export default function GalleryScreen() {
  const [visible, setVisible] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const viewerRef = useRef(null);
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'about', title: 'About' },
    { key: 'gallery', title: 'Gallery' },
  ]);

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

  // About tab
  const AboutRoute = () => (
    <View style={styles.about}>
      <Text style={styles.aboutText}>
        Passionate traveler | Photographer | Designer | Developer
      </Text>
    </View>
  );

  const GalleryRoute = () => (
    <SafeAreaView style={styles.containerGallery}>
      <View style={styles.inner}>
        <FlatList
          data={IMAGES}
          keyExtractor={(item) => item.id}
          numColumns={COLUMNS}
          renderItem={renderGridItem}
          style={styles.galleryList}
          contentContainerStyle={[styles.grid, styles.gridFill]}
          showsVerticalScrollIndicator={false}
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

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'about':
        return <AboutRoute />;
      case 'gallery':
        return <GalleryRoute />;
      default:
        return null;
    }
  };

  return (
    <TabView
      style={styles.tabView}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          style={styles.tabBar}
          indicatorStyle={styles.tabIndicator}
          labelStyle={styles.tabLabel}
          activeColor="#333"
          inactiveColor="#999"
        />
      )}
    />
  );
}

