import { StyleSheet } from "react-native"

export default StyleSheet.create({

    /*FONTS GENERAL STYLES*/
    fontStyle: {
        fontFamily: "Epilogue_400Regular",
        fontSize: 16,
        textAlign: "center"
    },
    fontTitle: {
        fontFamily: "Epilogue_500Medium",
        fontSize: 34,
        color: "#8BC7B1",
        textAlign: "center",
        marginBottom: 10
    },

    /*COMPONENTS STYLES*/

    //text input
    textInput: {
        fontFamily: "Epilogue_500Medium",
        borderWidth: 1,
        borderColor: "#C4C4C4",
        borderRadius: 5,
        padding: 10
    },

    //button
    button: {
        fontFamily: "Epilogue_400Regular",
        backgroundColor: "#8BC7B1",
        padding: 25,
        borderRadius: 5,
        marginTop: 50
    },
    buttonFont: {
        color: "white"
    },

    //label text Input
    labelTextInput: {
        textAlign: "left",
        marginBottom: 10,
        marginTop: 50
    },

    //login steps
    loginView: {
        backgroundColor: "#8BC7B1",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
})