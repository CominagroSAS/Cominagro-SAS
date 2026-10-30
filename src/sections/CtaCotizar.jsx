import { useState } from 'react'
import { RiSendPlaneLine, RiMailLine, RiWhatsappLine } from 'react-icons/ri'
import emailjs from '@emailjs/browser'
import styles from './CtaCotizar.module.css'

const initialForm = {
  nombre: '',
  telefono: '',
  producto: '',
  correo: '',
  mensaje: '',
}

export default function CtaCotizar() {
  const [form, setForm]       = useState(initialForm)
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)

    // Credenciales de EmailJS de Cominagro
    const SERVICE_ID  = 'service_8a6df9n'
    const TEMPLATE_ID = 'template_4a2gm6i'
    const PUBLIC_KEY  = 'MXLVG8SDYmqdFHtNH'

    const templateParams = {
      from_name: form.nombre,
      empresa: 'No especificada (Sección CTA)',
      correo: form.correo || 'No especificado',
      telefono: form.telefono || 'No especificado',
      producto: form.producto,
      cantidad: 'No especificada',
      mensaje: form.mensaje,
    }

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        setLoading(false)
        setSuccess(true)
        setForm(initialForm)
        setTimeout(() => setSuccess(false), 4000)
      })
      .catch((err) => {
        console.error('Error al enviar:', err)
        setLoading(false)
        alert('Hubo un error al enviar la solicitud. Intente de nuevo o escríbanos por WhatsApp.')
      })
  }

  return (
    <section className={styles.section} id="cotizar">
      <div className="container">
        <div className={styles.inner}>

          {/* Izquierda */}
          <div className={styles.left}>
            <span className={styles.tag}>Estamos listos</span>
            <h2 className={styles.title}>
              Cotiza tus materiales{' '}
              <em>con nosotros</em>
            </h2>
            <p className={styles.sub}>
              Te asesoramos y brindamos la mejor solución para tu proyecto.
              Atendemos constructoras, ferreterías y clientes particulares.
            </p>

            <div className={styles.channels}>
              <a 
                href="mailto:ventas-cominagro@hotmail.com"
                className={styles.channel}
              >
                <div className={`${styles.channelIcon} ${styles.email}`}>
                  <RiMailLine size={18} />
                </div>
                <div className={styles.channelText}>
                  <h5>Correo electrónico</h5>
                  <p>ventas-cominagro@hotmail.com</p>
                </div>
              </a>

              <a 
                href="https://wa.me/573175017359?text=Hola%20Cominagro%2C%20quisiera%20cotizar"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.channel}
              >
                <div className={`${styles.channelIcon} ${styles.wsp}`}>
                  <RiWhatsappLine size={18} />
                </div>
                <div className={styles.channelText}>
                  <h5>WhatsApp</h5>
                  <p>3175017359</p>
                </div>
              </a>
            </div>
          </div>

          {/* Formulario */}
          <div className={styles.formWrap}>
            <form onSubmit={handleSubmit} className={styles.form}>
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

              <div className={styles.row2}>
                <div className={styles.group}>
                  <label>Producto de interés *</label>
                  <select
                    name="producto"
                    value={form.producto}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Seleccionar…</option>
                    <option value="Arena negra">Arena negra</option>
                    <option value="Arena blanca">Arena blanca</option>
                    <option value="Granzón">Granzón</option>
                    <option value="Bloques en arcilla">Bloques en arcilla</option>
                    <option value="Ladrillos">Ladrillos</option>
                    <option value="Adoquines / Prefabricados">Adoquines / Prefabricados</option>
                    <option value="Varios productos">Varios productos</option>
                  </select>
                </div>
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
              </div>

              <div className={styles.group}>
                <label>Cuéntenos sobre su proyecto *</label>
                <textarea
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                  placeholder="Tipo de obra, cantidad estimada, ubicación…"
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
                  '¡Mensaje enviado! ✓'
                ) : (
                  <><RiSendPlaneLine size={16} /> Solicitar cotización</>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}