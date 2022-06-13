
import React from 'react';
import { SafeAreaViewBase, Text } from 'react-native';
import CalculadoraScreen from './src/screens/CalculadoraScreen';
import {styles} from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaViewBase style={styles.fondo}>
      <Text>HOLA</Text>
    </SafeAreaViewBase>
  );
};
export default App;
