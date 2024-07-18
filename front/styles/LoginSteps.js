import { StyleSheet } from "react-native"

export default StyleSheet.create({

    /* SCREENS LOGIN STEP */

    //login steps
    loginStepView: {
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
        top: -80,
        zIndex: 1,
        backgroundColor: "white",
        padding: "15%",
        borderRadius: 100
    }
})