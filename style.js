import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({

  // NOTE!!!: Group 2 Places your styles here
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "flex-start",
    paddingTop: Platform.OS === "android" ? 40 : 40,
    paddingHorizontal: 20,
  },

  
  // Header Section Styles - by DARE
  headerContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 10,
    width: '100%',
  },

  headerContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '60%',
  },

  backButton: {
    marginBottom: 8,
    left: -10,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111',
    marginBottom: 10,
  },

  welcomeText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
    marginTop: 12,
  },

  subText: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },

})
