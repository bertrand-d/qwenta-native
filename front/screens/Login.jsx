import { View, Image, TextInput } from "react-native";
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import MyText from "../components/MyText.jsx";
import MyButton from "@/components/MyButton.jsx";
import styleLoginStep from '../styles/LoginSteps.js';
import styleComponent from '../styles/Components.js';
import styleFont from '../styles/Fonts.js';
import styleAlias from '../styles/Alias.js';

export default function Login() {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");

    return (
        <View style={styleLoginStep.loginStepView}>
            <View style={styleLoginStep.loginContainer}>
                <View style={styleLoginStep.iconContainer}>
                    <Image source={require('@/assets/images/user.png')} />
                </View>
                <View style={[styleComponent.whiteContainer, styleAlias.pT70]}>
                    <MyText style={[styleFont.fontTitle, styleAlias.mB10]}>Connexion</MyText>
                    <MyText>Connectez-vous grâce à votre adresse email</MyText>
                    <MyText style={[styleComponent.labelTextInput, styleAlias.mT50]}>Adresse e-mail</MyText>
                    <TextInput style={[styleComponent.textInput, styleAlias.mB10]} onChangeText={(text) => setEmail(text)} value={email}></TextInput>
                    <MyButton style={styleAlias.mT50} title="Se connecter" onPress={() => {
                        navigation.navigate('Dashboard')
                    }
                    }></MyButton>
                </View>
            </View>
        </View>
    );
}
