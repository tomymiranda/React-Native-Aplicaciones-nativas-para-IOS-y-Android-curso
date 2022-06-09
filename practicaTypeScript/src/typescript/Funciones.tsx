import React from 'react'

const Funciones = () => {
  
    //como en java, al definir la funcion, se le puede asignar el tipo de retorno y a los parametros tambien
    const sumar = (a:number,b:number):number =>{
        return a+b
    }

    return (
        <>
        
        <div>Funciones</div>
        <span>La suma es: {sumar(1,3)}</span>
        
        </>
    )
}
export default Funciones