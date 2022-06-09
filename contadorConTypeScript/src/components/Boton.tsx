/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, StyleSheet, TouchableNativeFeedback, Platform, TouchableOpacity } from 'react-native';

// el signo de pregunta al lado del nombre props es para indicar q es opcional
interface Props {
  title: string;
  position?:'left'|'right';
  onPress: () => void;
}

export const Boton = ({title, onPress, position = 'right'}: Props) => {
  
  const ios = () =>{
       return (
         /*cuando se usa el boton TouchableNativeFeedback, para ajustar su ubicacion
          se debe poner dentro de una etiqueta <View></View> y pasarle el style 
          que contiene la ubicacion


          activeOpacity va desde 0 a 1
          */
         <TouchableOpacity
           onPress={onPress}
           activeOpacity={0.8}
           style={[
             styles.botonPosition,
             position === 'left' ? styles.left : styles.right,
           ]}>
           <View style={styles.botonStyle}>
             <Text style={styles.textBoton}>{title}</Text>
           </View>
         </TouchableOpacity>
       );
  }
  
  const android = () =>{
     return (
          /*cuando se usa el boton TouchableNativeFeedback, para ajustar su ubicacion
          se debe poner dentro de una etiqueta <View></View> y pasarle el style 
          que contiene la ubicacion
          */
        <View
          style={[
            styles.botonPosition,
            position === 'left' ? styles.left : styles.right,
          ]}>
          <TouchableNativeFeedback
            onPress={onPress}
            background={TouchableNativeFeedback.Ripple('black', false, 30)}>
            <View style={styles.botonStyle}>
              <Text style={styles.textBoton}>{title}</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
     )
  }
  
  return (Platform.OS === 'ios') ? ios() : android();
};
const styles = StyleSheet.create({
  botonStyle: {
    backgroundColor: '#5856D6',
    borderRadius: 100,
    width: 60,
    height: 60,
    //el justifyContent: 'center' hace que el hijo( o componente
    // que esta dentro o texto) se centre respecto a el.
    justifyContent: 'center',
    //para generar sombra https://ethercreative.github.io/react-native-shadow-generator/
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  textBoton: {
    color: 'white',
    //el alignItems: 'center' hace que el texto se centre respecto a el.
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  botonPosition: {
    position: 'absolute',
    bottom: 24,
  },
  right: {
    right: 24,
  },
  left: {
    left: 24,
  },
});
