import { Platform, StatusBar, StyleSheet } from "react-native";

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
  
  // ------------------Group 1 styles End-------------------



  // NOTE!!!: Group 2 Places your styles here
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "flex-start",
    paddingTop: Platform.OS === "android" ? 40 : 50,
    paddingHorizontal: 25,
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
    left: -4,
  },

  headerTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#111',
    marginBottom: 10,
  },

  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
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
    marginTop: 70,
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

  // ------------------Group 2 styles End-------------------


  // NOTE!!!: Group 3 has been refactored for clarity and responsiveness.
  // These styles are intended for the SignUp screen.
  signUpContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
  },

  // Use SafeAreaView for top/bottom padding in your component
  // e.g., <SafeAreaView style={styles.signUpContainer} edges={['top', 'bottom']}>

  signUpHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 16, // Adjust as needed
    marginBottom: 24,
  },

  signUpBackArrow: {
    padding: 8,
    marginLeft: -8,
  },

  signUpTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
  },

  signUpSubtitle: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 32,
  },

  signUpForm: {
    width: '100%',
    gap: 20,
  },

  signUpInput: {
    height: 48,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    justifyContent: 'center',
    color: '#aaa'
  },

  signUpPasswordContainer: {
    position: 'relative',
    width: '100%',
    justifyContent: 'center',
  },

  signUpPasswordInput: {
    paddingRight: 48,
  },

  signUpPasswordToggle: {
    position: 'absolute',
    right: 16,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },

  signUpButton: {
    height: 48,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff2b78',
    marginTop: 24,
  },

  signUpButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },

  signUpTermsContainer: {
    marginTop: 24,
    paddingHorizontal: 16,
  },

  signUpTermsText: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
    lineHeight: 20,
  },

  signUpTermsLink: {
    color: '#ff2b78',
    fontWeight: 'bold',
  },

  // Place the footer outside the ScrollView for it to stick to the bottom
  signUpFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20, // Space from bottom and content
  },

  signUpFooterText: {
    color: 'gray',
    fontSize: 14,
  },

  signUpFooterLink: {
    color: '#ea147c',
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 4,
  },

  headerTitle2: {
    fontSize: 17,
    fontWeight: '600',
    color: '#111',
    marginLeft: 85,
  }
})

export default styles;
