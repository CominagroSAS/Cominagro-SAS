import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { RiArrowRightLine, RiMapPin2Line, RiArrowLeftLine, RiExpandDiagonalLine } from 'react-icons/ri'
import { proyectos, categoriasproyectos } from '../data/proyectos'
import { productos } from '../data/productos'
import MaterialCarousel from '../componets/MaterialCarousel'
import styles from './Proyectos.module.css'

const stats = [
  { n: '+ 500', l: 'Proyectos entregados' },
  { n: '100%', l: 'Producción local' },
  { n: '27+', l: 'Años de experiencia' },
]

export default function Proyectos() {
  const [filtro, setFiltro] = useState('all')
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null)

  const proyectosFiltrados = filtro === 'all'
    ? proyectos
    : proyectos.filter(p => p.category === filtro)

  const getCategoryLabel = (cat) => {
    switch (cat) {
      case 'parques': return 'Parque'
      case 'edificios': return 'Proyecto Residencial'
      case 'infraestructura': return 'Infraestructura'
      default: return 'Proyecto'
    }
  }

  // Previene el scroll del cuerpo cuando el modal está abierto
  useEffect(() => {
    if (proyectoSeleccionado) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => { document.body.style.overflow = 'auto' }
  }, [proyectoSeleccionado])

  const obtenerMateriales = (p) => {
    const idsArr = p.productosIds || (p.productoId ? [p.productoId] : [])
    return idsArr
      .map(id => productos.find(prod => prod.id === id))
      .filter(Boolean)
  }

  return (
    <>
      <section className={styles.pageHero}>
        <div className="container">
          <div className={styles.breadcrumb}>
            Inicio <em>/ Proyectos</em>
          </div>
          <h1>Proyectos <em>Realizados</em></h1>
          <p>Obras en toda la región de Nariño que confían en la calidad y respaldo de Cominagro S.A.S.</p>
        </div>
      </section>

      <div className={styles.statsBanner}>
        <div className="container">
          <div className={styles.statsInner}>
            {stats.map((s, i) => (
              <div key={i} className={styles.statItem}>
                <span className={styles.statN}>{s.n}</span>
                <span className={styles.statL}>{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className={`${styles.section} ${styles.sectionFirst} section`}>
        <div className="container">

          <div className={styles.filterBar}>
            {categoriasproyectos.map(f => (
              <button
                key={f.key}
                className={`${styles.chip} ${filtro === f.key ? styles.chipActive : ''}`}
                onClick={() => setFiltro(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className={styles.grid}>
            {proyectosFiltrados.map(p => {
              const listaMateriales = obtenerMateriales(p)

              return (
                <div 
                  key={p.id} 
                  className={styles.card}
                  onClick={() => setProyectoSeleccionado(p)}
                >
                  <div className={styles.imgWrap}>
                    <img src={p.img} alt={p.title} loading="lazy" />
                    <span className={styles.cat}>
                      {getCategoryLabel(p.category)}
                    </span>
                    <button type="button" className={styles.expandBtn} aria-label="Ver en detalle">
                      <RiExpandDiagonalLine size={18} />
                    </button>
                  </div>
                  
                  <div className={styles.body}>
                    <div className={styles.ubicacion}>
                      <RiMapPin2Line size={14} />
                      {p.ubicacion}
                    </div>
                    <h3 className={styles.cardTitle}>{p.title}</h3>
                    <p className={styles.cardDesc}>{p.desc}</p>

                    {listaMateriales.length > 0 && (
                      <div onClick={(e) => e.stopPropagation()}>
                        <MaterialCarousel materiales={listaMateriales} />
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* MODAL / TARJETA EXPANDIDA */}
      {proyectoSeleccionado && (
        <div className={styles.modalOverlay} onClick={() => setProyectoSeleccionado(null)}>
          <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
            
            {/* Botón de regreso en la esquina superior izquierda */}
            <button 
              type="button" 
              className={styles.backBtn}
              onClick={() => setProyectoSeleccionado(null)}
              aria-label="Volver"
            >
              <RiArrowLeftLine size={22} />
              <span>Volver</span>
            </button>

            <div className={styles.modalHeroImg}>
              <img src={proyectoSeleccionado.img} alt={proyectoSeleccionado.title} />
              <span className={styles.modalCat}>
                {getCategoryLabel(proyectoSeleccionado.category)}
              </span>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.modalUbicacion}>
                <RiMapPin2Line size={18} />
                {proyectoSeleccionado.ubicacion}
              </div>

              <h2 className={styles.modalTitle}>{proyectoSeleccionado.title}</h2>
              <p className={styles.modalDesc}>{proyectoSeleccionado.desc}</p>

              {obtenerMateriales(proyectoSeleccionado).length > 0 && (
                <div className={styles.modalCarouselWrapper}>
                  <MaterialCarousel 
                    materiales={obtenerMateriales(proyectoSeleccionado)} 
                    isLarge={true}
                  />
                </div>
              )}
            </div>

          </div>
        </div>
      )}

      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaInner}>
            <span className={styles.ctaTag}>Su obra es la siguiente</span>
            <h2>¿Tiene un proyecto <em>en mente?</em></h2>
            <p>Cuéntenos y le preparamos una cotización personalizada con los materiales que necesita.</p>
            <Link to="/contacto" className={styles.btnPrimary}>
              Solicitar cotización <RiArrowRightLine size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}