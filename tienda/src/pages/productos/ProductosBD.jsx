import React from 'react'
import "styles/pages/productos/ProductosBD.css"
import { Link } from 'react-router-dom';

const ProductosBD = () => {
    return (
    <div>
        <h2 className="titulo1">Base de datos productos</h2>
        <main>
            <section className="buscador">
                <Link to= '/productoNuevo'>
                <button className="btn btn-primary " type="submit">Nuevo</button>
                </Link>
                <select name="busqueda-producto" id="producto">
                <option value="id">ID</option>
                <option value="nombre">Descripción</option>
                </select>
            <input type="text" placeholder="Buscar..."/>
            <button class="btn btn-primary col-2" type="submit">Buscar</button>
    
            </section>

            <section className="tabla-productos">
            <table className="table table-striped ">
                <thead className="thead-dark">
                    <th className="col-1">ID Producto</th>
                    <th className="col-2">Descripción</th>
                    <th className="col-2">Valor Unitario</th>
                    <th className="col-2">Estado</th>
                    <th className="col-1">Opciones</th>
                </thead>
    
            <tbody>
                <tr>
                    <td>101</td>
                    <td>Miel de abejas - 750 gr</td>
                    <td>$ 50.000</td>
                    <td>Disponible</td>
                    <td>
                    <div className="dropdown text-center">
                    <Link to= '/productoNuevo'>
                        <button className="btn-primary" type="submit">Actualizar</button> 
                    </Link>
                    </div>
                    </td>   
                </tr>
                <tr>
                    <td>102</td>
                    <td>Miel de abejas - 500 gr</td>
                    <td>$ 35.000</td>
                    <td>Disponible</td>
                    <td>
                    <div class="dropdown text-center">
                    <Link to= '/nuevosProductos'>
                        <button className="btn-primary" type="submit">Actualizar</button> 
                    </Link>                                   
                    </div>
                    </td>   
                </tr>
                <tr>
                    <td>103</td>
                    <td>Polen - 250 gr</td>
                    <td>$ 45.000</td>
                    <td>No Disponible</td>
                    <td>
                    <div className="dropdown text-center">
                    <Link to= '/nuevosProductos'>
                        <button className="btn-primary" type="submit">Actualizar</button> 
                    </Link>                                  
                    </div>
                    </td>   
                </tr>
                <tr>
                    <td>603</td>
                    <td>Chocolate granulado - 250 gr</td>
                    <td>$ 50.000</td>
                    <td>No Disponible</td>
                    <td>
                    <div className="dropdown text-center">
                    <Link to= '/nuevosProductos'>
                        <button className="btn-primary" type="submit">Actualizar</button> 
                    </Link>                                  
                    </div>
                    </td>   
                </tr>                      
            </tbody>
            </table>
            </section>
        </main>
        </div>
    )
}

export default ProductosBD
