import { View, Image, TextInput } from "react-native";
import MyText from "../components/MyText.jsx";
import MyButton from "@/components/MyButton.jsx";
import style from '../Style.js';

export default function Dashboard({ navigation }) {

    return (
        <View style={style.loginStepView}>
            <View style={style.loginContainer}>
                <View style={style.iconContainer}>
                    <Image source={require('@/assets/images/user.png')} />
                </View>
                <View style={style.whiteContainer}>
                    <MyText style={[style.fontTitle, style.mB10]}>Connexion</MyText>
                    <MyText>Connectez-vous grâce à votre adresse email</MyText>
                    <MyText style={[style.labelTextInput, style.mT50]}>Adresse e-mail</MyText>
                    <TextInput style={[style.textInput, style.mB10]}></TextInput>
                    <MyButton style={style.mT50} title="Se connecter" onPress={() =>
                        navigation.navigate('Profile')
                    }></MyButton>
                </View>
            </View>
        </View>
    );
}
