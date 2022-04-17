import MainHead from '../MainHead'
import styles from '../../styles/Promotor.module.css'
import Image from 'next/image'
import Link from 'next/link'



export default function RegistrarSucursales () {
  return (
    <>
        <center>
        <div className={styles.registrarSucursales}>
        <font size={4} face="Work Sans" color="007200"><b>Registrar Sucursal</b></font>
        <br/>
        
        <input className={styles.input} placeholder="Dirección de la Sucursal"></input>

        <input className={styles.input}></input>
        
        
        
        
        <button className={styles.btnSign}><font size="3" face="Work Sans"><b>✚ Registrar Sucursal</b></font></button>
        </div>
        </center>
    </>
  )
}