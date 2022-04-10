import MainHead from '../../../components/MainHead'
import styles from '../../../styles/Promotor.module.css'
import Image from 'next/image'
import Link from 'next/link'
import LayoutIndex from '../../../components/LayoutIndex'
import MenuPromo from '../../../components/promo/MenuPromo'

export default function Promotor () {
  return (
    <>
      <MainHead tituloPestana='Promotor' />
      <LayoutIndex>
        <MenuPromo />
        <h1>PlantMatica para promotores</h1>
        <p>
          A través de este medio, tendrás la posibilidad de promocionar tu
          negocio y tus productos a un precio justo.
        </p>
        <Link href="/user/promo/SignPromotor">No estas registrado como promotor, haz click aqui para registrarte</Link>
      </LayoutIndex>
    </>
  )
}
