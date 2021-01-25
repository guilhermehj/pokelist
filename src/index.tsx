import React, {useEffect} from 'react';
import {Platform, StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import RootStack from './routes';

const App = () => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('whitesmoke', true);
      StatusBar.setBarStyle('dark-content');
    }
  }, []);
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default App;
