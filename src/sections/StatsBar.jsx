import React from 'react'
import styles from './StatsBar.module.css'

const items = [
  { label: 'Prefabricados',  sub: 'Adoquines (vías, andenes, parques) y bloques de concreto para edificación.' },
  { label: 'Mina', sub: 'Arena negra (concretos y cimentación), recebo/granzón (terrenos) y arena blanca (mortero, pañete y mampostería).' },
  { label: 'Ladrillera',      sub: 'Ladrillo farol para divisiones internas/externas y fachadas a la vista.' },
  /*
  { label: 'Ladrillos',      sub: 'Ladrillo visto y farol' },
  { label: 'Adoquines',    sub: 'Bloques de concreto y adoquines' },
   */
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