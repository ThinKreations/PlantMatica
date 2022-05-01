import MainHead from '../MainHead'
import styles from '../../styles/Promotor.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Autocomplete from '@mui/material/Autocomplete';
import { Checkbox, FormControl } from '@mui/material'
import TextField from '@mui/material/TextField';


export default function RegistrarProductos () {
  return (
    <>
        <center>
        <form className={styles.registrarSucursales}>
        
        <font size={5} face="Work Sans" color="007200"><b>Registrar Producto</b></font>
        <br/>
        <input className={styles.input} placeholder="Nombre del producto"></input>
        
        <input className={styles.input} placeholder="Etiquetas"/>
        <input className={styles.input} placeholder="Descripción"></input>
        <input className={styles.input} placeholder="Advertencias"></input>
        <input className={styles.input} placeholder="Aquí se pondrán las sucursales como etiquetas, y si no está disponible en tienda, no se pone nada">
        
        </input>
        <input className={styles.input} type="number" placeholder="Precio"></input>
        <input className={styles.input} placeholder="Página Web (Opcional)"></input>
        <br/>
        <font size={4} face="Work Sans" color="007200">
        
        

        </font>
        <button type="submit" className={styles.btnSign}><font size="3" face="Work Sans"><b>✚ Registrar Sucursal</b></font></button>
        
        
        </form>
        </center>
    </>
  )
}