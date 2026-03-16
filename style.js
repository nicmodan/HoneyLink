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

  // Ifunanya's part
  socialLoginContainer: {
    width: '100%',
    paddingHorizontal: 24,
    paddingVertical: 16,
    gap: 16,
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
    textTransform: 'uppercase',
    fontSize: 12,
    color: '#6B7280',
  },
  socialButton: {
    height: 48,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  facebook: {
    backgroundColor: '#1877F2',
  },
  gmail: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    backgroundColor: '#fff',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  facebookContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  facebookIcon: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
  },
  gmailText: {
    color: '#1F2937',
    fontSize: 16,
    fontWeight: '700',
  },
  termsText: {
    marginTop: 24,
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
  },
})