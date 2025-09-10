import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function AppSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Botón toggle (siempre arriba a la derecha) */}
      <button
        className="btn btn-dark position-fixed top-0 end-0 m-3"
        style={{ zIndex: 2000 }} // más alto que el sidebar
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay (solo visible cuando está abierto en mobile) */}
      {open && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-md-none"
          style={{ zIndex: 1040 }}
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Sidebar con animación */}
      <div
        className="position-fixed top-0 h-100 bg-dark text-white shadow p-4"
        style={{
          width: "250px",
          right: open ? "0" : "-250px", // se oculta a la derecha
          transition: "right 0.3s ease-in-out",
          zIndex: 1500, // debajo del botón, arriba del overlay
        }}
      >
        <h4 className="mb-4">Menú</h4>
        <nav className="nav flex-column">
          <a href="#" className="nav-link text-white">
            Inicio
          </a>
          <a href="#" className="nav-link text-white">
            Servicios
          </a>
          <a href="#" className="nav-link text-white">
            Proyectos
          </a>
          <a href="#" className="nav-link text-white">
            Contacto
          </a>
        </nav>
      </div>
    </div>
  );
}

