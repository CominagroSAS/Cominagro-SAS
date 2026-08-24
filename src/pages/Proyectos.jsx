import { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiArrowRightLine, RiMapPin2Line } from 'react-icons/ri'
import { proyectos, categoriasproyectos } from '../data/proyectos'
import styles from './Proyectos.module.css'

const stats = [
  { n: '+ 500',    l: 'Proyectos entregados' },
  //{ n: '2',    l: 'Parques intervenidos' },
  { n: '100%', l: 'Producción local' },
  { n: '27+',  l: 'Años de experiencia' },
]

export default function Proyectos() {
  const [filtro, setFiltro] = useState('all')

  const proyectosFiltrados = filtro === 'all'
    ? proyectos
    : proyectos.filter(p => p.category === filtro)

  return (
    <>
      {/* PAGE HERO */}
      <section className={styles.pageHero}>
        <div className="container">
          <div className={styles.breadcrumb}>
            Inicio <em>/ Proyectos</em>
          </div>
          <h1>Proyectos <em>Realizados</em></h1>
          <p>Obras en toda la región de Nariño que confían en la calidad y respaldo de Cominagro S.A.S.</p>
        </div>
      </section>

      {/* STATS BANNER */}
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

      {/* PROYECTOS */}
      <section className={`${styles.section} ${styles.sectionFirst} section`}>
        <div className="container">

          {/* Filtros */}
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

          {/* Grid */}
          <div className={styles.grid}>
            {proyectosFiltrados.map(p => (
              <div key={p.id} className={styles.card}>
                <div className={styles.imgWrap}>
                  <img src={p.img} alt={p.title} loading="lazy" />
                  <span className={styles.cat}>
                    {p.category === 'parques' ? 'Parque' : 'Edificio'}
                  </span>
                </div>
                <div className={styles.body}>
                  <div className={styles.ubicacion}>
                    <RiMapPin2Line size={13} />
                    {p.ubicacion}
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className={styles.materiales}>
                    {p.materiales.map(m => (
                      <span key={m} className={styles.material}>{m}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
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