import React from 'react'
import { Link } from 'react-router-dom' // Para crear enlaces

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Catalogo">
                  Catálogo
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Fabricantes">
                  Fabricantes
                </Link>
              </li>
            </ul>
          </div>
      </nav>
    </header>
  )
}
