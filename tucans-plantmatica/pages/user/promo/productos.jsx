import MainHead from '../../../components/MainHead'
import styles from '../../../styles/Promotor.module.css'
import Image from 'next/image'
import Link from 'next/link'
import LayoutMenu from '../../../components/LayoutMenu'
import MenuPromo from '../../../components/promo/MenuPromo'
import Registrar from '../../../components/promo/RegistrarSucursal'
import EditIcon from '@mui/icons-material/Edit'

export default function Sucursales () {
  return (
    <>
      <MainHead tituloPestana='Productos' />
      <LayoutMenu/>
        <MenuPromo />
        <div className={styles.container}>
        <center><font size={6} face="Work Sans" color="007200"><h1>Productos</h1></font></center>
        
        <div className={styles.sucursales}>

        <font size={5} face="Work Sans" color="007200">
          <center><h1>Tus Productos</h1></center>
        </font>

        <div className={styles.sucursal}>
          
        <div className={styles.fichaSucursal}>
        <aside className={styles.dataSucursal}>
        <font size={2} face="Work Sans" color="007200">
        <h1>`Nombre`</h1>
        <h3>`Promotor/distribuidor`</h3>
        <h3>`Tipo de producto`</h3>
        <h3>`Cantidades, piezas <br/>
        datos sobre el producto<br/> según el tipo de producto`</h3>
        <h3>En tienda: `Sí/No`</h3>
        <h3>En línea: `Sí/No`</h3>
        </font>
        </aside>  
        <aside className={styles.dataSucursal}>
        <font size={1} face="Work Sans" color="007200">
        <h2>Etiquetas:</h2>
        <h2>Advertencias:</h2>
        <h2>Precios:</h2>
        <h2>Sucursales donde se encuentra:</h2>
        <h2>En stock (O disponibilidad):</h2>
        <h2>:</h2>
        </font>
        </aside>  
        <div>
        <button className={styles.btnEdit}>
          <EditIcon
              className={styles.editIcon}
              fontSize='medium'
              color='success'
            />
            </button><br/>
        </div>        
        </div>

        <div className={styles.fichaSucursal}>
        <aside className={styles.dataSucursal}>
        <font size={2} face="Work Sans" color="007200">
        <h1>`Nombre`</h1>
        <h3>`Promotor/distribuidor`</h3>
        <h3>`Tipo de producto`</h3>
        <h3>`Cantidades, piezas <br/>
        datos sobre el producto<br/> según el tipo de producto`</h3>
        <h3>En tienda: `Sí/No`</h3>
        <h3>En línea: `Sí/No`</h3>
        </font>
        </aside>  
        <aside className={styles.dataSucursal}>
        <font size={1} face="Work Sans" color="007200">
        <h2>Etiquetas:</h2>
        <h2>Advertencias:</h2>
        <h2>Precios:</h2>
        <h2>Sucursales donde se encuentra:</h2>
        <h2>En stock (O disponibilidad):</h2>
        <h2>:</h2>
        </font>
        </aside>  
        <div>
        <button className={styles.btnEdit}>
          <EditIcon
              className={styles.editIcon}
              fontSize='medium'
              color='success'
            />
            </button><br/>
        </div>        
        </div>

        </div>
        

        </div>

        

        <hr className={styles.bar}/>
        <center></center>
        
      
        </div>
    </>
  )
}
