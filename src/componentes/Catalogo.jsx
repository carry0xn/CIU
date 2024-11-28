import React, { useState, useEffect } from 'react'
import Carrito from './Carrito'

export default function Catalogo() {
    const [productos, setProductos] = useState([]) // Estado para almacenar los productos
    
    // Obtener productos desde la API
    const obtenerProductos = async () => {
        try {
            const response = await fetch('http://localhost:5000/productos/')
            const datos = await response.json()
            setProductos(datos)
            
        }
        catch (error) {
            console.error(error)
        }
    }
    useEffect (() => {
        obtenerProductos()
    }, {})

    return (
        <div className="container mt-5">
            <Carrito productos={productos} />
        </div>
    )
} 

