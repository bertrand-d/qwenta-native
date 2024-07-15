import React, { useState, useEffect } from 'react';
import { View, Image, Button } from "react-native";
import * as Font from 'expo-font';
import { Epilogue_400Regular, Epilogue_500Medium } from '@expo-google-fonts/epilogue';
import Login from '@/screens/Login.jsx';

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
    <Login/>
  );
}
