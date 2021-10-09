
import { useParams } from "react-router";
import "styles/components/Roles/Formularioroles.css";

import usuariosJson from "json/usuarios.json";
export default function Formulario() {

  const { id } = useParams();
  

  const getUsuario = () => {
     for (let i =0; i<usuariosJson.length; i++){
         if (usuariosJson[i].id === id){
             return usuariosJson[i]
         }
     }
    }
  let usuarioActual = getUsuario();
  return (
    <div>
      <h1 className="titulo-principal">Gestionar usuarios y roles</h1>
      <section className="form-roles">
        <form action="#">
          <h3 className="titulo-3">
            Id: <span>{id}</span>
          </h3>
          <label htmlFor="nombre">Nombre completo</label>
          <input
            autoComplete="off"
            type="text"
            name="nombre"
            id="nombre"
            defaultValue={usuarioActual.nombre}
          />
          <label htmlFor="estados">Estado</label>
          <select className="seleccionar" name="estados" id="estados">
            <option value="pendiente">Pendiente</option>
            <option value="autorizado">Autorizado</option>
            <option value="no autorizado">No Autorizado</option>
          </select>
          <label htmlFor="roles">Asignar rol</label>
          <select className="seleccionar" name="roles" id="roles">
            <option value="vendedor">Vendedor</option>
            <option value="administrador">Administrador</option>
            <option value="administrador">Gerente</option>
          </select>
          <input className="button" type="submit" value="Enviar" />
        </form>
      </section>
    </div>
  );
}
