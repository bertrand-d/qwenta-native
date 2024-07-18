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
    },
    
    /*UTILITY CLASSES */

    mT50 : {
        marginTop: 50
    },

    mB10 : {
        marginBottom: 10
    },
    
    /*COMPONENTS STYLES*/

    //button
    button: {
        fontFamily: "Epilogue_400Regular",
        backgroundColor: "#8BC7B1",
        padding: 25,
        borderRadius: 5,
    },
    buttonFont: {
        color: "white"
    },

    //label text Input
    labelTextInput: {
        textAlign:"left",
        marginBottom: 10,
  
    },

    //text input
    textInput: {
        fontFamily: "Epilogue_500Medium",
        borderWidth: 1,
        borderColor: "#C4C4C4",
        borderRadius: 5,
        padding: 10
    },

    //white container
    whiteContainer: {
        backgroundColor: "white",
        borderRadius: 10,
        paddingTop: 70,
        paddingHorizontal: "15%",
        paddingBottom: 35
    },

    /* SCREENS */

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