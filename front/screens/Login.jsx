import { View, Image, Button } from "react-native";
import MyText from "../components/MyText.jsx";
import MyButton from "@/components/MyButton.jsx";
import style from '../Style.js';

export default function Login() {
  return (
    <View style={style.loginView}>
      <View style={style.loginContainer}>
        <View style={style.iconContainer}>
          <Image source={require('@/assets/images/user.png')} />
        </View>
        <View style={style.whiteContainer}>
          <MyText style= {style.fontTitle}>Connexion</MyText>
          <MyText>Connectez-vous grâce à votre adresse email</MyText>
          <MyButton title="Se connecter"></MyButton>
        </View>
      </View>
    </View>
  );
}
