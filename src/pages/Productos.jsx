import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { RiArrowRightLine, RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import { productos, categorias, usoLabels } from '../data/productos'
import styles from './Productos.module.css'

function UsoBadge({ uso }) {
  return (
    <span className={`uso-badge uso-${uso}`}>
      {usoLabels[uso]}
    </span>
  )
}

function FichaTecnica({ ficha }) {
  const skip = ['uso']
  const labels = {
    largo:               'Largo',
    alto:                'Alto',
    ancho:               'Ancho',
    unidadesM2:          'Unidades * m²',
    peso:                'Peso por unidad',
    norma:               'Norma',
    moduloRotura:        'Módulo de Rotura',
    resistenciaAbrasion: 'Resist. Abrasión',
    absorcionAgua:       'Absorción de Agua',
    resistenciaAlta:     'Resistencia Alta',
    resistenciaBaja:     'Resistencia Baja',
    absorcionAlta:       'Absorción Alta',
    absorcionBaja:       'Absorción Baja',
    granulometria:       'Granulometría',
    capacidad:           'Capacidad',
    origen:              'Origen',
  }

  return (
    <div className="ficha">
      <div className="ficha-header">Ficha Técnica</div>
      {Object.entries(ficha)
        .filter(([key]) => !skip.includes(key))
        .map(([key, val]) => (
          <div key={key} className="ficha-row">
            <span className="key">{labels[key] || key}</span>
            <span className="val">{val}</span>
          </div>
        ))
      }
    </div>
  )
}

function ProductCard({ producto: p }) {
  const [imgIndex, setImgIndex] = useState(0)
  const [showFicha, setShowFicha] = useState(false)

  const prev = () => setImgIndex(i => (i === 0 ? p.imgs.length - 1 : i - 1))
  const next = () => setImgIndex(i => (i === p.imgs.length - 1 ? 0 : i + 1))

  return (
    <div className={styles.card} id={p.id}>

      <div className={styles.imgWrap}>
        <img src={p.imgs[imgIndex]} alt={p.title} loading="lazy" />

        {p.imgs.length > 1 && (
          <>
            <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prev} aria-label="Anterior">
              <RiArrowLeftSLine size={20} />
            </button>
            <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={next} aria-label="Siguiente">
              <RiArrowRightSLine size={20} />
            </button>
            <div className={styles.counter}>
              {imgIndex + 1} / {p.imgs.length}
            </div>
          </>
        )}
      </div>

      <div className={styles.body}>
        <div className={styles.bodyTop}>
          <UsoBadge uso={p.uso} />
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
        </div>

        {p.ficha && (
          <>
            <button
              className={styles.fichaToggle}
              onClick={() => setShowFicha(!showFicha)}
            >
              {showFicha ? 'Ocultar ficha técnica ▲' : 'Ver ficha técnica ▼'}
            </button>
            {showFicha && <FichaTecnica ficha={p.ficha} />}
          </>
        )}

        {p.category !== 'maquinaria' && (
          <Link to="/contacto" className={styles.cta}>
            Solicitar cotización <RiArrowRightLine size={14} />
          </Link>
        )}
      </div>

    </div>
  )
}

export default function Productos() {
  const [searchParams] = useSearchParams()
  const filtroParam = searchParams.get('filtro') || 'all'
  const [filtro, setFiltro] = useState(filtroParam)

  useEffect(() => {
    const param = searchParams.get('filtro')
    if (param) {
      setFiltro(param)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      setFiltro('all')
    }
  }, [searchParams])

  const productosFiltrados = filtro === 'all'
    ? productos
    : productos.filter(p => p.category === filtro)

  return (
    <>
      <section className={styles.pageHero}>
        <div className="container">
          <div className={styles.breadcrumb}>
            Inicio <em>/ Productos</em>
          </div>
          <h1>Nuestros <em>Productos</em></h1>
          <p>Materiales de construcción de alta calidad, extraídos y fabricados directamente en nuestra mina en Nariño.</p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionFirst} section`}>
        <div className="container">

          <div className={styles.filterBar}>
            {categorias.map(f => (
              <button
                key={f.key}
                className={`${styles.chip} ${filtro === f.key ? styles.chipActive : ''}`}
                onClick={() => setFiltro(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <p className={styles.count}>
            Mostrando <strong>{productosFiltrados.length}</strong> producto{productosFiltrados.length !== 1 ? 's' : ''}
          </p>

          <div className={styles.grid}>
            {productosFiltrados.map(p => (
              <ProductCard key={p.id} producto={p} />
            ))}
          </div>

        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaInner}>
            <span className={styles.ctaTag}>¿No encontró lo que busca?</span>
            <h2>Contáctenos y le <em>asesoramos</em></h2>
            <p>Tenemos más productos disponibles. Cuéntenos su proyecto y le recomendamos la mejor solución.</p>
            <Link to="/contacto" className={styles.btnPrimary}>
              Hablar con un asesor <RiArrowRightLine size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}