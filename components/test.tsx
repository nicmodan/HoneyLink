import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';

const PINK = '#FF4B75';

interface PrimaryButtonProps {
  label: string;
  onPress: () => void;
  style?: ViewStyle;
}

interface OutlineButtonProps {
  label: string;
  onPress: () => void;
  style?: ViewStyle;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  label,
  onPress,
  style,
}) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.85}
    style={[styles.primaryButton, style]}
  >
    <Text style={styles.primaryLabel}>{label}</Text>
  </TouchableOpacity>
);

export const OutlineButton: React.FC<OutlineButtonProps> = ({
  label,
  onPress,
  style,
}) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.7}
    style={[styles.outlineButton, style]}
  >
    <Text style={styles.outlineLabel}>{label}</Text>
  </TouchableOpacity>
);

// Demo screen showing both buttons together
const MatchButtons: React.FC = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <PrimaryButton
          label="Send Message"
          onPress={() => console.log('Send Message pressed')}
        />
        <OutlineButton
          label="Keep Swiping"
          onPress={() => console.log('Keep Swiping pressed')}
          style={styles.secondButtonSpacing}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  } as ViewStyle,

  container: {
    width: '100%',
  } as ViewStyle,

  // --- Primary (filled pink) ---
  primaryButton: {
    backgroundColor: PINK,
    borderRadius: 50,
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
    // Subtle shadow to lift the button off the surface
    shadowColor: PINK,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 6,
  } as ViewStyle,

  primaryLabel: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
    letterSpacing: 0.3,
  } as TextStyle,

  // --- Outline (border only) ---
  outlineButton: {
    backgroundColor: 'transparent',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: PINK,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,

  outlineLabel: {
    color: PINK,
    fontSize: 17,
    fontWeight: '600',
    letterSpacing: 0.3,
  } as TextStyle,

  secondButtonSpacing: {
    marginTop: 16,
  } as ViewStyle,
});

export default MatchButtons;