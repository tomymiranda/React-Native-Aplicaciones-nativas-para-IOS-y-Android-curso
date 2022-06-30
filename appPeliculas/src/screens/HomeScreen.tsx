import {useNavigation} from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {ActivityIndicator, Button, Text, View} from 'react-native';
import { useMovies } from '../hooks/useMovies';

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
  
 const{peliculasEnCine, isLoading} = useMovies();

 if(isLoading){
  return(
    <View style={{flex:1, justifyContent: 'center',alignContent: 'center'}}>
      <ActivityIndicator color ="red" size={100} />
    </View>
  )
 }
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};
