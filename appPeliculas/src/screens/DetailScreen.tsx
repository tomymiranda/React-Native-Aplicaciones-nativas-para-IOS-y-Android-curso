import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';
type Nav = {
  navigate: (value: string) => void;
};
export const DetailsScreen = () => {
  const navigation = useNavigation<Nav>();
  return (
    <View>
      <Text>DetailsScreen</Text>
      <Button
        title="Ir a Home"
        onPress={() => navigation.navigate('HomeScreen')}
      />
    </View>
  );
};
