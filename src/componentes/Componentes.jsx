import React, { useState, useEffect } from 'react'


export default function Componentes() {
    const [productos, setProductos] = useState([]) // Productos del fabricante seleccionado
    const [componentes, setComponentes] = useState([]) // Lista de componentes
    const [componenteSeleccionado, setComponenteSeleccionado] = useState(null) // Componente seleccionado
    const [productoSeleccionado, setProductoSeleccionado] = useState(null) // Producto seleccionado

      // Obtener todos los componentes desde la API
    const obtenerComponentes = async () => {
        try {
        const response = await fetch('http://localhost:5000/componentes/')
        const datos = await response.json()
        setComponentes(datos) // Asegúrate de que `datos` sea un arreglo
        } catch (error) {
        console.error('Error al obtener componentes:', error)
        }
    }

      // Obtener productos de un componente específico
    const obtenerProductosComponentes = async (idComponentes) => {
        try {
        const response = await fetch(`http://localhost:5000/componentes/${idComponentes}/productos`)
        const datos = await response.json()
        setProductos(datos.Productos || datos) // Maneja posibles estructuras de datos
        setComponenteSeleccionado(idComponentes)
        setProductoSeleccionado(null) // Limpiar producto seleccionado
        } catch (error) {
        console.error('Error al obtener productos del fabricante:', error)
        }
    }

    useEffect(() => {
        obtenerComponentes() // Cargar componentes también al inicio
    }, [])


  return (
    <div>
      {/* Lista de componentes */}
      <div className="col-md-6">
          <h1>Componentes</h1>
          {componentes.length > 0 ? (
            <ul className="list-group">
              {componentes.map((componente) => (
                <li
                  key={componente.id}
                  className={`list-group-item ${
                    componenteSeleccionado === componente.id ? 'active' : ''
                  }`}
                  onClick={() => obtenerProductosComponentes(componente.id)}
                  style={{ cursor: 'pointer' }}
                  >
                  {componente.nombre}
              </li>
              ))}
            </ul>
          ) : (
            <p>No hay componentes disponibles.</p>
          )}

        {componenteSeleccionado && (
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
                <p>Este componente no tiene productos.</p>
              )}
            </div>
          )}
        </div>
    </div>
  )
}
