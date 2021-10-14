import Basededatosventa from 'components/Ventas/Basededatosventa';
import React from 'react'
const datosSimulados = [
    {

        "codigoVenta":"01",
        "fecha":'01/10/2021',
        "documentoCliente":'15621856',
        "nombreCliente":'Pepito Perez',
        "vendedor": "02",
        "valorTotal":"100000",
        "codigoProducto":"101",
        "precioUnitario":'50000',
        "descripcion":'Miel de abejas - 750 gr',
        "cantidad":'2',
        "subtotal": "100000",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"02",
        "fecha":'02/10/2021',
        "documentoCliente":'1356481',
        "nombreCliente":'Laura Martinez',
        "vendedor": "04",
        "valorTotal":"50000",
        "codigoProducto":"101",
        "precioUnitario":'50000',
        "descripcion":'Miel de abejas - 750 gr',
        "cantidad":'1',
        "subtotal": "50000",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"03",
        "fecha":'02/10/2021',
        "documentoCliente":'1102565846',
        "nombreCliente":'Carolina Rojas',
        "vendedor": "01",
        "valorTotal":"50000",
        "codigoProducto":"603",
        "precioUnitario":'50000',
        "descripcion":'Chocolate granulado 250 gr',
        "cantidad":'1',
        "subtotal": "50000",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"04",
        "fecha":'04/10/2021',
        "documentoCliente":'123567851',
        "nombreCliente":'Victor Munera',
        "vendedor": "01",
        "valorTotal":"50000",
        "codigoProducto":"103",
        "precioUnitario":'50000',
        "descripcion":'Polen 250 gr',
        "cantidad":'1',
        "subtotal": "50000",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"05",
        "fecha":'05/10/2021',
        "documentoCliente":'71254561',
        "nombreCliente":'Mauricio Lopez',
        "vendedor": "03",
        "valorTotal":"100000",
        "codigoProducto":"101",
        "precioUnitario":'50000',
        "descripcion":'Miel de abejas - 750 gr',
        "cantidad":'2',
        "subtotal": "100000",
        "estado": "En proceso"
    },
];

const Ventadescripcion = () => {
    return (
        <>
            <div>

            </div>
            <div>
                <Basededatosventa datos={datosSimulados}/>
            </div>
        </>
    )
}

export default Ventadescripcion
