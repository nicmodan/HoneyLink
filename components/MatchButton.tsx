import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';


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

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({label, onPress, style}) => (
    <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.85}
    style={[styles.primaryButton, style]}
    >
        <Text style={styles.primaryLabel}>{label}</Text>
    </TouchableOpacity>
);

export const OutlineButton: React.FC<OutlineButtonProps> = ({label, onPress, style}) => (
    <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.7}
    style={[styles.outlineButton, style]}
    >
        <Text style={styles.outlineLabel}>{label}</Text>
    </TouchableOpacity>
);

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


    primaryButton: {
        backgroundColor: '#FF4B75',
        borderRadius: 50,
        paddingVertical: 18,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#FF4B75',
        shadowOffset: {width: 0, height: 4},
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
    outlineButton: {
        backgroundColor: 'transparent',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#FF4B75',
        paddingVertical: 16,
        alignItems: 'center',
        justifyContent: 'center',
    } as ViewStyle,
    outlineLabel: {
        color: '#FF4B75',
        fontSize: 17,
        fontWeight: '600',
        letterSpacing: 0.3,
    } as TextStyle,
    secondButtonSpacing: {
        marginTop: 16,
    } as ViewStyle,
}); 

export default MatchButtons;