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
        textAlign: "center"
    },

    /*COMPONENTS STYLES*/

    //button
    button: {
        fontFamily: "Epilogue_500Medium",
        backgroundColor: "#8BC7B1",
        padding: 25,
        borderRadius: 5
    },
    buttonFont: {
        color: "white"
    },

    //white container
    whiteContainer: {
        backgroundColor: "white",
        borderRadius: 10,
        paddingTop: 80,
        paddingHorizontal: "15%",
        paddingBottom: 35,
    },

    //login steps
    loginView: {
        backgroundColor: "#8BC7B1",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    loginContainer: {
        position: "relative",
    },
    iconContainer: {
        position: "absolute",
        alignSelf: "center",
        top: "-30%",
        zIndex: 1,
        backgroundColor: "white",
        padding: "15%",
        borderRadius: 100
    }
})