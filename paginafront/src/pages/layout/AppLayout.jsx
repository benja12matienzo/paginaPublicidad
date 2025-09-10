import AppContent from "./components/content/AppContent.jsx";
import AppFooter from "./components/footer/AppFooter.jsx";
import AppHeader from "./components/header/AppHeader.jsx";
import AppSidebar from "./components/sidebar/AppSidebar.jsx";

export default function AppLayout() {
  return (
    <div class="bg-black text-white w-100 h-100 d-flex align-items-center justify-center flex-column">
      <div class="row">
        {/* Header */}
        <AppHeader />
      </div>
        {/* Sidebar */}
          <AppSidebar />
      {/* Contenedor principal */}
      <div className="justify-center row">
        {/* Contenedor de contenido centrado */}
        <div className="col">
          <AppContent />
        </div>
      </div>

      {/* Footer */}
        <div className="row">
          <AppFooter />
        </div>
    </div>
  );
}
