import styles from './PorQue.module.css'

const razones = [
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M32 8L8 28v28h16V40h16v16h16V28L32 8z" />
      </svg>
    ),
    title: 'Origen responsable',
    desc: 'Extraemos los materiales de nuestra mina de manera responsable con el medio ambiente.',
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="8" y="24" width="48" height="32" rx="2" />
        <path d="M16 24V16a16 16 0 0132 0v8" />
        <circle cx="32" cy="40" r="4" fill="currentColor" stroke="none" />
      </svg>
    ),
    title: 'Producción propia',
    desc: 'Controlamos todo el proceso para garantizar calidad constante en cada entrega.',
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="32" cy="28" r="16" />
        <path d="M20 52a12 12 0 0124 0" />
        <path d="M24 24l6 6 10-10" strokeWidth="2.5" />
      </svg>
    ),
    title: 'Experiencia',
    desc: 'Más de 27 años abasteciendo proyectos en Nariño y la región.',
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M32 8l6 12 14 2-10 10 2 14-12-6-12 6 2-14L12 22l14-2z" />
      </svg>
    ),
    title: 'Confianza',
    desc: 'Cumplimiento, seriedad y respaldo en cada entrega. Su obra es nuestra prioridad.',
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M32 8c0 0-18 8-18 26 0 10 8 18 18 22 10-4 18-12 18-22C50 16 32 8 32 8z" />
        <path d="M22 34l8 8 12-14" strokeWidth="2.5" />
      </svg>
    ),
    title: 'Compromiso',
    desc: 'Aportamos al desarrollo de nuestra región y nuestra gente en cada proyecto.',
  },
]

export default function PorQue() {
  return (
    <section className={`${styles.section} section section-alt`}>
      <div className="container">

        <div className={styles.head}>
          <h2 className={styles.title}>
            ¿Por qué <em>elegir Cominagro?</em>
          </h2>
        </div>

        <div className={styles.grid}>
          {razones.map((r, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.icon}>{r.icon}</div>
              <h4>{r.title}</h4>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}