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
})
