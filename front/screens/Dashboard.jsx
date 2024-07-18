import { View, Image, TextInput } from "react-native";
import MyText from "../components/MyText.jsx";
import styleDashboard from '../styles/Dashboard.js';
import styleComponent from "@/styles/Components.js";

export default function Dashboard() {

    return (
        <View style={styleDashboard.dashboardScreen}>
            <View style={styleComponent.whiteContainer}>
                <MyText>+ Créer un menu</MyText>
            </View>
            <View style={styleComponent.whiteContainer}>
                <MyText>+ Diffuser un menu</MyText>
            </View>
            <View style={styleComponent.whiteContainer}>
                <MyText>+ Imprimer un menu</MyText>
            </View>
        </View>
    );
}
