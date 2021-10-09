import React from 'react'

const Formulario = () => {
    return (
        <>
            <div>
                <form action="" className="form-registro-venta">
                    <div className="form-registro-venta_section-uno">
                        <h2>Registro de Ventas</h2>
                        <div className='form-registro-venta_section-uno_item-uno'>
                            <div className='form-registro-venta_section-uno_item-uno_section'>
                                <div>
                                    <label htmlFor="fecha" className='font-color' >fecha</label>
                                    <input type="date" id="fecha" name="fechaFactura" />
                                </div>
                                <div >
                                    <label className='font-color'  htmlFor="codigoFactura">Codigo</label>
                                    <input type="text" name="codigoFactura" id="codigoFactura" />
                                </div>
                            </div>
                            <div className='form-registro-venta_section-uno_item-dos_section'>
                                <div>
                                    <label className='font-color' htmlFor="cliente">Cliente</label>
                                    <input  type="text" id="cliente" name="nombreCliente" />
                                </div>
                                <div>
                                    <label className='font-color' htmlFor="documento">Documento</label>
                                    <input type="text" id="documento" name="documentoCliente" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="vendedor">Vendedor</label>
                            <select name="vendedor" id="vendedor" required>
                                <option value="">Elija un vendedor</option>
                                <option value="01">Pilar Isaza</option>
                                <option value="02">Cristhian Neiva</option>
                                <option value="03">Jessica Vasquez</option>
                                <option value="04">Dayana Carreño</option>
                            </select>
                        </div>
                    </div>



                    <div className="form-registro-venta_section-dos">
                        <div className="contenedor-venta-registrada">                            
                            <div className="form-registro-venta_section-dos_item-uno">
                                <div >
                                    <label htmlFor="codigoProducto">Codigo producto</label>
                                    <input type="number" id="codigoProducto" name="codigoProducto " className='input-small'/>
                                </div>
                                <div>
                                    <label htmlFor="cantidadProducto">Cantidad</label>
                                    <input type="number" id="cantidadProducto" name="cantidadProducto"
                                    className='input-small'/>
                                </div>
                            </div>


                            <div className="form-registro-venta_section-dos_item-dos">
                                <div className='form-registro-venta_section-dos_item-dos_item'>
                                    <label htmlFor="descripcionProducto">Descripcion</label>
                                    <input type="text" id="descripcionProducto" name="descripcionProducto" disabled/>
                                </div>
                                <div className='form-registro-venta_section-dos_item-dos_item'>
                                    <label htmlFor="precioProducto" disabled>Precio Unitario</label>
                                    <input type="number" id="precioProducto" name="precioProducto" disabled placeholder='000000' className='input-small'/>
                                </div>
                                <div className='form-registro-venta_section-dos_item-dos_item'>
                                    <label htmlFor="subtotal">Subtotal</label>
                                    <input type="number" id="subtotal" name="subtotal" disabled placeholder='000000' className='input-small'/>
                                </div>       
                                <button className="button-agregar">agregar</button>                   
                            </div>
                        </div>
  
                    <div className="contenedor-venta-registrada">                            
                            <div className="form-registro-venta_section-dos_item-uno">
                                <div >
                                    <label htmlFor="codigoProducto">Codigo producto</label>
                                    <input type="number" id="codigoProducto" name="codigoProducto " className='input-small'/>
                                </div>
                                <div>
                                    <label htmlFor="cantidadProducto">Cantidad</label>
                                    <input type="number" id="cantidadProducto" name="cantidadProducto"
                                    className='input-small'/>
                                </div>
                            </div>


                            <div className="form-registro-venta_section-dos_item-dos">
                                <div className='form-registro-venta_section-dos_item-dos_item'>
                                    <label htmlFor="descripcionProducto">Descripcion</label>
                                    <input type="text" id="descripcionProducto" name="descripcionProducto" disabled/>
                                </div>
                                <div className='form-registro-venta_section-dos_item-dos_item'>
                                    <label htmlFor="precioProducto" disabled>Precio Unitario</label>
                                    <input type="number" id="precioProducto" name="precioProducto" disabled placeholder='000000' className='input-small'/>
                                </div>
                                <div className='form-registro-venta_section-dos_item-dos_item'>
                                    <label htmlFor="subtotal">Subtotal</label>
                                    <input type="number" id="subtotal" name="subtotal" disabled placeholder='000000' className='input-small'/>
                                </div>       
                                <button className="button-agregar">agregar</button>                   
                            </div>
                        </div>
                        <div className="contenedor-venta-registrada">                            
                            <div className="form-registro-venta_section-dos_item-uno">
                                <div >
                                    <label htmlFor="codigoProducto">Codigo producto</label>
                                    <input type="number" id="codigoProducto" name="codigoProducto " className='input-small'/>
                                </div>
                                <div>
                                    <label htmlFor="cantidadProducto">Cantidad</label>
                                    <input type="number" id="cantidadProducto" name="cantidadProducto"
                                    className='input-small'/>
                                </div>
                            </div>


                            <div className="form-registro-venta_section-dos_item-dos">
                                <div className='form-registro-venta_section-dos_item-dos_item'>
                                    <label htmlFor="descripcionProducto">Descripcion</label>
                                    <input type="text" id="descripcionProducto" name="descripcionProducto" disabled/>
                                </div>
                                <div className='form-registro-venta_section-dos_item-dos_item'>
                                    <label htmlFor="precioProducto" disabled>Precio Unitario</label>
                                    <input type="number" id="precioProducto" name="precioProducto" disabled placeholder='000000' className='input-small'/>
                                </div>
                                <div className='form-registro-venta_section-dos_item-dos_item'>
                                    <label htmlFor="subtotal">Subtotal</label>
                                    <input type="number" id="subtotal" name="subtotal" disabled placeholder='000000' className='input-small'/>
                                </div>       
                                <button className="button-agregar">agregar</button>                   
                            </div>
                        </div>
                        <div className="contenedor-venta-registrada">                            
                            <div className="form-registro-venta_section-dos_item-uno">
                                <div >
                                    <label htmlFor="codigoProducto">Codigo producto</label>
                                    <input type="number" id="codigoProducto" name="codigoProducto " className='input-small'/>
                                </div>
                                <div>
                                    <label htmlFor="cantidadProducto">Cantidad</label>
                                    <input type="number" id="cantidadProducto" name="cantidadProducto"
                                    className='input-small'/>
                                </div>
                            </div>


                            <div className="form-registro-venta_section-dos_item-dos">
                                <div className='form-registro-venta_section-dos_item-dos_item'>
                                    <label htmlFor="descripcionProducto">Descripcion</label>
                                    <input type="text" id="descripcionProducto" name="descripcionProducto" disabled/>
                                </div>
                                <div className='form-registro-venta_section-dos_item-dos_item'>
                                    <label htmlFor="precioProducto" disabled>Precio Unitario</label>
                                    <input type="number" id="precioProducto" name="precioProducto" disabled placeholder='000000' className='input-small'/>
                                </div>
                                <div className='form-registro-venta_section-dos_item-dos_item'>
                                    <label htmlFor="subtotal">Subtotal</label>
                                    <input type="number" id="subtotal" name="subtotal" disabled placeholder='000000' className='input-small'/>
                                </div>       
                                <button className="button-agregar">agregar</button>                   
                            </div>
                        </div>
                        <div className="contenedor-venta-registrada">                            
                            <div className="form-registro-venta_section-dos_item-uno">
                                <div >
                                    <label htmlFor="codigoProducto">Codigo producto</label>
                                    <input type="number" id="codigoProducto" name="codigoProducto " className='input-small'/>
                                </div>
                                <div>
                                    <label htmlFor="cantidadProducto">Cantidad</label>
                                    <input type="number" id="cantidadProducto" name="cantidadProducto"
                                    className='input-small'/>
                                </div>
                            </div>


                            <div className="form-registro-venta_section-dos_item-dos">
                                <div className='form-registro-venta_section-dos_item-dos_item'>
                                    <label htmlFor="descripcionProducto">Descripcion</label>
                                    <input type="text" id="descripcionProducto" name="descripcionProducto" disabled/>
                                </div>
                                <div className='form-registro-venta_section-dos_item-dos_item'>
                                    <label htmlFor="precioProducto" disabled>Precio Unitario</label>
                                    <input type="number" id="precioProducto" name="precioProducto" disabled placeholder='000000' className='input-small'/>
                                </div>
                                <div className='form-registro-venta_section-dos_item-dos_item'>
                                    <label htmlFor="subtotal">Subtotal</label>
                                    <input type="number" id="subtotal" name="subtotal" disabled placeholder='000000' className='input-small'/>
                                </div>       
                                <button className="button-agregar">agregar</button>                   
                            </div>
                        </div>
                        <div className="contenedor-venta-registrada">                            
                            <div className="form-registro-venta_section-dos_item-uno">
                                <div >
                                    <label htmlFor="codigoProducto">Codigo producto</label>
                                    <input type="number" id="codigoProducto" name="codigoProducto " className='input-small'/>
                                </div>
                                <div>
                                    <label htmlFor="cantidadProducto">Cantidad</label>
                                    <input type="number" id="cantidadProducto" name="cantidadProducto"
                                    className='input-small'/>
                                </div>
                            </div>


                            <div className="form-registro-venta_section-dos_item-dos">
                                <div className='form-registro-venta_section-dos_item-dos_item'>
                                    <label htmlFor="descripcionProducto">Descripcion</label>
                                    <input type="text" id="descripcionProducto" name="descripcionProducto" disabled/>
                                </div>
                                <div className='form-registro-venta_section-dos_item-dos_item'>
                                    <label htmlFor="precioProducto" disabled>Precio Unitario</label>
                                    <input type="number" id="precioProducto" name="precioProducto" disabled placeholder='000000' className='input-small'/>
                                </div>
                                <div className='form-registro-venta_section-dos_item-dos_item'>
                                    <label htmlFor="subtotal">Subtotal</label>
                                    <input type="number" id="subtotal" name="subtotal" disabled placeholder='000000' className='input-small'/>
                                </div>       
                                <button className="button-agregar">agregar</button>                   
                            </div>
                        </div>
                        <div className="contenedor-venta-registrada">                            
                            <div className="form-registro-venta_section-dos_item-uno">
                                <div >
                                    <label htmlFor="codigoProducto">Codigo producto</label>
                                    <input type="number" id="codigoProducto" name="codigoProducto " className='input-small'/>
                                </div>
                                <div>
                                    <label htmlFor="cantidadProducto">Cantidad</label>
                                    <input type="number" id="cantidadProducto" name="cantidadProducto"
                                    className='input-small'/>
                                </div>
                            </div>


                            <div className="form-registro-venta_section-dos_item-dos">
                                <div className='form-registro-venta_section-dos_item-dos_item'>
                                    <label htmlFor="descripcionProducto">Descripcion</label>
                                    <input type="text" id="descripcionProducto" name="descripcionProducto" disabled/>
                                </div>
                                <div className='form-registro-venta_section-dos_item-dos_item'>
                                    <label htmlFor="precioProducto" disabled>Precio Unitario</label>
                                    <input type="number" id="precioProducto" name="precioProducto" disabled placeholder='000000' className='input-small'/>
                                </div>
                                <div className='form-registro-venta_section-dos_item-dos_item'>
                                    <label htmlFor="subtotal">Subtotal</label>
                                    <input type="number" id="subtotal" name="subtotal" disabled placeholder='000000' className='input-small'/>
                                </div>       
                                <button className="button-agregar">agregar</button>                   
                            </div>
                        </div>
                        <div className="contenedor-venta-registrada">                            
                            <div className="form-registro-venta_section-dos_item-uno">
                                <div >
                                    <label htmlFor="codigoProducto">Codigo producto</label>
                                    <input type="number" id="codigoProducto" name="codigoProducto " className='input-small'/>
                                </div>
                                <div>
                                    <label htmlFor="cantidadProducto">Cantidad</label>
                                    <input type="number" id="cantidadProducto" name="cantidadProducto"
                                    className='input-small'/>
                                </div>
                            </div>


                            <div className="form-registro-venta_section-dos_item-dos">
                                <div className='form-registro-venta_section-dos_item-dos_item'>
                                    <label htmlFor="descripcionProducto">Descripcion</label>
                                    <input type="text" id="descripcionProducto" name="descripcionProducto" disabled/>
                                </div>
                                <div className='form-registro-venta_section-dos_item-dos_item'>
                                    <label htmlFor="precioProducto" disabled>Precio Unitario</label>
                                    <input type="number" id="precioProducto" name="precioProducto" disabled placeholder='000000' className='input-small'/>
                                </div>
                                <div className='form-registro-venta_section-dos_item-dos_item'>
                                    <label htmlFor="subtotal">Subtotal</label>
                                    <input type="number" id="subtotal" name="subtotal" disabled placeholder='000000' className='input-small'/>
                                </div>       
                                <button className="button-agregar">agregar</button>                   
                            </div>
                        </div>
                        <div className="contenedor-venta-registrada">                            
                            <div className="form-registro-venta_section-dos_item-uno">
                                <div >
                                    <label htmlFor="codigoProducto">Codigo producto</label>
                                    <input type="number" id="codigoProducto" name="codigoProducto " className='input-small'/>
                                </div>
                                <div>
                                    <label htmlFor="cantidadProducto">Cantidad</label>
                                    <input type="number" id="cantidadProducto" name="cantidadProducto"
                                    className='input-small'/>
                                </div>
                            </div>


                            <div className="form-registro-venta_section-dos_item-dos">
                                <div className='form-registro-venta_section-dos_item-dos_item'>
                                    <label htmlFor="descripcionProducto">Descripcion</label>
                                    <input type="text" id="descripcionProducto" name="descripcionProducto" disabled/>
                                </div>
                                <div className='form-registro-venta_section-dos_item-dos_item'>
                                    <label htmlFor="precioProducto" disabled>Precio Unitario</label>
                                    <input type="number" id="precioProducto" name="precioProducto" disabled placeholder='000000' className='input-small'/>
                                </div>
                                <div className='form-registro-venta_section-dos_item-dos_item'>
                                    <label htmlFor="subtotal">Subtotal</label>
                                    <input type="number" id="subtotal" name="subtotal" disabled placeholder='000000' className='input-small'/>
                                </div>       
                                <button className="button-agregar">agregar</button>                   
                            </div>
                        </div>
                        <div className="contenedor-venta-registrada">                            
                            <div className="form-registro-venta_section-dos_item-uno">
                                <div >
                                    <label htmlFor="codigoProducto">Codigo producto</label>
                                    <input type="number" id="codigoProducto" name="codigoProducto " className='input-small'/>
                                </div>
                                <div>
                                    <label htmlFor="cantidadProducto">Cantidad</label>
                                    <input type="number" id="cantidadProducto" name="cantidadProducto"
                                    className='input-small'/>
                                </div>
                            </div>


                            <div className="form-registro-venta_section-dos_item-dos">
                                <div className='form-registro-venta_section-dos_item-dos_item'>
                                    <label htmlFor="descripcionProducto">Descripcion</label>
                                    <input type="text" id="descripcionProducto" name="descripcionProducto" disabled/>
                                </div>
                                <div className='form-registro-venta_section-dos_item-dos_item'>
                                    <label htmlFor="precioProducto" disabled>Precio Unitario</label>
                                    <input type="number" id="precioProducto" name="precioProducto" disabled placeholder='000000' className='input-small'/>
                                </div>
                                <div className='form-registro-venta_section-dos_item-dos_item'>
                                    <label htmlFor="subtotal">Subtotal</label>
                                    <input type="number" id="subtotal" name="subtotal" disabled placeholder='000000' className='input-small'/>
                                </div>       
                                <button className="button-agregar">agregar</button>                   
                            </div>
                        </div>
                        <div className="contenedor-venta-registrada">                            
                            <div className="form-registro-venta_section-dos_item-uno">
                                <div >
                                    <label htmlFor="codigoProducto">Codigo producto</label>
                                    <input type="number" id="codigoProducto" name="codigoProducto " className='input-small'/>
                                </div>
                                <div>
                                    <label htmlFor="cantidadProducto">Cantidad</label>
                                    <input type="number" id="cantidadProducto" name="cantidadProducto"
                                    className='input-small'/>
                                </div>
                            </div>


                            <div className="form-registro-venta_section-dos_item-dos">
                                <div className='form-registro-venta_section-dos_item-dos_item'>
                                    <label htmlFor="descripcionProducto">Descripcion</label>
                                    <input type="text" id="descripcionProducto" name="descripcionProducto" disabled/>
                                </div>
                                <div className='form-registro-venta_section-dos_item-dos_item'>
                                    <label htmlFor="precioProducto" disabled>Precio Unitario</label>
                                    <input type="number" id="precioProducto" name="precioProducto" disabled placeholder='000000' className='input-small'/>
                                </div>
                                <div className='form-registro-venta_section-dos_item-dos_item'>
                                    <label htmlFor="subtotal">Subtotal</label>
                                    <input type="number" id="subtotal" name="subtotal" disabled placeholder='000000' className='input-small'/>
                                </div>       
                                <button className="button-agregar">agregar</button>                   
                            </div>
                        </div>
                        <div className="contenedor-venta-registrada">                            
                            <div className="form-registro-venta_section-dos_item-uno">
                                <div >
                                    <label htmlFor="codigoProducto">Codigo producto</label>
                                    <input type="number" id="codigoProducto" name="codigoProducto " className='input-small'/>
                                </div>
                                <div>
                                    <label htmlFor="cantidadProducto">Cantidad</label>
                                    <input type="number" id="cantidadProducto" name="cantidadProducto"
                                    className='input-small'/>
                                </div>
                            </div>


                            <div className="form-registro-venta_section-dos_item-dos">
                                <div className='form-registro-venta_section-dos_item-dos_item'>
                                    <label htmlFor="descripcionProducto">Descripcion</label>
                                    <input type="text" id="descripcionProducto" name="descripcionProducto" disabled/>
                                </div>
                                <div className='form-registro-venta_section-dos_item-dos_item'>
                                    <label htmlFor="precioProducto" disabled>Precio Unitario</label>
                                    <input type="number" id="precioProducto" name="precioProducto" disabled placeholder='000000' className='input-small'/>
                                </div>
                                <div className='form-registro-venta_section-dos_item-dos_item'>
                                    <label htmlFor="subtotal">Subtotal</label>
                                    <input type="number" id="subtotal" name="subtotal" disabled placeholder='000000' className='input-small'/>
                                </div>       
                                <button className="button-agregar">agregar</button>                   
                            </div>
                        </div>

                    {/* ************************************************* */}
                    </div>
                    <div className='form-registro-venta_section-tres'>
                        <div className="form-registro-venta-total">
                            <div className="form-registro-venta_section">
                                <label htmlFor="totalCompra">Total</label>
                                <input type="number" disabled placeholder="000000" id="totalCompra" name="totalCompra" />
                            </div>
                        </div>


                        <div className="form-registro-venta-buttons">
                            <div>
                                <button type="reset">Cancelar</button>
                                <button type="submit">Finalizar</button>
                            </div>
                        </div>
                    </div>






                </form>
            </div>
        </>
    )
}

export default Formulario
