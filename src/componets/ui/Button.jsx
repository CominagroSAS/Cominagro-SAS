import { Link } from 'react-router-dom'
import styles from './Button.module.css'

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  fullWidth = false,
}) {
  const classes = [
    styles.btn,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : '',
  ].join(' ')

  // Enlace interno (react-router)
  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  // Enlace externo
  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  // Botón normal
  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  )
}