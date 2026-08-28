import { useState, useEffect } from 'react'
import { RiRuler2Line, RiScales2Line, RiGridLine, RiInformationLine, RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import { usoLabels } from '../data/productos'
import styles from '../pages/Proyectos.module.css'

export default function MaterialCarousel({ materiales, isLarge = false }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const total = materiales.length

  useEffect(() => {
    if (total <= 1 || isHovered) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % total)
    }, 3500)

    return () => clearInterval(interval)
  }, [total, isHovered])

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % total)
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + total) % total)

  if (total === 0) return null

  const prod = materiales[currentIndex]
  const ficha = prod?.ficha
  const imagenProducto = prod?.imgs?.[0]

  return (
    <div 
      className={`${styles.carouselContainer} ${isLarge ? styles.carouselLarge : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.productBlock}>
        <div className={styles.productHeader}>
          <div className={styles.productTitleBox}>
            <div className={styles.productTagRow}>
              <span className={styles.productTag}>
                {total > 1 ? `Material ${currentIndex + 1} de ${total}` : 'Material Utilizado'}
              </span>
              
              {total > 1 && (
                <div className={styles.arrowControls}>
                  <button type="button" onClick={prevSlide} className={styles.arrowBtn} aria-label="Anterior material">
                    <RiArrowLeftSLine size={isLarge ? 20 : 16} />
                  </button>
                  <button type="button" onClick={nextSlide} className={styles.arrowBtn} aria-label="Siguiente material">
                    <RiArrowRightSLine size={isLarge ? 20 : 16} />
                  </button>
                </div>
              )}
            </div>
            
            <strong className={styles.productName}>{prod.title}</strong>
          </div>

          {imagenProducto && (
            <div className={styles.productThumb}>
              <img src={imagenProducto} alt={prod.title} />
            </div>
          )}
        </div>

        {ficha && (
          <div className={styles.techGrid}>
            {ficha.ancho && ficha.alto && ficha.largo && (
              <div className={styles.techItem}>
                <RiRuler2Line size={isLarge ? 20 : 16} className={styles.techIcon} />
                <div className={styles.techText}>
                  <span className={styles.techLabel}>Dimensiones</span>
                  <span className={styles.techVal}>{`${ficha.ancho} × ${ficha.largo} × ${ficha.alto}`}</span>
                </div>
              </div>
            )}

            {ficha.peso && (
              <div className={styles.techItem}>
                <RiScales2Line size={isLarge ? 20 : 16} className={styles.techIcon} />
                <div className={styles.techText}>
                  <span className={styles.techLabel}>Peso</span>
                  <span className={styles.techVal}>{ficha.peso}</span>
                </div>
              </div>
            )}

            {ficha.unidadesM2 && (
              <div className={styles.techItem}>
                <RiGridLine size={isLarge ? 20 : 16} className={styles.techIcon} />
                <div className={styles.techText}>
                  <span className={styles.techLabel}>Rendimiento</span>
                  <span className={styles.techVal}>{ficha.unidadesM2}</span>
                </div>
              </div>
            )}

            {prod.uso && (
              <div className={styles.techItem}>
                <RiInformationLine size={isLarge ? 20 : 16} className={styles.techIcon} />
                <div className={styles.techText}>
                  <span className={styles.techLabel}>Uso</span>
                  <span className={styles.techVal}>{usoLabels[prod.uso] || prod.uso}</span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}