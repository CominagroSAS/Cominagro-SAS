import React from 'react'
import styles from './StatsBar.module.css'

const items = [
  { label: 'Concretos y mezclas',  sub: 'Mezclas y morteros' },
  { label: 'Arena Blanca', sub: 'Acabados finos' },
  { label: 'Granzón',      sub: 'Base y rellenos' },
  { label: 'Ladrillos',      sub: 'Ladrillo visto y farol' },
  { label: 'Adoquines',    sub: 'Bloques de concreto y adoquines' },
]

export default function StatsBar() {
  return (
    <div className={styles.bar}>
      <div className="container">
        <div className={styles.inner}>
          {items.map((item, i) => (
            <React.Fragment key={item.label}>
              <div className={styles.item}>
                <span className={styles.label}>{item.label}</span>
                <span className={styles.sub}>{item.sub}</span>
              </div>
              {i < items.length - 1 && (
                <div className={styles.divider} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}