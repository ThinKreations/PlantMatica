import MainHead from '../MainHead'
import styles from '../../styles/Promotor.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Checkbox, FormControl } from '@mui/material'



export default function RegistrarSucursales () {
  return (
    <>
        <center>
        <form className={styles.registrarSucursales}>
        
        <font size={5} face="Work Sans" color="007200"><b>Registrar Sucursal</b></font>
        <br/>
        
        <input className={styles.input} placeholder="Dirección de la Sucursal"></input>
        <br/>
        <font size={4} face="Work Sans" color="007200">
        <b>Horario de atención</b>
        <br/>
        <div className={styles.checkContainer}>

        <div><b>Lunes</b><Checkbox/><br/>
        <b>Desde:</b><br/>
        <input className={styles.mini_input} placeholder="Horario de"></input><br/>
        <b>Hasta:</b><br/>
        <input className={styles.mini_input} placeholder="24 Horas"></input>
        </div>

        <div><b>Martes</b><Checkbox/><br/>
        <b>Desde:</b><br/>
        <input className={styles.mini_input} placeholder="Horario de"></input><br/>
        <b>Hasta:</b><br/>
        <input className={styles.mini_input} placeholder="24 Horas"></input>
        </div>

        <div><b>Miércoles</b><Checkbox/><br/>
        <b>Desde:</b><br/>
        <input className={styles.mini_input} placeholder="Horario de"></input><br/>
        <b>Hasta:</b><br/>
        <input className={styles.mini_input} placeholder="24 Horas"></input>
        </div>

        <div><b>Jueves</b><Checkbox/><br/>
        <b>Desde:</b><br/>
        <input className={styles.mini_input} placeholder="Horario de"></input><br/>
        <b>Hasta:</b><br/>
        <input className={styles.mini_input} placeholder="24 Horas"></input>
        </div>
       
        <div><b>Viernes</b><Checkbox/><br/>
        <b>Desde:</b><br/>
        <input className={styles.mini_input} placeholder="Horario de"></input><br/>
        <b>Hasta:</b><br/>
        <input className={styles.mini_input} placeholder="24 Horas"></input>
        </div>

        <div><b>Sábado</b><Checkbox/><br/>
        <b>Desde:</b><br/>
        <input className={styles.mini_input} placeholder="Horario de"></input><br/>
        <b>Hasta:</b><br/>
        <input className={styles.mini_input} placeholder="24 Horas"></input>
        </div>

        <div><b>Domingo</b><Checkbox/><br/>
        <b>Desde:</b><br/>
        <input className={styles.mini_input} placeholder="Horario de"></input><br/>
        <b>Hasta:</b><br/>
        <input className={styles.mini_input} placeholder="24 Horas"></input>
        </div>
        
        </div>
        
        </font>
        <br/><button type="submit" className={styles.btnSign}><font size="3" face="Work Sans"><b>✚ Registrar Sucursal</b></font></button>
        
        
        </form>
        </center>
    </>
  )
}