import React, { useState, useEffect } from 'react'
import { getComponentes, getProductoDeComponentes } from './Api'

export default function ListaComponentes() {
  const [componentes, setComponentes] = useState([]) // Lista de componentes
  const [productos, setProductos] = useState([]) // Productos del componente seleccionado
  const [componenteSeleccionado, setComponenteSeleccionado] = useState(null) // Componente seleccionado

  useEffect(() => {
    // Obtener todos los componentes desde la API, carga los componentes al inicializar.
    // Este efecto se ejecuta una sola vez.
    const fetchComponente = async () => {
      try {
        const datos = await getComponentes()
        setComponentes(datos)
      } catch (error) {
        console.error('Error al obtener componentes:', error)
      }
    }

    fetchComponente()
  }, [])

  // Manejo de los productos y componente seleccionado
  const handleComponenteClick = async (componente) => {
    try {
      const datos = await getProductoDeComponentes(componente.id)
      setProductos(datos) // Establecer los productos correctamente
      setComponenteSeleccionado(componente) // Guardar el objeto del componente seleccionado
    } catch (error) {
      console.error('Error al obtener productos del componente:', error)
    }
  }

  return (
    <div className="container mt-5 py-5">
      <div className="row">
        {/* Lista de componentes */}
        <div className="col-md-6">
          <h1>Componentes</h1>
          {componentes.length > 0 ? (
            <ul className="list-group">
              {componentes.map((componente) => (
                <li
                  key={componente.id}
                  className={`list-group-item ${componenteSeleccionado?.id === componente.id ? 'active' : ''}`}
                  onClick={() => handleComponenteClick(componente)}
                  style={{ cursor: 'pointer' }}
                >
                  {componente.nombre}
                </li>
              ))}
            </ul>
          ) : (
            <p>No hay componentes disponibles.</p>
          )}
        </div>

        {/* Detalles del componente */}
        <div className="col-md-6">
          {componenteSeleccionado ? (
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">{componenteSeleccionado.nombre}</h2>
                <p className="card-text"><strong>Descripción:</strong> {componenteSeleccionado.descripcion}</p>
              </div>
            </div>
          ) : (
            <p>Selecciona un componente para ver más información.</p>
          )}

          {/* Lista de productos del componente */}
          {componenteSeleccionado && (
            <div className="mt-4">
              <h2>Productos del componente</h2>
              {productos.length > 0 ? (
                <ul className="list-group">
                  {productos.map((producto) => (
                    <li key={producto.id} className="list-group-item">
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
    </div>
  )
}
