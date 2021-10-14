import React from 'react'
import Tabla from 'components/ventas/Tabla'
import Buscar from 'components/ventas/Buscar';
import Formulario from 'components/ventas/Formulario';


const datosSimulados = [
    {
        "codigoVenta":"01",
        "fecha":'01/10/2021',
        "documentoCliente":'15621856',
        "nombreCliente":'Pepito Perez',
        "vendedor": "02",
        "valorTotal":"100000"
    },
    {

        "codigoVenta":"02",
        "fecha":'02/10/2021',
        "documentoCliente":'1356481',
        "nombreCliente":'Laura Martinez',
        "vendedor": "04",
        "valorTotal":"50000"
    },
    {

        "codigoVenta":"03",
        "fecha":'02/10/2021',
        "documentoCliente":'1102565846',
        "nombreCliente":'Carolina Rojas',
        "vendedor": "01",
        "valorTotal":"50000"
    },
    {

        "codigoVenta":"04",
        "fecha":'04/10/2021',
        "documentoCliente":'123567851',
        "nombreCliente":'Victor Munera',
        "vendedor": "01",
        "valorTotal":"50000"
    },
    {

        "codigoVenta":"05",
        "fecha":'05/10/2021',
        "documentoCliente":'71254561',
        "nombreCliente":'Mauricio Lopez',
        "vendedor": "03",
        "valorTotal":"100000"
    },
      
     {
        "codigoVenta":"06",
        "fecha":'05/10/2021',
        "documentoCliente":'156548556',
        "nombreCliente":'Camilo Builes',
        "vendedor": "02",
        "valorTotal":"100000"
    },
    {

        "codigoVenta":"07",
        "fecha":'06/10/2021',
        "documentoCliente":'1356481',
        "nombreCliente":'Laura Martinez',
        "vendedor": "04",
        "valorTotal":"50000"
    },
    {

        "codigoVenta":"08",
        "fecha":'06/10/2021',
        "documentoCliente":'1102565846',
        "nombreCliente":'Carolina Rojas',
        "vendedor": "01",
        "valorTotal":"50000"
    },
    {

        "codigoVenta":"09",
        "fecha":'07/10/2021',
        "documentoCliente":'123567851',
        "nombreCliente":'Victor Munera',
        "vendedor": "01",
        "valorTotal":"50000"
    },
    {

        "codigoVenta":"10",
        "fecha":'08/10/2021',
        "documentoCliente":'71254561',
        "nombreCliente":'Mauricio Lopez',
        "vendedor": "03",
        "valorTotal":"100000"
    },

     {
        "codigoVenta":"11",
        "fecha":'08/10/2021',
        "documentoCliente":'1562125856',
        "nombreCliente":'Jairo Perez',
        "vendedor": "02",
        "valorTotal":"100000"
    },
    {

        "codigoVenta":"12",
        "fecha":'08/10/2021',
        "documentoCliente":'1323556481',
        "nombreCliente":'Pedro Lopez',
        "vendedor": "04",
        "valorTotal":"50000"
    },
    {

        "codigoVenta":"13",
        "fecha":'09/10/2021',
        "documentoCliente":'11152565846',
        "nombreCliente":'Tatiana Rojas',
        "vendedor": "01",
        "valorTotal":"50000"
    },
    {

        "codigoVenta":"14",
        "fecha":'09/10/2021',
        "documentoCliente":'171567851',
        "nombreCliente":'Diana Munera',
        "vendedor": "01",
        "valorTotal":"50000"
    },
    {

        "codigoVenta":"15",
        "fecha":'09/10/2021',
        "documentoCliente":'941254561',
        "nombreCliente":'Mauricio Arroyave',
        "vendedor": "03",
        "valorTotal":"100000"
    },


];

const VentasBD = () => {
    return (
        <div>
            <div className='contenedor-padre'>
                <section className='contenedor-tabla'>
                    <div className='search search-sticky'>                    
                        <Buscar/>
                    </div>
                    <Tabla datos={datosSimulados}></Tabla>
                </section>
                <section className='contenedor-formulario'>
                    <Formulario/>
                </section>
            </div> 
        </div>
    )
}

export default VentasBD
