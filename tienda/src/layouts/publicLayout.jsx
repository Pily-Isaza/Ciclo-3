import Menu from "components/NavBar/Menu"
import { useState } from "react";
import "styles/layoutPrivado.css";

const Layout = ({ children }) => {
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

export default Layout;