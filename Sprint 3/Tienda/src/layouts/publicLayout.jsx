import Menu from "components/Navbar/menu";
import { useState } from "react";
import "styles/estilos.css";

const PublicLayout = ({ children }) => {
    const [paginaActual, setPaginaActual] = useState('/')

    let ListaModulos = [
        {
          id: "001",
          nombre: "Iniciar Sesion",
          ruta: "/login",
        },
        {
          id: "002",
          nombre: "Modulos",
          ruta: "/usuarios",
        },
      ];
  
  return (
    <div>
      <header>
        <Menu
          ModulosYRutas={ListaModulos}
          paginaActual = {paginaActual}
          onChange = {(pagina) => setPaginaActual(pagina)}

        />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default PublicLayout