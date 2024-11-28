import React, { useState } from 'react'

export default function Carrito({ productos }) {
  // Estado para almacenar las cantidades de productos en el carrito
  const [carrito, setCarrito] = useState({})

  // Función para incrementar la cantidad de un producto en el carrito
  const incrementarCantidad = (id) => {
    setCarrito((prevCarrito) => ({
      ...prevCarrito, // Mantiene los productos existentes en el carrito
      [id]: (prevCarrito[id] || 0) + 1, // Incrementa en 1 la cantidad del producto especificado
    }))
  }

  // Función para decrementar la cantidad de un producto en el carrito
  const decrementarCantidad = (id) => {
    setCarrito((prevCarrito) => ({
      ...prevCarrito, // Mantiene los productos existentes en el carrito
      [id]: Math.max((prevCarrito[id] || 0) - 1, 0), // Decrementa en 1 la cantidad, pero no permite valores negativos
    }))
  }

  // Función para calcular el precio total del carrito
  const calcularTotal = () => {
    return productos.reduce((total, producto) => {
      const cantidad = carrito[producto.id] || 0 // Obtiene la cantidad del producto en el carrito (o 0 si no está agregado)
      return total + cantidad * producto.precio // Suma el precio total del producto al acumulador
    }, 0) // Inicia el total en 0
  }

  return (
    <div className="container mt-5">
      {/* Mostrar el precio total calculado */}
      <div className="text-end mt-4">
        <h4>Total: ${calcularTotal()}</h4>
      </div>

      {/* Título del carrito */}
      <h1 className="text-center mb-4">Carrito de Compras</h1>

      {/* Lista de productos mostrados en formato de tarjetas */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {productos.map((producto) => (
          <div className="col" key={producto.id}>
            <div className="card h-100">
              {/* Imagen del producto */}
              <img
                src={`/${producto.pathImg}`} // Ruta de la imagen del producto
                className="card-img-top"
                alt={producto.nombre} // Texto alternativo
                style={{ height: '200px', objectFit: 'cover' }} // Ajusta la imagen al tamaño sin deformarla
              />
              {/* Detalles del producto */}
              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5> {/* Nombre del producto */}
                <p className="card-text">{producto.descripcion}</p> {/* Descripción del producto */}
                <p className="text-muted">Precio: ${producto.precio}</p> {/* Precio del producto */}
              </div>
              {/* Controles para incrementar y decrementar la cantidad */}
              <div className="card-footer d-flex justify-content-between align-items-center">
                {/* Botón para decrementar la cantidad */}
                <button
                  className="btn btn-outline-danger"
                  onClick={() => decrementarCantidad(producto.id)} // Llama a la función para decrementar
                >
                  -
                </button>
                {/* Muestra la cantidad actual del producto en el carrito */}
                <span className="fw-bold">{carrito[producto.id] || 0}</span>
                {/* Botón para incrementar la cantidad */}
                <button
                  className="btn btn-outline-success"
                  onClick={() => incrementarCantidad(producto.id)} // Llama a la función para incrementar
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
