import MainHead from '../../../components/MainHead'
import styles from '../../../styles/Promotor.module.css'
import Image from 'next/image'
import Link from 'next/link'
import LayoutMenu from '../../../components/LayoutMenu'
import MenuPromo from '../../../components/promo/MenuPromo'
import Registrar from '../../../components/promo/RegistrarSucursal'

export default function Sucursales () {
  return (
    <>
      <MainHead tituloPestana='Sucursales' />
      <LayoutMenu/>
        <MenuPromo />
        <div className={styles.container}>
        <center><font size={6} face="Work Sans" color="007200"><h1>Sucursales</h1></font></center>
        
        <div className={styles.sucursales}>

        <font size={5} face="Work Sans" color="007200">
          <center><h1>Tus Sucursales</h1></center>

        </font>
        </div>
<center><Registrar/></center>
        
      
        </div>
    </>
  )
}
