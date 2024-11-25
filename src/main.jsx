import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa ReactDOM para manejar el DOM
import App from './App'; // Importa tu componente principal
import { BrowserRouter } from 'react-router-dom'; // Manejo de rutas
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap para los estilos

// Renderiza el árbol de React en el contenedor con id 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
