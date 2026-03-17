import { StyleSheet, Platform, StatusBar } from "react-native";

const styles =  StyleSheet.create({
  
  // NOTE!!!: Group 1 Places your styles here
  background: {
    flex: 1,
    justifyContent: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "rgba(223, 51, 110, 0.34)",
  },

  content: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 24,
    paddingBottom: 72,
    paddingTop: Platform.select({
      ios: 48,
      android: (StatusBar.currentHeight ?? 0) + 24,
      default: 24,
    }),
  },
  displayText: {
    maxWidth: 240,
    marginBottom: 28,
    fontSize: 42,
    fontWeight: "800",
    lineHeight: 46,
    color: "#FFFFFF",
  },

  primaryButton: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 52,
    marginBottom: 14,
    borderRadius: 999,
    backgroundColor: "#ff2b78",
  },

  primaryButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  secondaryButton: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 52,
    borderRadius: 999,
    backgroundColor: "#FFFFFF",
  },

  secondaryButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#3A3A3A",
  },

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
    width: '58%',
  },

  backButton: {
    marginBottom: 8,
    left: -10,
  },

  headerTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#111',
    marginBottom: 10,
  },

  welcomeText: {
    fontSize: 28,
    fontWeight: '600',
    color: '#333',
    marginTop: 25,
  },

  subText: {
    fontSize: 14,
    color: '#666',
    marginTop: 13,
  },
  
  // Email Password Login Section Styles - Micah
  formContainer: {
    width: '100%',
    marginTop: 40,
    gap: 20,
  },

  inputContainer: {
    height: 48,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    justifyContent: 'center',
  },

  passwordRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  input: {
    fontSize: 16,
    color: '#1F2937',
    flex: 1,
  },

  forgotButton: {
    alignSelf: 'flex-start',
    marginTop: -2,
    marginBottom: 16,
    left: 3,
  },

  forgotText: {
    color: '#ff2b78',
    fontSize: 14,
    fontWeight: '600',
  },

  // Social Login Section Styles - by Ifunanya
  socialLoginContainer: {
    width: '100%',
    paddingVertical: 16,
    gap: 28,
  },

  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#D1D5DB',
  },

  dividerLabel: {
    fontSize: 15,
    color: '#6B7280',
  },

  socialButton: {
    height: 48,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -10,
  },

  facebook: {
    backgroundColor: '#3b5998',
  },

  gmail: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    backgroundColor: '#fff',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  facebookContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  facebookIcon: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '800',
  },

  gmailText: {
    color: '#1F2937',
    fontSize: 16,
    fontWeight: '600',
  },

  termsText: {
    marginTop: 24,
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
  },

  loginButton: {
    height: 48,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff2b78',
  },

  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },

  // NOTE!!!: Group 3 Places your styles here

  container3: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
  },

  header:{
    flexDirection: "row",
    alignSelf: "flex-start",
    marginLeft: 20,
  },

  arrow:{
    fontSize: 20,
    marginRight: 140,
  },

  text: {
    fontSize: 16,
    paddingBottom: 70,
    marginBottom: 60,
    alignItems: "center",
    alignSelf: "center",
    marginRight: "auto",
  },

  title: {
    fontSize: 35,
    paddingRight: 70,
    fontWeight: "bold",
    marginTop: -100,
  },

  subtitle: {
    fontSize: 16,
    color: "gray",
    paddingRight: 160,
    marginBottom: 140,
    paddingBottom: 90,

  },

  input3: {
    width: "89%",
    backgroundColor: "#f5f5f5",
    borderRadius: 30,
    padding: 17,
    marginBottom: 27,
    fontSize: 16,
    borderWidth: 2,
    borderColor: "#aaa",
  },

  inputContainer3: {
    width: "100%",      
    alignItems: "center", 
    marginBottom: 20,    
    marginTop: -190,     
  },

  cautionContainer: {
    alignItems: "center",
    marginTop: 15,
    marginHorizontal: 30,
  },

  caution: {
    fontSize: 15,
    color: "gray",
    textAlign: "center",
  },

  cautionDetails: {
    fontSize: 15,
    color: "gray",
    textAlign: "center",
    marginTop: 2, 
  },

  terms: {
    color: "#ff2b78",
    fontWeight: "bold",
    marginRight: 5,
  },

  cautionText: {
    color: "gray",
    marginHorizontal: 5,

  },

  condition: {
    color: "#ff2b78",
    fontWeight: "bold",
    marginLeft: 5,
  },


  button: {
    width: "89%",
    backgroundColor: "#ff2b78",
    padding: 19,
    borderRadius: 30,
    alignItems: "center",
  },

  buttonText3: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },

  loginText: {
    marginTop: 130,
    color: "gray",
  },

  loginLink: {
    color: "#ea147c",
    fontWeight: "bold",
  }
})

export default styles;
