import React from "react"

export default function Inicio() {
  return (
    <div className="container-fluid bg-light text-dark py-5">
      <div className="container text-center">
        <h1 className="mb-4">Bienvenido a TechMarket</h1>
        <p className="lead">
          Encuentra los mejores productos tecnológicos, componentes y fabricantes en un solo lugar.
        </p>
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Accesorios</h5>
                <p className="card-text">
                  Descubre una amplia variedad de accesorios para tu PC y dispositivos móviles.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Componentes</h5>
                <p className="card-text">
                  Encuentra procesadores, tarjetas gráficas, y más para armar tu computadora ideal.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Fabricantes</h5>
                <p className="card-text">
                  Conoce las marcas líderes en tecnología y sus productos destacados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
