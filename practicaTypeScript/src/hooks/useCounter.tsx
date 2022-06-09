import React from 'react'
import { useState } from 'react';

//se le puede pasar props al hook y setear un valor por defecto
const useCounter = (inicial:number = 10) => {
    const [valor, setValor] = useState(inicial);
    const acumular = (numero:number) => {
        setValor(valor + numero);
    }
    return {
        valor,
        acumular
    }       
}

export default useCounter