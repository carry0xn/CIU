import React, { useState } from 'react'

export default function Carrito({ productos }) {
  const [carrito, setCarrito] = useState({})

  // Manejar incremento de cantidad
  const incrementarCantidad = (id) => {
    setCarrito((prevCarrito) => ({
      ...prevCarrito,
      [id]: (prevCarrito[id] || 0) + 1,
    }))
  }

  // Manejar decremento de cantidad
  const decrementarCantidad = (id) => {
    setCarrito((prevCarrito) => ({
      ...prevCarrito,
      [id]: Math.max((prevCarrito[id] || 0) - 1, 0),
    }))
  }

  // Calcular el precio total
  const calcularTotal = () => {
    return productos.reduce((total, producto) => {
      const cantidad = carrito[producto.id] || 0;
      return total + cantidad * producto.precio;
    }, 0)
  }

  return (
    <div className="container mt-5">
        <div className="text-end mt-4">
        <h4>Total: ${calcularTotal()}</h4>
      </div>
      <h1 className="text-center mb-4">Carrito de Compras</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {productos.map((producto) => (
          <div className="col" key={producto.id}>
            <div className="card h-100">
              <img
                src={`/${producto.pathImg}`}
                className="card-img-top"
                alt={producto.nombre}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">{producto.descripcion}</p>
                <p className="text-muted">Precio: ${producto.precio}</p>
              </div>
              <div className="card-footer d-flex justify-content-between align-items-center">
                <button
                  className="btn btn-outline-danger"
                  onClick={() => decrementarCantidad(producto.id)}
                >
                  -
                </button>
                <span className="fw-bold">{carrito[producto.id] || 0}</span>
                <button
                  className="btn btn-outline-success"
                  onClick={() => incrementarCantidad(producto.id)}
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
