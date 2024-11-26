import React, { useState, useEffect } from 'react'

export default function DetallesFabricantes() {
  const [fabricantes, setFabricantes] = useState([]) // Lista de fabricantes
  const [productos, setProductos] = useState([]) // Productos del fabricante seleccionado
  const [fabricanteSeleccionado, setFabricanteSeleccionado] = useState(null) // Fabricante seleccionado
  const [productoSeleccionado, setProductoSeleccionado] = useState(null) // Producto seleccionado

  // Obtener todos los fabricantes desde la API
  const obtenerFabricantes = async () => {
    try {
      const response = await fetch('http://localhost:5000/fabricantes/')
      const datos = await response.json()
      setFabricantes(datos) // Asegúrate de que `datos` sea un arreglo
    } catch (error) {
      console.error('Error al obtener fabricantes:', error)
    }
  }

  // Obtener productos de un fabricante específico
  const obtenerProductosFabricante = async (idFabricante) => {
    try {
      const response = await fetch(`http://localhost:5000/fabricantes/${idFabricante}/productos`)
      const datos = await response.json()
      setProductos(datos.Productos || datos) // Maneja posibles estructuras de datos
      setFabricanteSeleccionado(idFabricante)
      setProductoSeleccionado(null) // Limpiar producto seleccionado
    } catch (error) {
      console.error('Error al obtener productos del fabricante:', error)
    }
  }

  useEffect(() => {
    obtenerFabricantes()
  }, [])

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Lista de fabricantes */}
        <div className="col-md-6">
          <h1>Fabricantes</h1>
          {fabricantes.length > 0 ? (
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
          ) : (
            <p>No hay fabricantes disponibles.</p>
          )}

          {fabricanteSeleccionado && (
            <div className="mt-4">
              <h2>Productos del fabricante</h2>
              {productos.length > 0 ? (
                <ul className="list-group">
                  {productos.map((producto) => (
                    <li
                      key={producto.id}
                      className={`list-group-item ${
                        productoSeleccionado === producto.id ? 'active' : ''
                      }`}
                      onClick={() => setProductoSeleccionado(producto.id)}
                      style={{ cursor: 'pointer' }}
                    >
                      {producto.nombre} - ${producto.precio}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Este fabricante no tiene productos.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
