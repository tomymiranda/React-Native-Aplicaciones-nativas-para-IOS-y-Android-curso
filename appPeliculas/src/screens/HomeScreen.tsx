import {useNavigation} from '@react-navigation/native';
import React, { useEffect } from 'react';
import {Button, Text, View} from 'react-native';
import movieDB from '../api/movieDB'
/* esto va arriba del export const HomeScreen = () => { 
type Nav = {
  navigate: (value: string) => void;
};

esto va abajo
const navigation = useNavigation<Nav>();
<Button
        title="Ir a detalle"
        onPress={() => navigation.navigate('DetailsScreen')}
      />
*/
//posible solucion para el problema de pasarle un nombre al navigation

export const HomeScreen = () => {
  
  useEffect(() => {
    
    movieDB.get('/now_playing').then(response => {
      console.log(response.data)
    })

  }, []);
  

  return (
    <View>
      <Text>HomeScreen</Text>
      
    </View>
  );
};
