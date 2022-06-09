import React from 'react'

const TiposBasicos = () => {
  
    // una variable puede tener varios tipos 
    let nombre: string | number = 'Juan'
    const edad: number = 23
    const estaActivo = true

    const poderes: string[] = ['superfuerza', 'agilidad', 'inteligencia']
    
    return (
    <div>
        <h3>Un elemento random</h3>
        {nombre},{edad},{(estaActivo) ? 'Activo' : 'Inactivo'}
        <br></br>
        {poderes.join(',')}
    </div>
  )
}

export default TiposBasicos;