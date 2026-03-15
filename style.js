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
    }
    
})