import React, { useState, useEffect } from 'react'

export default function DetallesFabricantes() {
  const [fabricantes, setFabricantes] = useState([]) // Lista de fabricantes
  const [productos, setProductos] = useState([]) // Productos del fabricante seleccionado
  const [componentes, setComponentes] = useState([]) // Componentes del producto seleccionado
  const [fabricanteSeleccionado, setFabricanteSeleccionado] = useState(null) // Fabricante seleccionado
  const [productoSeleccionado, setProductoSeleccionado] = useState(null) // Producto seleccionado

  // Obtener todos los fabricantes desde la API
  const obtenerFabricantes = async () => {
    try {
      const response = await fetch('http://localhost:5000/fabricantes/')
      const datos = await response.json()
      setFabricantes(datos)
    } catch (error) {
      console.error('Error al obtener fabricantes:', error)
    }
  }

  // Obtener productos de un fabricante específico
  const obtenerProductosFabricante = async (idFabricante) => {
    try {
      const response = await fetch(`http://localhost:5000/fabricantes/${idFabricante}/productos`)
      const datos = await response.json()
      setProductos(datos.Productos) // Guardar los productos
      setFabricanteSeleccionado(idFabricante) // Guardar el fabricante seleccionado
      setComponentes([]) // Limpiar componentes al cambiar de fabricante
      setProductoSeleccionado(null) // Limpiar producto seleccionado
    } catch (error) {
      console.error('Error al obtener productos del fabricante:', error)
    }
  }

  // Obtener componentes de un producto específico
  const obtenerComponentesProducto = async (idProducto) => {
    try {
      const response = await fetch(`http://localhost:5000/productos/${idProducto}/componentes`)
      const datos = await response.json()
      setComponentes(datos.Componentes) // Guardar los componentes
      setProductoSeleccionado(idProducto) // Guardar el producto seleccionado
    } catch (error) {
      console.error('Error al obtener componentes del producto:', error)
    }
  }

  // Cargar fabricantes al montar el componente
  useEffect(() => {
    obtenerFabricantes()
  }, [])

  return (
    <div className="container mt-5">
      <h1>Fabricantes</h1>
      <ul className="list-group">
        {fabricantes.map((fabricante) => (
          <li
            key={fabricante.id}
            className={`list-group-item ${
              fabricanteSeleccionado === fabricante.id ? 'active' : ''
            }`}
            onClick={() => obtenerProductosFabricante(fabricante.id)}
            style={{ cursor: 'pointer' }}
          >
            {fabricante.nombre}
          </li>
        ))}
      </ul>

      {fabricanteSeleccionado && (
        <div className="detalles-container">
          <h2>Productos del fabricante</h2>
          {productos.length > 0 ? (
            <ul className="list-group">
              {productos.map((producto) => (
                <li
                  key={producto.id}
                  className={`list-group-item ${
                    productoSeleccionado === producto.id ? 'active' : ''
                  }`}
                  onClick={() => obtenerComponentesProducto(producto.id)}
                  style={{ cursor: 'pointer' }}
                >
                  {producto.nombre} - ${producto.precio}
                </li>
              ))}
            </ul>
          ) : (
            <p>Este fabricante no tiene productos.</p>
          )}

          {productoSeleccionado && (
            <>
              <h2>Componentes del producto</h2>
              {componentes.length > 0 ? (
                <ul className="list-group">
                  {componentes.map((componente) => (
                    <li key={componente.id} className="list-group-item">
                      <strong>{componente.nombre}</strong>: {componente.descripcion}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Este producto no tiene componentes.</p>
              )}
            </>
          )}
        </div>
      )}
    </div>
  )
}
