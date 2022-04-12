import MainHead from '../../../components/MainHead'
import styles from '../../../styles/Promotor.module.css'
import Image from 'next/image'
import Link from 'next/link'
import LayoutMenu from '../../../components/LayoutMenu'
import MenuPromo from '../../../components/promo/MenuPromo'

export default function Promotor () {
  return (
    <>
      <MainHead tituloPestana='Promotor' />
      <LayoutMenu/>
        <MenuPromo />
        <div className={styles.container}>
        <center><font size={6} face="Work Sans" color="007200"><h1>PlantMatica para promotores</h1></font></center>
        <h2>
          A través de este medio, tendrás la posibilidad de promocionar tu
          negocio y tus productos a un precio justo.
        </h2>
        <Link href="/user/promo/SignPromotor">No estas registrado como promotor, haz click aqui para registrarte</Link>
        </div>
      
    </>
  )
}
