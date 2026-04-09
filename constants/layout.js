import { Dimensions } from "react-native";

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get("window");
export const OUTER_PADDING = 20;
export const GRID_SPACING = 10;
export const COLUMNS = 3;
export const INNER_WIDTH = SCREEN_WIDTH - OUTER_PADDING * 2;
export const TILE_SIZE = (INNER_WIDTH - GRID_SPACING * (COLUMNS + 1)) / COLUMNS;

export const IMAGES = [
  { id: "1", source: require("../assets/images/sample.jpg") },
  { id: "2", source: require("../assets/images/frontimage.png") },
  { id: "3", source: require("../assets/images/Couples.jpg") },
  { id: "4", source: require("../assets/images/sample.jpg") },
  { id: "5", source: require("../assets/images/frontimage.png") },
  { id: "6", source: require("../assets/images/Couples.jpg") },
];
