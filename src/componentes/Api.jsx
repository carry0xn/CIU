const API_URL = 'http://localhost:5000/' // URL base de la API

// Productos
export const getProductos = async () => {
    const response = await fetch(`${API_URL}productos`)
    const data = await response.json()
    return data
}

export const getProductoById = async (id) => {
    const response = await fetch(`${API_URL}productos/${id}`)
    const data = await response.json()
    return data
}

export const getProductoDeFabricantes = async (id) => {
    try {
        const response = await fetch(`${API_URL}fabricantes/${id}/productos`)
        const data = await response.json()
        // Aquí extraemos la lista de productos del campo 'Productos'
        return data.Productos || [] // Aseguramos que siempre se devuelva un array, aunque sea vacío
    } catch (error) {
        console.error(error)
        return [] // En caso de error, devolver un array vacío
    }
}

export const getProductoDeComponentes = async (id) => {
    try {
        const response = await fetch(`${API_URL}componentes/${id}/productos`)
        const data = await response.json()
        // Aquí extraemos la lista de productos del campo 'Productos'
        return data.Productos || [] // Aseguramos que siempre se devuelva un array, aunque sea vacío
    } catch (error) {
        console.error(error)
        return [] // En caso de error, devolver un array vacío
    }
}

// Fabricantes
export const getFabricantes = async () => {
    const response = await fetch(`${API_URL}fabricantes`)
    const data = await response.json()
    return data
}

// Componentes
export const getComponentes = async () => {
    const response = await fetch(`${API_URL}componentes`)
    const data = await response.json()
    return data
}
