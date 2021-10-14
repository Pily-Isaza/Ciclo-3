
import ListaModulos from "./json/modulosMenu.json"
import { useState } from "react";
import { useLocation } from "react-router";
import "styles/layoutPrivado.css";

const Layout = ({children}) => {
    const location = useLocation();
    const [paginaActual, setPaginaActual] = useState(location.pathname);
    return (
        <div className='contenedorPrincipal'>
            <header>
                <Menu ModulosYRutas={ListaModulos} paginaActual={paginaActual}
          onChange={(pagina) => setPaginaActual(pagina)}/>
            </header>
            <main>
            {children}
            </main>        
        </div>
    )
}

export default Layout