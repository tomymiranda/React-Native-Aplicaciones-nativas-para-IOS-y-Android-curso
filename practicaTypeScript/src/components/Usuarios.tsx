import { DataUsuarios } from "../interfaces/reqRes";
import { useUsuario } from '../hooks/useUsuario';
const Usuarios = () => {
   
    const { usuariosDelSistema,paginaSiguiente,paginaAnterior } = useUsuario();


    const renderUsuarios = ({id,first_name,last_name,email,avatar}: DataUsuarios) => {
        return (
          <tr key={id.toString()}>
            <td>
                <img src={avatar} alt={first_name} className="rounded-circle" width="50" />
            </td>
            <td>{first_name}{last_name}</td>
            <td>{email}</td>
          </tr>
        );
    }

    return (
      <>
        <h3>Usuarios</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Nombre</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>{usuariosDelSistema.map(renderUsuarios)}</tbody>
        </table>
        <button className="btn btn-primary" onClick={paginaAnterior}>
          Anterior
        </button>
        <button className="btn btn-primary" onClick={paginaSiguiente}>
          Siguiente
        </button>
      </>
    );
}

export default Usuarios;
