import { useState } from 'react'
import { RiMapPin2Line, RiPhoneLine, RiMailLine, RiTimeLine, RiSendPlaneLine, RiWhatsappLine } from 'react-icons/ri'
import styles from './Contacto.module.css'

const initialForm = {
  nombre: '',
  empresa: '',
  correo: '',
  telefono: '',
  producto: '',
  cantidad: '',
  mensaje: '',
}

export default function Contacto() {
  const [form, setForm]       = useState(initialForm)
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      setForm(initialForm)
      setTimeout(() => setSuccess(false), 4000)
    }, 1500)
  }

  return (
    <>
      {/* PAGE HERO */}
      <section className={styles.pageHero}>
        <div className="container">
          <div className={styles.breadcrumb}>
            Inicio <em>/ Contacto</em>
          </div>
          <h1>Hablemos sobre <em>su proyecto</em></h1>
          <p>Estamos listos para atender su cotización y resolver todas sus dudas. Atención directa, sin intermediarios.</p>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className={`${styles.section} ${styles.sectionFirst} section`}>
        <div className="container">
          <div className={styles.grid}>

            {/* Info */}
            <div className={styles.infoCol}>
              <div className={styles.infoCard}>
                <h3>Información de contacto</h3>

                <div className={styles.det}>
                  <div className={styles.detIco}>
                    <RiMapPin2Line size={18} />
                  </div>
                  <div className={styles.detTxt}>
                    <h5>Dirección</h5>
                    <p>Km 4 Vía al Sur</p>
                    <small>Pasto, Nariño – Colombia</small>
                  </div>
                </div>

                <div className={styles.det}>
                  <div className={styles.detIco}>
                    <RiPhoneLine size={18} />
                  </div>
                  <div className={styles.detTxt}>
                    <h5>Teléfonos</h5>
                    <p>317 5017359</p>
                  </div>
                </div>

                <div className={styles.det}>
                  <div className={styles.detIco}>
                    <RiMailLine size={18} />
                  </div>
                  <div className={styles.detTxt}>
                    <h5>Correo electrónico</h5>
                    <p>ventas-cominagro@hotmail.com</p>
                  </div>
                </div>

                <div className={styles.det}>
                  <div className={styles.detIco}>
                    <RiTimeLine size={18} />
                  </div>
                  <div className={styles.detTxt}>
                    <h5>Horario de atención</h5>
                    <p>Lun – Vie: 7:30am a 11:30am - 1:30pm a 5:00pm</p>
                    <small>Sáb: 7:30am – 12:00m</small>
                  </div>
                </div>

                {/* MAPA GOOGLE EMBED */}
                <div className={styles.mapContainer}>
                  <iframe
                    title="Ubicación Cominagro Las Terrazas"
                    src="https://maps.google.com/maps?q=Mina%20Ladrillera%20y%20Prefabricados%20Las%20Terrazas%20Cominagro%20SAS%20Pasto&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              <a 
                href={'https://wa.me/573175017359?text=Hola%20Cominagro%2C%20quisiera%20cotizar'}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.wspBtn}
              >
                <RiWhatsappLine size={22} />
                Escribir por WhatsApp
              </a>
            </div>

            {/* Formulario */}
            <div className={styles.formCard}>
              <h3>Solicitar cotización</h3>
              <form onSubmit={handleSubmit}>

                <div className={styles.row2}>
                  <div className={styles.group}>
                    <label>Nombre completo *</label>
                    <input
                      type="text"
                      name="nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      placeholder="Su nombre"
                      required
                    />
                  </div>
                  <div className={styles.group}>
                    <label>Empresa / Obra</label>
                    <input
                      type="text"
                      name="empresa"
                      value={form.empresa}
                      onChange={handleChange}
                      placeholder="Nombre del proyecto"
                    />
                  </div>
                </div>

                <div className={styles.row2}>
                  <div className={styles.group}>
                    <label>Correo electrónico</label>
                    <input
                      type="email"
                      name="correo"
                      value={form.correo}
                      onChange={handleChange}
                      placeholder="correo@ejemplo.com"
                    />
                  </div>
                  <div className={styles.group}>
                    <label>Teléfono *</label>
                    <input
                      type="tel"
                      name="telefono"
                      value={form.telefono}
                      onChange={handleChange}
                      placeholder="300 000 0000"
                      required
                    />
                  </div>
                </div>

                <div className={styles.group}>
                  <label>Producto de interés *</label>
                  <select
                    name="producto"
                    value={form.producto}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Seleccionar producto…</option>
                    <option value="Arena negra">Arena negra</option>
                    <option value="Arena blanca">Arena blanca</option>
                    <option value="Recebo">Recebo</option>
                    <option value="Granzón">Granzón</option>
                    <option value="Bloques estructurales">Bloques estructurales</option>
                    <option value="Bloques no estructurales">Bloques no estructurales</option>
                    <option value="Ladrillo visto">Ladrillo visto</option>
                    <option value="Ladrillo estructural">Ladrillo estructural</option>
                    <option value="Adoquines / Prefabricados">Adoquines / Prefabricados</option>
                    <option value="Varios productos">Varios productos</option>
                  </select>
                </div>

                <div className={styles.group}>
                  <label>Cantidad estimada</label>
                  <input
                    type="text"
                    name="cantidad"
                    value={form.cantidad}
                    onChange={handleChange}
                    placeholder="Ej: 10 m³ de arena, 500 bloques…"
                  />
                </div>

                <div className={styles.group}>
                  <label>Descripción del proyecto *</label>
                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    placeholder="Cuéntenos sobre su obra: tipo de construcción, ubicación, fecha de inicio…"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className={`${styles.submit} ${success ? styles.submitSuccess : ''}`}
                  disabled={loading}
                >
                  {loading ? (
                    'Enviando…'
                  ) : success ? (
                    '¡Solicitud enviada! ✓'
                  ) : (
                    <><RiSendPlaneLine size={16} /> Enviar solicitud de cotización</>
                  )}
                </button>

                <p className={styles.note}>
                  Le responderemos en menos de 24 horas hábiles.
                </p>

              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}