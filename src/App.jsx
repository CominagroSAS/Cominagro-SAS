import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { RiWhatsappLine } from 'react-icons/ri'
import Navbar from './componets/layout/Navbar'
import Footer from './componets/layout/Footer'
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import Productos from './pages/Productos'
import Proyectos from './pages/Proyectos'
import Contacto from './pages/Contacto'
import styles from './App.module.css'

// Componente para subir al inicio al cambiar de ruta
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />

      {/* Botón flotante de WhatsApp corregido */}
      <a 
        href="https://wa.me/573175017359?text=Hola%20Cominagro%2C%20quisiera%20más%20información"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.wspFloat}
        aria-label="Contactar por WhatsApp"
      >
        <RiWhatsappLine size={28} />
      </a>
    </>
  )
}

export default App