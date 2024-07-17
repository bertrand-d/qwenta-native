import { View, Image, TextInput } from "react-native";
import { useState } from "react";
import MyText from "../components/MyText.jsx";
import MyButton from "@/components/MyButton.jsx";
import style from '../Style.js';

export default function Login() {
    const [email, setEmail] = useState("");

    return (
        <View className="flex-1 items-center justify-center bg-primary">
            <View style={style.loginContainer}>
                <View style={style.iconContainer}>
                    <Image source={require('@/assets/images/user.png')} />
                </View>
                <View style={style.whiteContainer}>
                    <MyText style={style.fontTitle}>Connexion</MyText>
                    <MyText>Connectez-vous grâce à votre adresse e-mail</MyText>
                    <MyText style={style.labelTextInput}>Adresse e-mail</MyText>
                    <TextInput style={style.textInput} onChangeText={(text) => setEmail(text)} value={email}></TextInput>
                    <MyButton title="Se connecter"></MyButton>
                </View>
            </View>
        </View>
    );
}
