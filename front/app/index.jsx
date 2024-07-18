import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';
import React, { useState, useEffect } from 'react';
import { Epilogue_400Regular, Epilogue_500Medium } from '@expo-google-fonts/epilogue';
import Login from '@/screens/Login.jsx';
import Dashboard from '@/screens/Dashboard';

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

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
        />
         <Stack.Screen
          name="Dashboard"
          component={Dashboard}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}