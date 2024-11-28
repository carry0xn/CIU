import React, { useState, useEffect } from 'react'
import { getFabricantes, getProductoDeFabricantes } from './Api'

export default function ListaFabricantes() {
  const [fabricantes, setFabricantes] = useState([]) // Lista de fabricantes
  const [productos, setProductos] = useState([]) // Productos del fabricante seleccionado
  const [fabricanteSeleccionado, setFabricanteSeleccionado] = useState(null) // Fabricante seleccionado

  useEffect(() => {
    // Obtener todos los fabricantes desde la API, carga los fabricantes al inicializar el componente.
    // Este efecto se ejecuta una sola vez.
    const fetchFabricantes = async () => {
      try {
        const datos = await getFabricantes()
        setFabricantes(datos)
      } catch (error) {
        console.error('Error al obtener fabricantes:', error)
      }
    }

    fetchFabricantes()
  }, [])

  // Manejo de los productos y fabricante seleccionado
  const handleFabricanteClick = async (fabricante) => {
    try {
      const datos = await getProductoDeFabricantes(fabricante.id)
      setProductos(datos) // Establecer los productos correctamente
      setFabricanteSeleccionado(fabricante) // Guardar el objeto del fabricante seleccionado
    } catch (error) {
      console.error('Error al obtener productos del fabricante:', error)
    }
  }

  return (
    <div className="container mt-5 py-5">
      <div className="row">
        {/* Lista de fabricantes */}
        <div className="col-md-6">
          <h1>Fabricantes</h1>
          {fabricantes.length > 0 ? (
            <ul className="list-group">
              {fabricantes.map((fabricante) => (
                <li
                  key={fabricante.id}
                  className={`list-group-item ${fabricanteSeleccionado?.id === fabricante.id ? 'active' : ''}`}
                  onClick={() => handleFabricanteClick(fabricante)}
                  style={{ cursor: 'pointer' }}
                >
                  {fabricante.nombre}
                </li>
              ))}
            </ul>
          ) : (
            <p>No hay fabricantes disponibles.</p>
          )}
        </div>

        {/* Descripción del fabricante */}
        <div className="col-md-6">
          {fabricanteSeleccionado ? (
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">{fabricanteSeleccionado.nombre}</h2>
                <p className="card-text"><strong>Dirección:</strong> {fabricanteSeleccionado.direccion}</p>
                <p className="card-text"><strong>Contacto:</strong> {fabricanteSeleccionado.numeroContacto}</p>
                {fabricanteSeleccionado.pathImgPerfil && (
                  <img
                    src={`/${fabricanteSeleccionado.pathImgPerfil}`}
                    alt={`Imagen de ${fabricanteSeleccionado.nombre}`}
                    className="card-img-top"
                  />
                )}
              </div>
            </div>
          ) : (
            <p>Selecciona un fabricante para ver más información.</p>
          )}

          {/* Lista de productos del fabricante */}
          {fabricanteSeleccionado && (
            <div className="mt-4">
              <h2>Productos del fabricante</h2>
              {productos.length > 0 ? (
                <ul className="list-group">
                  {productos.map((producto) => (
                    <li key={producto.id} className="list-group-item">
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
