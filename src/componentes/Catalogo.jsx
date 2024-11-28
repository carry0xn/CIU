import React, { useState, useEffect } from 'react'
import { getProductos } from './Api' // Hook personalizado

export default function Carrito() {
  const [productos, setProductos] = useState([]) // Estado para los productos
  const [carrito, setCarrito] = useState({}) // Estado para las cantidades
  const [productoSeleccionado, setProductoSeleccionado] = useState(null) // Estado para el producto seleccionado

  // Cargar los productos desde la API
  useEffect(() => {
    const fetchProductos = async () => {
      const productosData = await getProductos()
      setProductos(productosData)
    }
    
    fetchProductos()
  }, []) // El array vacío asegura que esto se ejecute solo una vez al montar el componente

  // Función para incrementar la cantidad de un producto en el carrito
  const incrementarCantidad = (id) => {
    setCarrito((prevCarrito) => ({
      ...prevCarrito, // Copia el estado actual del carrito
      [id]: (prevCarrito[id] || 0) + 1,
    }))
  }

  // Función para decrementar la cantidad de un producto en el carrito
  const decrementarCantidad = (id) => {
    setCarrito((prevCarrito) => ({
      ...prevCarrito,
      [id]: Math.max((prevCarrito[id] || 0) - 1, 0),
    }))
  }

  // Función para calcular el precio total del carrito
  const calcularTotal = () => {
    return productos.reduce((total, producto) => {
      const cantidad = carrito[producto.id] || 0
      return total + cantidad * producto.precio
    }, 0)
  }

  // Función para manejar el clic en un producto y mostrar sus detalles
  const verDetallesProducto = (producto) => {
    setProductoSeleccionado(producto)
  }

  return (
    <div className="container mt-5">
      {/* Mostrar el precio total calculado */}
      <div className="text-end mt-4">
        <h4>Total: ${calcularTotal()}</h4>
      </div>

      {/* Mostrar detalles del producto seleccionado */}
      {productoSeleccionado && (
        <div className="card mb-4">
          <div className="card-header">
            <h5>Detalles del Producto</h5>
            <button
              className="btn btn-sm btn-secondary float-end"
              onClick={() => setProductoSeleccionado(null)}
            >
              Cerrar
            </button>
          </div>
          <div className="card-body">
            <h5>{productoSeleccionado.nombre}</h5>
            <p>{productoSeleccionado.descripcion}</p>
            <p>Precio: ${productoSeleccionado.precio}</p>
          </div>
        </div>
      )}

      {/* Título del carrito */}
      <h1 className="text-center mb-4">Catálogo</h1>

      {/* Lista de productos mostrados en formato de tarjetas */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {productos.map((producto) => (
          <div className="col" key={producto.id}>
            <div
              className="card h-100"
              onClick={() => verDetallesProducto(producto)}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={`/${producto.pathImg}`}
                className="card-img-top"
                alt={producto.nombre}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
              </div>
              <div className="card-footer d-flex justify-content-between align-items-center">
                <button
                  className="btn btn-outline-danger"
                  onClick={(e) => {
                    // Asegura que solo cargue el producto que queremos y no los demas
                    e.stopPropagation()
                    decrementarCantidad(producto.id)
                  }}
                >
                  -
                </button>
                <span className="fw-bold">{carrito[producto.id] || 0}</span>
                <button
                  className="btn btn-outline-success"
                  onClick={(e) => {
                    e.stopPropagation()
                    incrementarCantidad(producto.id)
                  }}
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
