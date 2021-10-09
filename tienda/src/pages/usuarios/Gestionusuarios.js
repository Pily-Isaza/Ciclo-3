import usuariosJson from "json/usuarios.json";
import RegistrosUsuarios from "components/Roles/Registro";
import "styles/component/Roles/Roles.css"

export default function gestionusuarios() {
  return (
    <div className="container">
      <section className="vistas">
        <div className="vista  row my-4">
          <h4 className="mx-3">Vista de roles</h4>
          <select name="roles" id="rol">
            <option value="todos">Todos</option>
            <option value="administrador">Administrador</option>
            <option value="vendedor">Vendedor</option>
          </select>
        </div>
        <div className="bar-busqueda row my-4">
          <select className="col-3 mr-2 " name="busqueda-usuario" id="usuario">
            <option value="id">Id</option>
            <option value="nombre">Nombre</option>
          </select>
          <input
            className="form-control col-6 mr-2"
            type="text"
            placeholder="Buscar..."
          />
          <button className="btn btn-primary col-2" type="submit">
            Buscar
          </button>
        </div>
      </section>

      <section className="tabla-usuarios">
        <table className="table table-striped ">
          <thead className="thead-dark">
            <tr>
              <th className="col-1">Id</th>
              <th className="col-2">Rol</th>
              <th className="col-2">Estado</th>
              <th>Nombre</th>
              <th className="col-1">Opciones</th>
            </tr>
          </thead>

          <tbody>
            {usuariosJson.map((usuario) => (
              <RegistrosUsuarios
                id={usuario.id}
                estado={usuario.estado}
                rol={usuario.rol}
                nombre={usuario.nombre}
              />
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
