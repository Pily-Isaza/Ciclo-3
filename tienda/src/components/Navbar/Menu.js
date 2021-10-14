import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import "styles/menu.css";

export default function Menu ({ ModulosYRutas, paginaActual, onChange }) {
  
  const nombraModulos = () => {
    const resultado = [];

    ModulosYRutas.forEach((modulo) => {

      resultado.push(
        
        <li key={nanoid}>
          <Link to={modulo.ruta} className={paginaActual === modulo.ruta ? "active" : "ruta"} onClick= {() => onChange(modulo.ruta)}>
            {modulo.nombre}
            </Link>
        </li>
      );
    });
    return resultado;
  };

  return (
    <nav className="lista-enlaces">
      <Link to="/" className='text-decoration-none'>
      <h1 className="titulo">Tienda</h1>
      </Link>

      <ul className="menu">
        {nombraModulos()}
      </ul>

    </nav>
  );
}
