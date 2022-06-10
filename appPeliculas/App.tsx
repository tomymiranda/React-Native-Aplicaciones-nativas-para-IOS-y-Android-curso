import React from 'react';
import 'react-native-gesture-handler'
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './src/navigation/Navigation';

const App = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};

export default App;
