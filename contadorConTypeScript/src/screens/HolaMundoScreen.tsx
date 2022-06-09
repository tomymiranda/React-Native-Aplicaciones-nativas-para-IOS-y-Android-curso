/* eslint-disable react-native/no-inline-styles *//* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View} from 'react-native';
const HolaMundoScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 55,
          textAlign: 'center',
        }}>
        Hola mundo
      </Text>
    </View>
  );
};
export default HolaMundoScreen;
