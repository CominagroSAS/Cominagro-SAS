import { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiArrowRightLine, RiFileTextLine, RiArrowDownLine, RiTimeLine, RiGroupLine, RiMapPin2Line, RiVolumeUpLine, RiVolumeMuteLine } from 'react-icons/ri'
import styles from './Hero.module.css'

const stats = [
  {
    icon: <RiTimeLine size={28} />,
    number: '+27',
    label: 'Años de experiencia',
  },
  {
    icon: <RiGroupLine size={28} />,
    number: 'Producción',
    label: 'propia',
    accent: true,
  },
  {
    icon: <RiMapPin2Line size={28} />,
    number: 'Cobertura',
    label: 'regional',
    accent: true,
  },
]

export default function Hero() {
  const [muted, setMuted] = useState(true)

  return (
    <section className={styles.hero}>

      {/* Video de fondo */}
      <div className={styles.videoBg}>
        <video
          autoPlay
          loop
          playsInline
          muted={muted}
          className={styles.video}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.overlay} />

      {/* Botón mute/unmute */}
      <button
        className={styles.muteBtn}
        onClick={() => setMuted(!muted)}
        aria-label={muted ? 'Activar sonido' : 'Silenciar'}
      >
        {muted
          ? <RiVolumeMuteLine size={20} />
          : <RiVolumeUpLine size={20} />
        }
        <span>{muted ? 'Activar sonido' : 'Silenciar'}</span>
      </button>

      <div className="container">
        <div className={styles.inner}>

          <div className={styles.content}>
            <span className={styles.tag}>
              Nariño · Colombia · Producción Propia
            </span>

            <h1 className={styles.title}>
              Materiales de construcción de{' '}
              <em className={styles.accent}>alta calidad</em>
            </h1>

            <p className={styles.sub}>
              Prefabricados, mina y ladrillera
            </p>

            <p className={styles.sub}>
              Más de <strong>27 años</strong> construyendo contigo
            </p>

            <div className={styles.btns}>
              <Link to="/productos" className={styles.btnPrimary}>
                Ver productos <RiArrowRightLine size={18} />
              </Link>
              <Link to="/contacto" className={styles.btnOutline}>
                Cotizar ahora <RiFileTextLine size={18} />
              </Link>
            </div>
          </div>

          <div className={styles.stats}>
            {stats.map((s, i) => (
              <div key={i} className={styles.stat}>
                <div className={styles.statIcon}>{s.icon}</div>
                <div className={styles.statText}>
                  <span className={`${styles.statNumber} ${s.accent ? styles.statAccent : ''}`}>
                    {s.number}
                  </span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>


{/* 
      <div className={styles.scroll}>
        <RiArrowDownLine size={20} />
        <span>SCROLL</span>
      </div>*/}
    </section>
  )
}