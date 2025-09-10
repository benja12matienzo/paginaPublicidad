import { Instagram, Facebook, MessageCircle } from "lucide-react";

export default function AppFooter() {
  return (
    <footer className="bg-dark text-light text-center py-3 w-100 fixed-bottom">
      <div className="container">
        {/* Texto */}
        <p className="mb-2">
          © {new Date().getFullYear()} - Mi Página
        </p>

        {/* Íconos redes sociales */}
        <div className="d-flex justify-content-center gap-3">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
          >
            <Facebook size={24} />
          </a>
          <a
            href="https://wa.me/5493810000000" // tu número WhatsApp internacional
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
          >
            <MessageCircle size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
