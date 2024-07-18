import { View, Image, TextInput } from "react-native";
import { useState } from "react";
import MyText from "../components/MyText.jsx";
import MyButton from "@/components/MyButton.jsx";
import style from '../Style.js';

export default function Login() {
    const [email, setEmail] = useState("");

    return (
        <View style={style.loginView}>
            <View style={style.loginContainer}>
                <View style={style.iconContainer}>
                    <Image source={require('@/assets/images/user.png')} />
                </View>
                <View style={style.whiteContainer}>
                    <MyText style={[style.fontTitle, style.mB10]}>Connexion</MyText>
                    <MyText>Connectez-vous grâce à votre adresse email</MyText>
                    <MyText style={[style.labelTextInput, style.mT50]}>Adresse e-mail</MyText>
                    <TextInput style={[style.textInput, style.mB10]} onChangeText={(text) => setEmail(text)} value={email}></TextInput>
                    <MyButton style={style.mT50} title="Se connecter"></MyButton>
                </View>
            </View>
        </View>
    );
}
