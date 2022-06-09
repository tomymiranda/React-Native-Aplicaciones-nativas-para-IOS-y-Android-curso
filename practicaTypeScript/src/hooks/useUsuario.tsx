import React, { useEffect, useRef } from "react";
import { reqResApi } from "../api/reqRes";
import { DataUsuarios, ReqResListado } from "../interfaces/reqRes";

export const useUsuario = () => {
   const [usuariosDelSistema, setUsuarios] = React.useState<DataUsuarios[]>([]);

   const paginaRef = useRef(1);
   
   useEffect(() => {
     //llamado a api  
     fetchUsuarios();
   }, []);

   const fetchUsuarios = async() => {
    
     const resp = await reqResApi.get<ReqResListado>('/users', {
       params: {
         page: paginaRef.current,
       },
     });

    if (resp.data.data.length > 0) {
       
       setUsuarios( resp.data.data );
       console.log(resp.data.data);
       console.log(paginaRef);
       
     } else {
       alert('No hay mas usuarios');
     }
   };

   const paginaAnterior = () => {
    if (paginaRef.current > 1){
      paginaRef.current--;
      fetchUsuarios();  
    } 
   }

   const paginaSiguiente = () => {
    paginaRef.current++;
    fetchUsuarios();
   }

   return {
     usuariosDelSistema,
     paginaAnterior,
     paginaSiguiente,
   };
}
