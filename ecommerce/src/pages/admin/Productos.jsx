import React, { useEffect, useState } from 'react';


const productosBackend = [
  {
    nombre: 'Galleta',
    codigo: '01',
    precio: 3500,
  },
  {
    nombre: 'Torta',
    codigo: '02',
    precio: 70000,
  },
  {
    nombre: 'Pan',
    codigo: '03',
    precio: 12000,
  },
  {
    nombre: 'Pastel',
    codigo: '04',
    precio: 5000,
  },
  {
    nombre: 'Chocolate',
    codigo: '05',
    precio: 2500,
  },
  {
    nombre: 'Pastel',
    codigo: '04',
    precio: 5000,
  },
  {
    nombre: 'Torta',
    codigo: '02',
    precio: 70000,
  },
];

    //obtener lista de productos desde el backend
    if (mostrarTabla) {
      obtenerProductos();
    }
  }, [mostrarTabla]);

  useEffect(() => {
    if (mostrarTabla) {
      setTextoBoton('Crear Nuevo Producto');
      setColorBoton('indigo');
    } else {
      setTextoBoton('Mostrar Todos los productos);
      setColorBoton('green');
    }
  }, [mostrarTabla]);


const TablaProductos = ({ listaProductos }) => {
  useEffect(() => {
    console.log('este es el listado de Productos en el componente de tabla', listaProductos);
  }, [listaProductos]);
  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-2xl font-extrabold text-gray-800'>Todos los productos</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre del producto</th>
            <th>Codigo del producto</th>
            <th>Precio del producto</th>
          </tr>
        </thead>
        <tbody>
          {listaProductos.map((producto) => {
            return (
              <tr>
                <td>{producto.name}</td>
                <td>{producto.codigo}</td>
                <td>{producto.precio}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const FormularioCreacionProductos = ({ setMostrarTabla, listaProductos, setProductos }) => {
  const form = useRef(null);

  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevoProducto = {};
    fd.forEach((value, key) => {
      nuevoProducto[key] = value;
    });

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success('producto agregado con éxito');
      })
      .catch(function (error) {
        console.error(error);
        toast.error('Error creando un producto');
      });

    setMostrarTabla(true);
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-2xl font-extrabold text-gray-800'>Crear nuevo producto</h2>
      <form ref={form} onSubmit={submitForm} className='flex flex-col'>
        <label className='flex flex-col' htmlFor='nombre'>
          Nombre del producto
          <input
            name='name'
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            type='text'
            placeholder='Galleta'
            required
          />
        </label>
        <label className='flex flex-col' htmlFor='codigo'>
          Codigo del producto
          <select
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            name='codigo'
            required
            defaultValue={0}
          >
            <option disabled value={0}>
              Seleccione una opción
            </option>
            <option>Galleta</option>
            <option>Torta</option>
            <option>Pan</option>
            <option>Pastel</option>
            <option>Chocolate</option>
          </select>
        </label>
        <label className='flex flex-col' htmlFor='precio'>
          Precio del producto
          <input
            name='precio'
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            type='number'
            min={100}
            max={100000}
            placeholder='20000'
            required
          />
        </label>

        <button
          type='submit'
          className='col-span-2 bg-green-400 p-2 rounded-full shadow-md hover:bg-green-600 text-white'
        >
          Guardar producto
        </button>
      </form>
    </div>
  );
};

export default Productos;
