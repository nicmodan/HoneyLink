import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({

  // NOTE!!!: Group 2 Places your styles here
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
  
  // My New Styles Start Here
  headerContainer: {
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    width: '100%',
  },
  backButton: {
    marginBottom: 20,
  },
  textContainer: {
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  subText: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
})