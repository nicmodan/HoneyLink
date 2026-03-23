import { Dimensions } from 'react-native';


export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
export const OUTER_PADDING = 20;          // card margin from screen edge
export const GRID_SPACING = 8;
export const COLUMNS = 3;
export const INNER_WIDTH = SCREEN_WIDTH - OUTER_PADDING * 2;
export const TILE_SIZE = (INNER_WIDTH - GRID_SPACING * (COLUMNS + 1)) / COLUMNS;

// Using the same image 6 times — swap in other images whenever you have them
export const IMAGES = [
  { id: '1', source: require('../assets/light bulb.jpg') },
  { id: '2', source: require('../assets/light bulb.jpg') },
  { id: '3', source: require('../assets/light bulb.jpg') },
  { id: '4', source: require('../assets/light bulb.jpg') },
  { id: '5', source: require('../assets/light bulb.jpg') },
  { id: '6', source: require('../assets/light bulb.jpg') },
];

