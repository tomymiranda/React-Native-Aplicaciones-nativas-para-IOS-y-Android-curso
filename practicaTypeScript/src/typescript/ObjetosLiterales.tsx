import React from 'react'
interface Persona {
    nombre: string,
    edad: number,
    direccion: Direccion,
}
/* una interfaz abajo de otra, primero la principal, solo sirve para validar tipos*/
interface Direccion {
  calle: string;
  pais: string;
}

const ObjetosLiterales = () => { 
  const persona: Persona = {
    nombre: 'Juan',
    edad: 23,
    direccion: {
        calle: 'Calle falsa 123',
        pais: 'EEUU'
    }
  }
  
    return (
      <div>
        <h3>Objeto literal</h3>
        <code>
            {/*el replacer[donde va null] sirve ver q tipo de dato  quiero mostrar */}
          <pre>{JSON.stringify(persona,null,2)}</pre>
        </code>
      </div>
    );
}
export default ObjetosLiterales