import React from "react"
import interior from "/images/productos/Interior.jpg"
import mejores_productos from "/images/productos/MejoresProductos.jpg"
import clientes from "/images/productos/clientes.jpg"

export default function Inicio() {
  return (
    <section>
      <section id="presentacion" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Quiénes Somos</h2>
          <p className="lead text-center">
            En <strong>TechMarket</strong> nos guiamos por cuatro principios fundamentales: pasión por la innovación, excelencia operativa, enfoque en nuestros clientes y visión a largo plazo. Nos esforzamos por ser el lugar ideal para encontrar productos tecnológicos de calidad, destacándonos como una empresa confiable y centrada en la satisfacción de nuestros clientes.
          </p>
          <p className="text-center">
            Desde componentes para PC, accesorios y dispositivos hasta productos de las mejores marcas tecnológicas, TechMarket combina calidad, servicio y precios competitivos.
          </p>

          <div className="row mt-5">
            <div className="col-md-6">
              <h4>Nuestra Filosofía</h4>
              <p>
                Creemos en la innovación constante, en la importancia de la experiencia del cliente y en construir relaciones duraderas con fabricantes y usuarios. Cada decisión que tomamos está alineada con nuestros valores de transparencia, compromiso y excelencia.
              </p>
            </div>
            <div className="col-md-6">
              <h4>Nuestra Historia</h4>
              <p>
                Desde nuestra fundación en 2010, TechMarket ha evolucionado para convertirse en un referente en el mercado tecnológico. Con un enfoque en la calidad y la innovación, hemos creado un espacio donde los clientes pueden encontrar soluciones para todas sus necesidades tecnológicas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Galería */}
      <section id="galeria" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Galería</h2>
          <div className="row">
            <div className="col-md-4">
              <a href="https://www.youtube.com/watch?v=DwdUl5l5iv8" target="_blank" rel="noopener noreferrer">
                <img
                  src={interior}
                  alt="Interior de la tienda"
                  className="img-fluid rounded mb-3"
                />
              </a>
              <p className="text-center">Interior de la tienda</p>
            </div>
            <div className="col-md-4">
              <a href="https://www.youtube.com/watch?v=t1hbwYg9Fw0&pp=ygUmcHJvZHVjdG9zIGRlc3RhY2Fkb3MgdGVjbm9sb2dpYSBhbWF6b24%3D" target="_blank" rel="noopener noreferrer">
                <img
                  src={mejores_productos}
                  alt="Productos destacados"
                  className="img-fluid rounded mb-3"
                />
              </a>
              <p className="text-center">Productos destacados</p>
            </div>
            <div className="col-md-4">
              <a href="https://www.youtube.com/watch?v=owHZ_dLbMr0" target="_blank" rel="noopener noreferrer">
                <img
                  src={clientes}
                  alt="Clientes satisfechos"
                  className="img-fluid rounded mb-3"
                />
              </a>
              <p className="text-center">Clientes satisfechos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Embebido */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="mb-4">Conoce más sobre nosotros</h2>
          <iframe 
            width="560" height="315" 
            src="https://www.youtube.com/embed/8oPx-pdtnNU?si=VNRI9PqsJnY0iCus" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen>
          </iframe>
        </div>
      </section>

      <section id="contacto" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Contacto</h2>
          <p className="text-center">
            <strong>Dirección:</strong> Av. SiempreViva 123, Ciudad de Zaun<br />
            <strong>Teléfono:</strong> +123 456 789<br />
            <strong>Horario:</strong> Lunes a Viernes, 9:00 AM - 6:00 PM
          </p>
          <div className="text-center mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13134.045274032009!2d-58.6344234!3d-34.6165168!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb8da75c7af63%3A0x275fa0fbb4f66f49!2sUniversidad%20Nacional%20de%20Hurlingham!5e0!3m2!1ses-419!2sar!4v1732713739232!5m2!1ses-419!2sar"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </section>
  )
}
