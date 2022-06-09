import React, { useEffect, useReducer } from 'react';

// interfaz para definir el estado de retorno de la funcion authReducer
interface AuthState {
    valindando: boolean,
    token: string|null,
    username:string,
    nombre: string,
}


//estado inicial
const initialState: AuthState = {
    valindando: true,
    token: null,
    username:'',
    nombre: '',
}
type LoginPayload = {
    nombre: string,
    username: string,
    
}


type authAction = 
{type: 'login', payload: LoginPayload}
|{type:'logout'};

//el reducer es solamente una funcion que debe retornar un estado parecido al inicial
const authReducer = (state:AuthState, action:authAction): AuthState => {
    switch (action.type) {
        case 'logout':
            return{
                valindando: false,
                token: null,
                username: '',
                nombre: '',
            }

        case 'login':
            const {username,nombre} = action.payload;
            return{
                valindando: false,
                token: 'password',
                nombre:nombre,
                username: username,
            }
            
        default:
            return state;    
    }
}

const Login = () => {
  
    const [{valindando,token,nombre}, dispatch] = useReducer(authReducer,initialState);
    useEffect(() => {
        setTimeout(() => {
            dispatch({type: 'logout'});
        }, 1500);
    }, [/*si va algo x aca, cuando cambia x, se ejecuta el useEffect */])
    
    if(valindando){
        return (

            <>
            <h3>Login</h3>
            <div className='alert alert-info'>validando...</div>
            </>
        )
    }
    const login = () => {
        dispatch({
        type:'login',
        payload:{
            nombre:'juan',
            username:'juanitoAlegria' 
            }
        }
    )
    }

    const logout = () => {
        dispatch({type: 'logout'});
    }

    return (
        <>
            <h3>Login</h3>

            {
                (token)
                ? <div className='alert alert-success'>Autenticado como: {nombre}</div>
                : <div className='alert alert-danger'>No autenticado</div>
            }
            {
                (token)
                ?(
                    <button className='btn btn-danger' onClick={logout}>Logout</button>
                )
                :(
                    <button className='btn btn-primary' onClick={login}>Login</button>
                    
                )
            }
            
        </>
    )
}

export default Login

