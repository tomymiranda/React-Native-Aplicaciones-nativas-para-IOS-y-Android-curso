import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';

//posible solucion para el problema de que
type Nav = {
  navigate: (value: string) => void;
};

export const HomeScreen = () => {
  const navigation = useNavigation<Nav>();

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Ir a detalle"
        onPress={() => navigation.navigate('DetailsScreen')}
      />
    </View>
  );
};
