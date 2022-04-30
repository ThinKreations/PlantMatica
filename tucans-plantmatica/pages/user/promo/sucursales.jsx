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
        

        <div className={styles.sucursal}>

        <div className={styles.fichaSucursal}>
        <font size={2} face="Work Sans" color="007200">
        <h1>`Empresa o Promotor`</h1>
        <h3>`Dirección Comercial`</h3>
        <h3>`Teléfono Comercial`</h3>
        <h3>Atendido por `Encargado`</h3>
        <h3>Servicio a domicilio: `Sí/No`</h3>
        <h2>Horario:</h2>
        <h3>Lunes: `Entrada` a `Salida`</h3>
        <h3>Martes: `Entrada` a `Salida`</h3>
        <h3>Miércoles: `Entrada` a `Salida`</h3>
        <h3>Jueves: `Entrada` a `Salida`</h3>
        </font>
        </div>

        <div className={styles.fichaSucursal}>
        <font size={2} face="Work Sans" color="007200">
        <h1>`Empresa o Promotor`</h1>
        <h3>`Dirección Comercial`</h3>
        <h3>`Teléfono Comercial`</h3>
        <h3>Atendido por `Encargado`</h3>
        <h3>Servicio a domicilio: `Sí/No`</h3>
        </font>
        </div>

        <div className={styles.fichaSucursal}>
        <font size={2} face="Work Sans" color="007200">
        <h1>`Empresa o Promotor`</h1>
        <h3>`Dirección Comercial`</h3>
        <h3>`Teléfono Comercial`</h3>
        <h3>Atendido por `Encargado`</h3>
        <h3>Servicio a domicilio: `Sí/No`</h3>
        
        </font>
        </div>

        </div>

        </div>

        <hr className={styles.bar}/>
        <center><Registrar/></center>
        
      
        </div>
    </>
  )
}
