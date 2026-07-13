import { Routes, Route } from 'react-router-dom'
import Navbar from './componets/layout/Navbar'
import Footer from './componets/layout/Footer'
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import Productos from './pages/Productos'
import Proyectos from './pages/Proyectos'
import Contacto from './pages/Contacto'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {<Route path="/nosotros"  element={<Nosotros />} /> }
          {<Route path="/productos" element={<Productos />} /> }
          {<Route path="/proyectos" element={<Proyectos />} /> }
          {<Route path="/contacto"  element={<Contacto />} /> }
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App