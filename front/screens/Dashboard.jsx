import { View, Image, TextInput } from "react-native";
import MyText from "../components/MyText.jsx";
import MyButton from "@/components/MyButton.jsx";
import styleLoginStep from '../styles/LoginSteps.js';
import styleComponent from '../styles/Components.js';
import styleFont from '../styles/Fonts.js';
import styleAlias from '../styles/Alias.js';

export default function Dashboard({ navigation }) {

    return (
        <View style={styleLoginStep.loginStepView}>
            <View style={styleLoginStep.loginContainer}>
                <View style={styleLoginStep.iconContainer}>
                    <Image source={require('@/assets/images/user.png')} />
                </View>
                <View style={styleComponent.whiteContainer}>
                    <MyText style={[styleFont.fontTitle, styleAlias.mB10]}>Connexion</MyText>
                    <MyText>Connectez-vous grâce à votre adresse email</MyText>
                    <MyText style={[styleFont.labelTextInput, styleAlias.mT50]}>Adresse e-mail</MyText>
                    <TextInput style={[styleFont.textInput, styleAlias.mB10]}></TextInput>
                    <MyButton style={styleAlias.mT50} title="Se connecter" onPress={() =>
                        navigation.navigate('Profile')
                    }></MyButton>
                </View>
            </View>
        </View>
    );
}
