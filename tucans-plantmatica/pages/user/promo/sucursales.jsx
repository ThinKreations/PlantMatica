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
        <font size={6} face="Work Sans" color="007200"><h1>Sucursales</h1></font>
        
        
        <Link href="./Nsucursales"><button></button></Link>
        
        <p>
          Aki van las sucursales
        </p>
        <Link href="/user/promo/SignPromotor">No estas registrado como promotor, haz click aqui para registrarte</Link>
      
        </div>
    </>
  )
}
