import React from 'react'

const Basededatosventa = ({ datos }) => {
    return (
        <div>
            <div className="contenedor">
                <div className="item">
                    <label htmlFor="">Estado</label>
                    <label htmlFor="">En proceso</label>
                </div>
                <div className="item">
                    <label htmlFor="">Codigo venta</label>
                    <label htmlFor="">01</label>
                </div>
                <div className="item">
                    <label htmlFor="">Fecha</label>
                    <label htmlFor="">01/10/2021</label>
                </div>
                <div className="item">
                    <label htmlFor="">Documento cliente</label>
                    <label htmlFor="">71285642</label>
                </div>
                <div className="item">
                    <label htmlFor="">Nombre Cliente</label>
                    <label htmlFor="">Pepito Perez</label>
                </div>
                <div className="item">
                    <label htmlFor="">Vendedor</label>
                    <label htmlFor="">01</label>
                </div>
                <div className="item">
                    <label htmlFor="">Valor total</label>
                    <label htmlFor="">100000</label>
                </div>
            </div>
            <table class="table">
                <thead class="table-dark">
                    <tr>
                        <td>codigo</td>
                        <td>Precio unitario</td>
                        <td>Descripcion</td>
                        <td>Cantidad</td>
                        <td>Subtotal</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        datos.map((dato) => {
                            return (
                                <tr>
                                    <td>{dato.codigoProducto}</td>
                                    <td>{dato.precioUnitario}</td>
                                    <td>{dato.descripcion}</td>
                                    <td>{dato.cantidad}</td>
                                    <td>{dato.subtotal}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className='contenedor-padre-botones'>
                <div className='contenedor-botones'>
                    <button>Cancelar</button>
                    <button>Editar</button>                    
                </div>
            </div>
        </div>
    )
}

export default Basededatosventa
