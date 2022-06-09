/* eslint-disable react-native/no-inline-styles *//* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { Boton } from '../components/Boton';
const ContadorScreen = () => {
    const [contador, setContador] = useState(10);

    return (
      //con flex:1 se hace que el contenedor ocupa todo el espacio disponible
      // position relative es el defecto de los componentes
      //el styles es como css, mejora la visualizacion
      <View style={styles.container}>
        <Text style={styles.title}>El valor del contador es: {contador}</Text>
        <Boton
          title="+1"
          onPress={ () => setContador(contador + 1)}
          position="right"
        />

        <Boton
          title="-1"
          onPress={ () => setContador(contador - 1)}
          position="left"
        />
      </View>
    );
};
export default ContadorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 46,
    top: -10,
  },
});
