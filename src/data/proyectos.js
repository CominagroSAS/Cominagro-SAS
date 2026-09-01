import { productos } from './productos'

export const proyectos = [
  {
    id: 1,
    title: 'Parque Panorámico',
    ubicacion: 'Pasto, Nariño',
    category: 'parques',
    img: '/proyectos/proyecto1.jpg',//1280x720
    productosIds: ['adoquin-cuadrado'],
    desc: 'Intervención del parque El Panorámico con adoquín peatonales y vehiculares Cominagro.',
  },
  {
    id: 2,
    title: 'Parque Morasurco I',
    ubicacion: 'Pasto, Nariño',
    category: 'parques',
    img: '/proyectos/proyecto2.jpg',//1280x720
    productosIds: ['gramoquin', 'adoquin-cuadrado', 'adoquin-rectangular-peatonal'], // Tres materiales asignados
    desc: 'Primera fase del parque Morasurco con soluciones de alta resistencia Cominagro.',
  },
  /*
  {
    id: 3,
    title: 'Parque Morasurco II',
    ubicacion: 'Pasto, Nariño',
    category: 'parques',
    img: '/proyectos/proyecto3.jpg',
    productosIds: ['adoquin-cuadrado', 'gramoquin'], // Dos materiales asignados
    desc: 'Segunda fase de intervención del parque Morasurco con materiales de mampostería.',
  },
  */
 {
    id: 4,
    title: 'Adoquinamiento vía municipio de Belén',
    ubicacion: 'Belén, Nariño',
    category: 'infraestructura',
    img: '/proyectos/adoquinamiento-belen.jpg', // 452x408
    productosIds: ['adoquin-cruz-10'],
    desc: 'Proyecto de infraestructura para vías y superficies exteriores de alto tráfico con adoquín Cruz No. 10.',
  },
  {
    id: 5,
    title: 'Edificio Matizz',
    ubicacion: 'Pasto, Nariño',
    category: 'edificios',
    img: '/proyectos/edificio-matizz.jpg', //900x1600
    productosIds: ['bloque-12'],
    desc: 'Proyecto residencial moderno realizado con mampostería estructural y no estructural en bloque de concreto.',
  },
  {
    id: 6,
    title: 'Edificio Mirarí Las Cuadras',
    ubicacion: 'Pasto, Nariño',
    category: 'edificios',
    img: '/proyectos/edificio-mirari.jpg', //1080x609
    productosIds: ['farol-estirado-4'],
    desc: 'Proyecto residencial con mampostería interna realizada con soluciones de ladrillo cerámico Cominagro.',
  },
  
  {
    id: 7,
    title: 'Edificio B15',
    ubicacion: 'Pasto, Nariño',
    category: 'edificios',
    img: '/proyectos/edificio-b15.jpg', //900x1600
    productosIds: ['farol-bloque-liso-10'],
    desc: 'Proyecto residencial y comercial de consultorios y oficinas desarrollado con soluciones Cominagro.',
  },
  
  {
    id: 8,
    title: 'Edificio Portal de Morazurco',
    ubicacion: 'Pasto, Nariño',
    category: 'edificios',
    img: '/proyectos/portal-morazurco.jpg', //899x1600
    productosIds: ['farol-bloque-liso-10'],
    desc: 'Proyecto residencial multifamiliar ejecutado con ladrillos farol Cominagro para divisiones internas y externas.',
  },
  {
    id: 9,
    title: 'Edificio Montecarlo',
    ubicacion: 'Pasto, Nariño',
    category: 'edificios',
    img: '/proyectos/edificio-montecarlo.jpg', //912x1600
    productosIds: ['farol-visto'],
    desc: 'Proyecto residencial destacado por sus acabados en fachada y mampostería vista con ladrillo de alta calidad.',
  },
  {
    id: 10,
    title: 'Edificio Recolecta',
    ubicacion: 'Pasto, Nariño',
    category: 'edificios',
    img: '/proyectos/edificio-recolecta.jpg', //912x1600
    productosIds: ['farol-estirado-8'],
    desc: 'Proyecto residencial destacado por sus acabados en fachada y mampostería vista con ladrillo de alta calidad.',
  },

]

export const categoriasproyectos = [
  { key: 'all', label: 'Todos' },
  { key: 'parques', label: 'Parques' },
  { key: 'edificios', label: 'Edificios' },
  { key: 'infraestructura', label: 'Infraestructura' },
]