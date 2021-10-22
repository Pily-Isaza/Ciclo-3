import React from "react";
import logoTienda from "assets/logotienda.jpg";

const index = () => {
  return (
    <div className="containerIndexPrincipal">
      <h1 className='tituloUno'>Tienda Newbies</h1>
      <h1 className='tituloUno'>Vida natural y saludable</h1>
      <img className='imagenPagPrincipal' src={logoTienda} alt="" />
    </div>
  );
};

export default index;
