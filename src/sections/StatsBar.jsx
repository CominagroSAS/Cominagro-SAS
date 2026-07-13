import styles from './StatsBar.module.css'

const items = [
  { label: 'Arena Negra',   sub: 'Mezclas y morteros' },
  { label: 'Arena Blanca',  sub: 'Acabados finos' },
  { label: 'Granzón',       sub: 'Base y rellenos' },
  { label: 'Bloques',       sub: 'Arcilla y prefabricados' },
  { label: 'Adoquines',     sub: 'Pisos y vías' },
]

export default function StatsBar() {
  return (
    <div className={styles.bar}>
      <div className="container">
        <div className={styles.inner}>
          {items.map((item, i) => (
            <>
              <div key={item.label} className={styles.item}>
                <span className={styles.label}>{item.label}</span>
                <span className={styles.sub}>{item.sub}</span>
              </div>
              {i < items.length - 1 && (
                <div key={`div-${i}`} className={styles.divider} />
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  )
}