import React from 'react'
import { useState } from 'react';
import useCounter from '../hooks/useCounter';

const ContadorConHook = () => {
 
    //con los cambios en useCounter, el valor inicial es opcional.
    //si se cambia al que refrescar porq mantiene el stado anterior.
    const {valor, acumular} = useCounter(15);
    return (
        <>
            <h3>Contador: <small>{valor}</small></h3>
            <button className='btn btn-primary' onClick={() => acumular(1)}>+1</button>
            &nbsp;
            <button className='btn btn-primary' onClick={() => acumular(-1)}>-1</button>
        </>
    )
}

export default ContadorConHook;