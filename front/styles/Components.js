import { StyleSheet } from "react-native"

export default StyleSheet.create({
    
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
    }
})