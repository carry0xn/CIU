import React from 'react'
import Header from './componentes/Header'
import Footer from './componentes/Footer'
import Catalogo from './componentes/Catalogo'
import Fabricantes from './componentes/Fabricantes'
import Inicio from './componentes/Inicio'
import { Routes, Route } from 'react-router-dom' // Rutas
import './App.css'

function App() {
  return (
      <div className="app">
        <Header />
        {/* Configuración de rutas */}
        <Routes>
          <Route path="/" element={<Inicio />} /> {/* Ruta raíz */}
          <Route path="/Catalogo" element={<Catalogo />} />
          <Route path="/Fabricantes" element={<Fabricantes />} />
        </Routes>
        <Footer />
      </div>
  )
}

export default App
