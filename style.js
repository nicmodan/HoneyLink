import { Platform, StatusBar, StyleSheet, } from "react-native";

import { INNER_WIDTH, OUTER_PADDING, GRID_SPACING, TILE_SIZE, SCREEN_WIDTH, SCREEN_HEIGHT } from "./constants/layout"
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

  // Header Profile Content Styles - by DARE
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },

  profileTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    left: 10,
  },

  editButton: {
    fontSize: 16,
    color: '#888',
    left: 10,
  },

  profileContainer: {
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingBottom: 20,
    alignItems: 'center'
  },

  profileContent: {
    flex: 1,
    minHeight: 0,
  },

  profileName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },

  profileLocation: { 
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
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

  backButton2: {
    marginLeft: -20
  },

  // Profile Stat styles - by Micah
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    gap: 40,
  },

  stat: {
    alignItems: 'center'
  },

  statNumber: {
    color: '#ff4d6d',
    fontSize: 18,
    fontWeight: '600',
  },

  statLabel: {
    color: '#666',
  },

  // Social Login Section Styles - by Ifunanya

  containerGallery: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

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

  // Profile Gallery styles - by Ifunanya
  tabView: {
    flex: 1,
  },

  tabBar: {
    backgroundColor: '#fff',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingHorizontal: 0,

  },

  tabIndicator: {
    backgroundColor: '#ff2b78',
    height: 3,
    borderRadius: 20,
    alignSelf: 'center',
    alignItems: 'center',
    width: 65,
    marginLeft: 48,
  },

  tabLabel: {
    fontSize: 16,
    textTransform: 'none',
    fontWeight: '600',
  },

  tabItem: {
    width: 'auto',
    paddingHorizontal: 6,
  },

  about: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },

  aboutText: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
  },

  inner: {
    flex: 1,
    width: INNER_WIDTH,
    backgroundColor: '#fff',
    alignSelf: 'center',
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
    // Match TILE_SIZE math: outer padding (2*4) + tile margins (6*4) = GRID_SPACING*(COLUMNS+1)
    paddingHorizontal: GRID_SPACING / 2,
    paddingTop: 14,
    paddingBottom: 14,
  },

  gridFill: {
    flexGrow: 1,
  },

  galleryList: {
    flex: 1,
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
  },

  // ------------------Group 3 styles End-------------------

  // NOTE!!!: Group 4 Places your styles here
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    height: 64,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#fff',
    borderRadius: 32,
    paddingHorizontal: 24,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
    ...Platform.select({
      ios: {
        paddingBottom: 0,
      },
      android: {  
        paddingBottom: 0,
      }
    })
  },

  fab: {
    position: 'relative',
    bottom: 16,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: '#ff4d6d', 
    shadowColor: '#000',
    shadowOpacity: 0.35,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },   
    elevation: 5,
  },

  linkText: {
    marginTop: 20,
    color: '#ff2b78',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  // ------------------Group 4 styles End-------------------
})

export default styles;
