import React, { useState, useEffect } from 'react';
import { View, Image, Button } from "react-native";
import MyText from "@/components/MyText.jsx";
import style from '../Style.js';
import * as Font from 'expo-font';
import { Epilogue_400Regular, Epilogue_500Medium } from '@expo-google-fonts/epilogue';

export default function Index() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        Epilogue_400Regular,
        Epilogue_500Medium,
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // ou un composant de chargement personnalisé
  }

  return (
    <View style={style.loginView}>
      <View style={style.loginContainer}>
        <View style={style.iconContainer}>
          <Image source={require('@/assets/images/user.png')} />
        </View>
        <View style={style.whiteContainer}>
          <MyText style= {style.fontTitle}>Connexion</MyText>
          <MyText>Connectez-vous grâce à votre adresse email</MyText>
          <Button title="Se connecter"></Button>
        </View>
      </View>
    </View>
  );
}
