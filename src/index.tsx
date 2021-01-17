import React from 'react';
import { AppLoading } from 'expo';
import {
  useFonts,
  Exo2_700Bold,
  Exo2_400Regular,
} from '@expo-google-fonts/dev';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './routes';

const App = () => {
  const [fontsLoaded] = useFonts({
    Exo2_700Bold,
    Exo2_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default App;
