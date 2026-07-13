import { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiArrowRightLine, RiMapPin2Line, RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import { proyectos } from '../data/proyectos'
import styles from './Galeria.module.css'

// Mostramos los primeros 5 proyectos en el home
const galeria = proyectos.slice(0, 5)

export default function Galeria() {
  const [active, setActive] = useState(0)

  const prev = () => setActive(i => (i === 0 ? galeria.length - 1 : i - 1))
  const next = () => setActive(i => (i === galeria.length - 1 ? 0 : i + 1))

  return (
    <section className={`${styles.section} section`}>
      <div className="container">

        <div className={styles.head}>
          <span className={styles.tag}>Nuestros materiales</span>
          <h2 className={styles.title}>
            Proyectos <em>realizados</em>
          </h2>
          <p className={styles.sub}>
            Obras en toda la región de Nariño que confían en la calidad de Cominagro.
          </p>
        </div>

        {/* Layout principal */}
        <div className={styles.layout}>

          {/* Imagen principal */}
          <div className={styles.mainImg}>
            <img
              src={galeria[active].img}
              alt={galeria[active].title}
              loading="lazy"
            />
            <div className={styles.mainOverlay} />

            {/* Info sobre la imagen */}
            <div className={styles.mainInfo}>
              <div className={styles.mainUbicacion}>
                <RiMapPin2Line size={14} />
                {galeria[active].ubicacion}
              </div>
              <h3>{galeria[active].title}</h3>
              <div className={styles.mainMateriales}>
                {galeria[active].materiales.map(m => (
                  <span key={m} className={styles.mainMaterial}>{m}</span>
                ))}
              </div>
            </div>

            {/* Flechas */}
            <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prev} aria-label="Anterior">
              <RiArrowLeftSLine size={22} />
            </button>
            <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={next} aria-label="Siguiente">
              <RiArrowRightSLine size={22} />
            </button>

            {/* Contador */}
            <div className={styles.counter}>
              {active + 1} / {galeria.length}
            </div>
          </div>

          {/* Thumbnails */}
          <div className={styles.thumbs}>
            {galeria.map((p, i) => (
              <button
                key={p.id}
                className={`${styles.thumb} ${i === active ? styles.thumbActive : ''}`}
                onClick={() => setActive(i)}
              >
                <img src={p.img} alt={p.title} loading="lazy" />
                <div className={styles.thumbOverlay} />
                <span className={styles.thumbTitle}>{p.title}</span>
              </button>
            ))}
          </div>

        </div>

        <div className={styles.ver}>
          <Link to="/proyectos" className={styles.btn}>
            Ver todos los proyectos <RiArrowRightLine size={16} />
          </Link>
        </div>

      </div>
    </section>
  )
}