import React from "react";
import Card from "./Card";
import compras from "../assets/compras.jpg";
import users from "../assets/users.png";
import productos from "../assets/productos.jpg";

const cards = [
  {
    id: 1,
    title: "Ventas",
    image: compras,
    text: "Realizar tus pedidos de compra",
  },
  {
    id: 2,
    title: "Usuarios",
    image: users,
    text: "Administra la información y rol de los usuarios registrados en la página web",
  },
  {
    id: 3,
    title: "Productos",
    image: productos,
    text: "Visualiza los productos disponibles, podrás agregar, modificar o eliminar",
  },
];

function Cards() {
  return (
    <div className="container justify-content-center align-items-center dashboard-cards-container">
      <div className="row ">
        {cards.map((card) => (
          <div className="col-md-4 " key={card.id}>
            <Card
              title={card.title}
              imageSource={card.image}
              text={card.text}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
