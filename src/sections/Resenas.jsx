import { useEffect, useRef } from 'react'
import { resenas, resumenResenas } from '../data/resenas'
import styles from './Resenas.module.css'

function Estrellas({ n, size = 16 }) {
  return (
    <div className={styles.estrellas}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < n ? styles.estrella : styles.estrellaVacia}
          style={{ fontSize: size }}
        >
          ★
        </span>
      ))}
    </div>
  )
}

function Avatar({ nombre }) {
  const iniciales = nombre
    .split(' ')
    .slice(0, 2)
    .map(n => n.charAt(0))
    .join('')
    .toUpperCase()

  const colores = [
    '#1E3A5F', '#B95A3E', '#2E7D4F',
    '#6B4C9A', '#963122', '#2A5080',
  ]
  const color = colores[nombre.charCodeAt(0) % colores.length]

  return (
    <div className={styles.avatar} style={{ background: color }}>
      {iniciales}
    </div>
  )
}

function ResenaCard({ r }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <Avatar nombre={r.nombre} />
        <div className={styles.cardInfo}>
          <div className={styles.nombre}>{r.nombre}</div>
          <div className={styles.meta}>
            {r.reseñas} {r.reseñas === 1 ? 'reseña' : 'reseñas'} · {r.fecha}
          </div>
        </div>
        <svg viewBox="0 0 24 24" width="18" height="18" className={styles.googleIcon}>
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
      </div>
      <Estrellas n={r.calificacion} />
      <p className={styles.texto}>{r.texto}</p>
    </div>
  )
}

export default function Resenas() {
  const carruselRef = useRef(null)

  // Auto-scroll táctil automático para móvil
  useEffect(() => {
    const container = carruselRef.current
    if (!container) return

    const interval = setInterval(() => {
      // Si llega al final, regresa al inicio, de lo contrario avanza al ancho del contenedor
      const maxScroll = container.scrollWidth - container.clientWidth
      if (container.scrollLeft >= maxScroll - 10) {
        container.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        container.scrollBy({ left: container.clientWidth, behavior: 'smooth' })
      }
    }, 4000) // Cambia de reseña cada 4 segundos

    return () => clearInterval(interval)
  }, [])

  return (
    <section className={`${styles.section} section section-alt`}>
      <div className="container">

        {/* Encabezado */}
        <div className={styles.head}>
          <span className={styles.tag}>Opiniones reales</span>
          <h2 className={styles.title}>
            Lo que dicen nuestros <em>clientes</em>
          </h2>

          <div className={styles.ratingWrap}>
            <div className={styles.ratingCard}>
              <div className={styles.ratingLeft}>
                <div className={styles.ratingN}>{resumenResenas.calificacion.toFixed(1)}</div>
                <Estrellas n={5} size={22} />
                <div className={styles.ratingTotal}>
                  {resumenResenas.total} reseñas en Google
                </div>
              </div>
              <div className={styles.ratingDivider} />
              <div className={styles.ratingRight}>
                <svg viewBox="0 0 24 24" width="36" height="36">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <div className={styles.googleText}>Google</div>
                <div className={styles.googleSub}>Business</div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid para Desktop */}
        <div className={styles.grid}>
          {resenas.map((r, i) => (
            <ResenaCard key={i} r={r} />
          ))}
        </div>

        {/* Carrusel Táctil Limpio (Solo Móvil) */}
        <div className={styles.carrusel} ref={carruselRef}>
          {resenas.map((r, i) => (
            <div key={i} className={styles.carruselItem}>
              <ResenaCard r={r} />
            </div>
          ))}
        </div>

        {/* Link Google */}
        <div className={styles.verMas}>
          <a
            href="https://maps.google.com/?q=Mina+Ladrillera+y+Prefabricados+Las+Terrazas+Cominagro+SAS+Pasto"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.verMasBtn}
          >
            Ver todas las reseñas en Google →
          </a>
        </div>

      </div>
    </section>
  )
}