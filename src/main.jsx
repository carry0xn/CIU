import React from 'react'
import ReactDOM from 'react-dom/client' 
import App from './App'
import { BrowserRouter } from 'react-router-dom' 
import 'bootstrap/dist/css/bootstrap.min.css' // Importa Bootstrap para los estilos

// Renderiza el árbol de React en el contenedor con id 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
