import MenuOpciones from "components/Roles/MenuOpciones";
import { nanoid } from "nanoid";

export default function Registro({ id, rol, estado, nombre }) {

  return (
    <tr key={nanoid}>
      <td>{id}</td>
      <td>{rol}</td>
      <td>{estado}</td>
      <td>{nombre}</td>
      <td>
        <MenuOpciones
          rutaEnviar={`/usuarios/${id}`}
          nombreBoton="Editar"
        />
      </td>
    </tr>
  );
}
