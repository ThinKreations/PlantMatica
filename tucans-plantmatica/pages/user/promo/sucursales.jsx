import MainHead from '../../../components/MainHead'
import styles from '../../../styles/Promotor.module.css'
import Image from 'next/image'
import Link from 'next/link'
import LayoutMenu from '../../../components/LayoutMenu'
import MenuPromo from '../../../components/promo/MenuPromo'

export default function Promotor () {
  return (
    <>
      <MainHead tituloPestana='Sucursales' />
      <LayoutMenu/>
        <MenuPromo />
        <div className={styles.container}>
        <center><font size={6} face="Work Sans" color="007200"><h1>Sucursales</h1></font></center>
        
        
        <Link href="./Nsucursales"><button className={styles.btnSign}><font size="3" face="Work Sans"><b>✚ Registrar Sucursal</b></font></button></Link>
        
        <p>
          Aki van las sucursales
        </p>
        
      
        </div>
    </>
  )
}
