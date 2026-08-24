import { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiArrowRightLine, RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import styles from './ProductosHome.module.css'

const productos = [
  {
    id: 'adoquines',
    title: 'Adoquines',
    desc: 'Adoquines para uso peatonal y vehicular. Alta resistencia a la carga y el desgaste.',
    imgs: [
      '/productos/adoquines/adoquin1.png',
      '/productos/adoquines/adoquin2.png',
      '/productos/adoquines/adoquin3.png',
      '/productos/adoquines/adoquin4.png',
      '/productos/adoquines/adoquin5.png',
      '/productos/adoquines/adoquin6.png',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="8" height="8" /><rect x="13" y="3" width="8" height="8" />
        <rect x="3" y="13" width="8" height="8" /><rect x="13" y="13" width="8" height="8" />
      </svg>
    ),
  },
  {
    id: 'bloques',
    title: 'Bloques',
    desc: 'Bloques estructurales y no estructurales fabricados con agregados de alta calidad .',
    imgs: [
      '/productos/bloques/bloque1.png',
      '/productos/bloques/bloque2.png',
      '/productos/bloques/bloque3.png',
      '/productos/bloques/bloque4.png',
      '/productos/bloques/bloque5.png',
      '/productos/bloques/bloque6.png',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="7" width="20" height="14" rx="1" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="8"  y1="12" x2="8"  y2="16" />
        <line x1="16" y1="12" x2="16" y2="16" />
      </svg>
    ),
  },
  {
    id: 'ladrillera',
    title: 'Ladrillera',
    desc: 'Productos funcionales para divisiones internas, externas  y fachadas.',
    imgs: [
      '/ladrillera/farol_bloque_liso_n8.png',
      '/ladrillera/farol_bloque_liso_n10.png',
      '/ladrillera/farol_bloque_liso_n12.png',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    id: 'agregados',
    title: 'Agregados',
    desc: 'Arena negra, blanca, recebo y granzón. Materiales para concretos, morteros y afirmado de pisos.',
    imgs: [
      '/productos/otros/otros1.png',
      '/productos/otros/otros2.png',
      '/productos/otros/otros3.png',
      '/productos/otros/otros4.png',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M1 3h22v4H1zM1 17h22v4H1zM7 7v10M12 7v10M17 7v10" />
      </svg>
    ),
  },
]

function ProductCard({ producto: p }) {
  const [imgIndex, setImgIndex] = useState(0)

  const prev = () => setImgIndex(i => (i === 0 ? p.imgs.length - 1 : i - 1))
  const next = () => setImgIndex(i => (i === p.imgs.length - 1 ? 0 : i + 1))

  return (
    <div className={styles.card}>
      <div className={styles.imgWrap}>
        <img src={p.imgs[imgIndex]} alt={p.title} loading="lazy" />

        {p.imgs.length > 1 && (
          <>
            <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prev} aria-label="Anterior">
              <RiArrowLeftSLine size={18} />
            </button>
            <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={next} aria-label="Siguiente">
              <RiArrowRightSLine size={18} />
            </button>
            <div className={styles.counter}>
              {imgIndex + 1} / {p.imgs.length}
            </div>
          </>
        )}

        <div className={styles.iconWrap}>
          {p.icon}
        </div>
      </div>

      <div className={styles.body}>
        <h3>{p.title}</h3>
        <p>{p.desc}</p>
        <Link to={`/productos#${p.id}`} className={styles.link}>
          Ver más <RiArrowRightLine size={14} />
        </Link>
      </div>
    </div>
  )
}

export default function ProductosHome() {
  return (
    <section className={`${styles.section} section`}>
      <div className="container">

        <div className={styles.head}>
          <span className={styles.tag}>Lo que producimos</span>
          <h2 className={styles.title}>
            Nuestros <em>productos</em>
          </h2>
          <p className={styles.sub}>
            Materiales de alta calidad para todo tipo de proyectos de construcción en la región.
          </p>
        </div>

        <div className={styles.grid}>
          {productos.map(p => (
            <ProductCard key={p.id} producto={p} />
          ))}
        </div>

      </div>
    </section>
  )
}