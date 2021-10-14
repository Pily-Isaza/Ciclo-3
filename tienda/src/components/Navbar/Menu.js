import { Link } from "react-router-dom";
export default function Menu(props) {
 
    let paths=props.ModulosYRutas
  
  const nombraModulos = () => {
    const resultado = [];

    paths.forEach((modulo) => {

      resultado.push(
        
        <li key={modulo.id}>
          <Link to={modulo.ruta} className='ruta'>{modulo.nombre}</Link>
        </li>
      );
    });
    return resultado;
  };

  return (
    <nav className="lista-enlaces">
      <Link to="/">
      <h1 className="titulo">Tienda</h1>
      </Link>

      <ul className="menu">
        {nombraModulos()}
      </ul>

    </nav>
  );
}
