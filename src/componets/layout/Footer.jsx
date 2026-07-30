import { Link } from 'react-router-dom'
import { RiMapPin2Line, RiPhoneLine, RiMailLine, RiFacebookFill, RiInstagramLine, RiWhatsappLine } from 'react-icons/ri'
import styles from './Footer.module.css'

const Logo = () => (
  <Link to="/" className={styles.logo}>
    <img
      src="/LOGO.PNG"
      alt="Cominagro S.A.S"
      className={styles.logoImg}
    />
  </Link>
)

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <div className="container">
          <div className={styles.grid}>

            {/* Marca */}
            <div className={styles.brand}>
              <Logo />
              <p>Empresa nariñense dedicada a la extracción y comercialización de materiales de construcción de alta calidad desde hace más de 27 años.</p>
              <p className={styles.tagline}>
                Más de <strong>27 años</strong> construyendo contigo
              </p>
              <div className={styles.socials}>
                <a href="#" className={styles.social} aria-label="Facebook">
                  <RiFacebookFill size={16} />
                </a>
                <a href="#" className={styles.social} aria-label="Instagram">
                  <RiInstagramLine size={16} />
                </a>
                <a href="https://wa.me/573175131773" className={styles.social} aria-label="WhatsApp">
                  <RiWhatsappLine size={16} />
                </a>
              </div>
            </div>

            {/* Navegación */}
            <div className={styles.col}>
              <h4>Navegación</h4>
              <Link to="/">Inicio</Link>
              <Link to="/nosotros">Nosotros</Link>
              <Link to="/productos">Productos</Link>
              <Link to="/proyectos">Proyectos</Link>
              <Link to="/contacto">Contacto</Link>
            </div>

            {/* Productos */}
            <div className={styles.col}>
              <h4>Productos</h4>
              <Link to="/productos#prefabricados">Prefabricados</Link>
              <Link to="/productos#bloques">Bloques en Arcilla</Link>
              <Link to="/productos#ladrillera">Ladrillera</Link>
              <Link to="/productos#mineria">Minería</Link>
            </div>

            {/* Contacto */}
            <div className={styles.col}>
              <h4>Contáctanos</h4>
              <div className={styles.contactItem}>
                <RiMapPin2Line size={15} />
                <span>Km 4 Vía al Sur, Pasto, Nariño – Colombia</span>
              </div>
              <div className={styles.contactItem}>
                <RiPhoneLine size={15} />
                <span>317 513 1773 &nbsp;|&nbsp; 317 403 0677</span>
              </div>
              <div className={styles.contactItem}>
                <RiMailLine size={15} />
                <span>ventas-cominagro@hotmail.com</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="container">
        <div className={styles.bottom}>
          <p>© 2024 Cominagro S.A.S – Todos los derechos reservados.</p>
          {/* 
          <span>
            Diseñado por{' '}
            <a href="mailto:eduandresalvarezgamba@gmail.com">
              Eduardo Andres Alvarez Gamba
            </a>
          </span>
          */}
        </div>
      </div>
    </footer>
  )
}