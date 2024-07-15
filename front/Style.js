import { StyleSheet } from "react-native"

export default StyleSheet.create({

    //fonts
    fontStyle: {
        fontFamily: "Epilogue_400Regular",
        fontSize: 16,
    },
    fontTitle: {
        fontFamily: "Epilogue_500Medium",
        fontSize: 34,
        color: "#8BC7B1"
    },

    //components
    button: {
        backgroundColor: "#8BC7B1",
        color: "white"
    },
    whiteContainer: {
        backgroundColor: "white",
        borderRadius: 10,
        padding: 90,
        paddingBottom: 35,
    },
    loginView: {
        backgroundColor: "#8BC7B1",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    loginContainer: {
        position: "relative",
    },
    iconContainer: {
        position: "absolute",
        alignSelf: "center",
        top: -100,
        zIndex: 1,
        backgroundColor: "white",
        padding: 70,
        borderRadius: 100
    }
})