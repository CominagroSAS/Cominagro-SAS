import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { RiMenu3Line, RiCloseLine, RiFileTextLine, RiArrowDownSLine } from 'react-icons/ri'
import styles from './Navbar.module.css'

const Logo = () => (
  <Link to="/" className={styles.logo}>
    <img
      src="/cominagro-logo.jpg"
      alt="Cominagro S.A.S"
      className={styles.logoImg}
    />
  </Link>
)

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/nosotros', label: 'Nosotros' },
  {
    label: 'Productos',
    to: '/productos',
    dropdown: [
      { to: '/productos#prefabricados', label: 'Prefabricados' },
      { to: '/productos#bloques',       label: 'Bloques en Arcilla' },
      { to: '/productos#ladrillera',    label: 'Ladrillera' },
      { to: '/productos#mineria',       label: 'Minería' },
    ],
  },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/contacto',  label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false)
  const [menuOpen,     setMenuOpen]     = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className="container">
          <div className={styles.inner}>
            <Logo />

            {/* Links desktop */}
            <nav className={styles.links}>
              {navLinks.map(link =>
                link.dropdown ? (
                  <div
                    key={link.label}
                    className={styles.dropdown}
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `${styles.link} ${isActive ? styles.active : ''}`
                      }
                    >
                      {link.label}
                      <RiArrowDownSLine
                        size={16}
                        className={`${styles.chevron} ${dropdownOpen ? styles.chevronOpen : ''}`}
                      />
                    </NavLink>
                    {dropdownOpen && (
                      <div className={styles.dropdownMenu}>
                        {link.dropdown.map(item => (
                          <Link key={item.to} to={item.to} className={styles.dropdownItem}>
                            <span className={styles.dot} />
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end
                    className={({ isActive }) =>
                      `${styles.link} ${isActive ? styles.active : ''}`
                    }
                  >
                    {link.label}
                  </NavLink>
                )
              )}
            </nav>

            {/* CTA desktop */}
            <Link to="/contacto" className={styles.cta}>
              <RiFileTextLine size={16} />
              Cotizar
            </Link>

            {/* Hamburger */}
            <button
              className={styles.hamburger}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menú"
            >
              {menuOpen
                ? <RiCloseLine size={24} />
                : <RiMenu3Line size={24} />
              }
            </button>
          </div>
        </div>
      </header>

      {/* Menú móvil */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
        {navLinks.map(link => (
          <div key={link.label}>
            <NavLink
              to={link.to}
              onClick={closeMenu}
              className={({ isActive }) =>
                `${styles.mobileLink} ${isActive ? styles.mobileLinkActive : ''}`
              }
            >
              {link.label}
            </NavLink>
            {link.dropdown?.map(item => (
              <Link
                key={item.to}
                to={item.to}
                onClick={closeMenu}
                className={styles.mobileSub}
              >
                → {item.label}
              </Link>
            ))}
          </div>
        ))}
        <Link to="/contacto" onClick={closeMenu} className={styles.mobileCta}>
          Cotizar ahora →
        </Link>
      </div>
    </>
  )
}