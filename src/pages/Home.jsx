import Hero from '../sections/Hero'
import StatsBar from '../sections/StatsBar'
import Productos from '../sections/ProductosHome'
import PorQue from '../sections/PorQue'
import Galeria from '../sections/Galeria'
import CtaCotizar from '../sections/CtaCotizar'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Productos />
      <PorQue />
      <Galeria />
      <CtaCotizar />
    </>
  )
}