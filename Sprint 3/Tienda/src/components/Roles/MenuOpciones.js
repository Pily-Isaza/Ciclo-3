import React from "react";
import { Link } from "react-router-dom";


export default function MenuOpciones({ nombreBoton, rutaEnviar }) {
  let botonNormal = "btn btn-success btn-block mb-2";
  let botonDanger = "btn btn-danger btn-block mb-2";
  return (
    <div className="dropdown text-center">
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        id="dropdownMenu2"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        opciones
      </button>
      <div
        className="dropdown-menu text-center p-2 rounded-lg"
        aria-labelledby="dropdownMenu2"
      >
        <Link to={rutaEnviar} className={botonNormal}>
          {nombreBoton}
        </Link>

        <a href="#!" className={botonDanger}>
          Eliminar
        </a>
      </div>
    </div>
  );
}
