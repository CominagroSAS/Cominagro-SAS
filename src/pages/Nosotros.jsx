import { RiArrowRightLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import styles from './Nosotros.module.css'

const valores = [
  { icon: '⭐', title: 'Calidad', desc: 'Materiales que cumplen las normas técnicas colombianas en cada proceso.' },
  { icon: '🤝', title: 'Compromiso', desc: 'Con nuestros clientes y con el desarrollo sostenible de Nariño.' },
  { icon: '🌿', title: 'Responsabilidad', desc: 'Extracción consciente y respetuosa con el medio ambiente y la comunidad.' },
  { icon: '💡', title: 'Innovación', desc: 'Mejora continua de procesos, productos y canales de atención al cliente.' },
]

const timeline = [
  { year: 'Años 90s', title: 'Fundación', desc: 'Inicio de operaciones como mina artesanal familiar en Nariño, abasteciendo proyectos locales.' },
  { year: '2005', title: 'Apertura Ladrillera', desc: 'Incorporación de la Ladrillera Las Terrazas, ampliando el portafolio con bloques y ladrillos.' },
  { year: '2012', title: 'Expansión regional', desc: 'Ampliación de cobertura a 8 municipios de Nariño. Flota de transporte propia.' },
  { year: '2018', title: 'Constitución S.A.S.', desc: 'Formalización jurídica como Cominagro S.A.S. Inversión en maquinaria y procesos.' },
  { year: '2024', title: 'Transformación digital', desc: 'Modernización de procesos comerciales y tecnológicos para seguir creciendo.' },
]

const ventajas = [
  { icon: '✅', title: 'Materiales certificados', desc: 'Cumplimos normas colombianas de construcción. Control de calidad en cada proceso.' },
  { icon: '🚚', title: 'Despacho a obra', desc: 'Entregamos donde usted necesite dentro de la región. Flota propia para cumplir tiempos.' },
  { icon: '🤝', title: 'Asesoría personalizada', desc: 'Le ayudamos a elegir el material correcto. Atención directa, sin intermediarios.' },
  { icon: '💲', title: 'Precios directos de mina', desc: 'Al ser productores directos, ofrecemos los mejores precios del mercado.' },
]

export default function Nosotros() {
  return (
    <>
      {/* PAGE HERO */}
      <section className={styles.pageHero}>
        <div className="container">
          <div className={styles.breadcrumb}>
            Inicio <em>/ Nosotros</em>
          </div>
          <h1>Sobre <em>Cominagro</em></h1>
          <p>Una empresa nariñense con más de 27 años construyendo la región con materiales de calidad y compromiso real.</p>
        </div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section className={`${styles.section} section`}>
        <div className="container">
          <div className={styles.split}>
            <div className={styles.imgWrap}>
              <img
                src="public\cominagro-nosotros.jpg"
                alt="Mina Las Terrazas"
                className={styles.img}
              />
              <div className={styles.imgBadge}>
                <div className={styles.badgeN}>+27</div>
                <div className={styles.badgeL}>años de experiencia</div>
              </div>
            </div>
            <div className={styles.text}>
              <span className={styles.tag}>Quiénes somos</span>
              <h2>Una empresa con <em>raíces en Nariño</em></h2>
              <p>Cominagro S.A.S. es una empresa que construye confianza desde hace más de 27 años, producimos, extraemos y comercializamos materiales de construcción de alta calidad para proyectos de vivienda, infraestructura, urbanismo e industria.
              Nuestra operación integra tres unidades estratégicas: </p>
              <p>🏗️ Prefabricados</p>
              <p>Bloques de concreto y adoquines.</p>
              <p>⛰️ Mina</p>
              <p>Arena negra, arena blanca y granzón.</p>
              <p>🧱 Ladrillera</p>
              <p>Ladrillo farol para divisiones y ladrillo visto.</p>
              <p>Cada uno de nuestros productos es elaborado bajo estándares propios de calidad, garantizando resistencia, durabilidad y el respaldo de una empresa con más de dos décadas de experiencia al servicio de la construcción.</p>
              <div className={styles.counters}>
                <div className={styles.counter}>
                  <span className={styles.counterN}>+9</span>
                  <span className={styles.counterL}>Proyectos completados</span>
                </div>
                <div className={styles.counter}>
                  <span className={styles.counterN}>+500</span>
                  <span className={styles.counterL}>Clientes atendidos</span>
                </div>
                <div className={styles.counter}>
                  <span className={styles.counterN}>8</span>
                  <span className={styles.counterL}>Municipios cubiertos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className={`${styles.section} section section-alt`}>
        <div className="container">
          <div className={styles.head}>
            <span className={styles.tag}>Nuestros valores</span>
            <h2>Lo que <em>nos define</em></h2>
          </div>
          <div className={styles.valoresGrid}>
            {valores.map((v, i) => (
              <div key={i} className={styles.valorCard}>
                <div className={styles.valorIcon}>{v.icon}</div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HISTORIA + VENTAJAS */}
      <section className={`${styles.section} section`}>
        <div className="container">
          <div className={styles.split2}>

            {/* Timeline */}
            <div>
              <div className={styles.head2}>
                <span className={styles.tag}>Historia</span>
                <h2>Nuestra <em>trayectoria</em></h2>
              </div>
              <div className={styles.timeline}>
                {timeline.map((t, i) => (
                  <div key={i} className={styles.tlItem}>
                    <div className={styles.tlDot} />
                    <div className={styles.tlYear}>{t.year}</div>
                    <h4>{t.title}</h4>
                    <p>{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Ventajas */}
            <div>
              <div className={styles.head2}>
                <span className={styles.tag}>Por qué elegirnos</span>
                <h2>Nuestras <em>ventajas</em></h2>
              </div>
              <div className={styles.ventajas}>
                {ventajas.map((v, i) => (
                  <div key={i} className={styles.ventajaItem}>
                    <div className={styles.ventajaIcon}>{v.icon}</div>
                    <div>
                      <h4>{v.title}</h4>
                      <p>{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaInner}>
            <span className={styles.ctaTag}>¿Listo para construir?</span>
            <h2>Hablemos sobre <em>su proyecto</em></h2>
            <p>Estamos disponibles para asesorarle y ofrecerle la mejor solución en materiales de construcción.</p>
            <div className={styles.ctaBtns}>
              <Link to="/contacto" className={styles.btnPrimary}>
                Contactar ahora <RiArrowRightLine size={18} />
              </Link>
              <Link to="/productos" className={styles.btnOutline}>
                Ver productos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}