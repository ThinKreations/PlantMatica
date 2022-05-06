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
      <MainHead tituloPestana='Sucursales' />
      <LayoutMenu/>
        <MenuPromo />
        <div className={styles.container}>
        <center><font size={6} face="Work Sans" color="007200"><h1>Sucursales</h1></font></center>
        
        <div className={styles.sucursales}>

        <font size={5} face="Work Sans" color="007200">
          <center><h1>Tus Sucursales</h1></center>
        </font>

        <div className={styles.fichero}>
          
        <div className={styles.ficha}>
        <aside className={styles.dataSucursal}>
        <font size={2} face="Work Sans" color="007200">
        <h1>La Oficina</h1>
        <h2>{`Tucan's Software`}</h2>
        <h3>Ciudad de México, Miguel Hidalgo, Mar Mediterráneo #227</h3>
        <h3>5557296000</h3>
        <h3>Atendido por Adrián Flores</h3>
        </font>
        </aside>  
        <aside className={styles.dataSucursal}>
        <font size={1} face="Work Sans" color="007200">
        <h2>Horario</h2>
        <h3>Lunes: 13:00 a 21:00</h3>
        <h3>Martes: 13:00 a 21:00</h3>
        <h3>Miércoles: 13:00 a 21:00</h3>
        <h3>Jueves: 14:00 a 21:00</h3>
        <h3>Viernes: 14:00 a 21:00</h3>
        <h3>Sábado: Sin servicio</h3>
        <h3>Domingo: Sin servicio</h3>
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

        <div className={styles.ficha}>
        <aside className={styles.dataSucursal}>
        <font size={2} face="Work Sans" color="007200">
        <h1>El Centro Médico</h1>
        <h2>{`Tucan's Software`}</h2>
        <h3>Ciudad de México, Miguel Hidalgo, Mar Mediterráneo #227</h3>
        <h3>1234567890</h3>
        <h3>Atendido por Fetu Ccini</h3>
        </font>
        </aside>  
        <aside className={styles.dataSucursal}>
        <font size={1} face="Work Sans" color="007200">
        <h2>Horario</h2>
        <h3>Lunes: 13:00 a 21:00</h3>
        <h3>Martes: 13:00 a 21:00</h3>
        <h3>Miércoles: 13:00 a 21:00</h3>
        <h3>Jueves: 14:00 a 21:00</h3>
        <h3>Viernes: 14:00 a 21:00</h3>
        <h3>Sábado: Sin servicio</h3>
        <h3>Domingo: Sin servicio</h3>
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
        <center><Registrar/></center>
        
      
        </div>
        
    </>
  )
}
