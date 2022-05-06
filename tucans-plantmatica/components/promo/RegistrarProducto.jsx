import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import MainHead from '../MainHead'
import styles from '../../styles/Promotor.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Autocomplete from '@mui/material/Autocomplete';
import { Checkbox, FormControl } from '@mui/material'
import TextField from '@mui/material/TextField';
import { schemaSignProducto } from '../../schemas/signProducto'
import { signProducto } from '../../pages/api/promotor-https'

export default function RegistrarProductos () {

  const [registrado, setRegistrado] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schemaSignProducto)
  })

  const onSubmit = async data => {
    /*const res = await signSucursal(data);
    if(res.status === 200){
        setRegistrado(true);
    }*/
     
  }
  return (
    <>
        <center>
        <form className={styles.registrar} >
        
        <font size={5} face="Work Sans" color="007200"><b>Registrar Producto</b></font>
        <br/>
        <input {...register('nombre_producto')} className={styles.input} placeholder="Nombre del"></input>
        <p className={styles.errors}>{errors.nombre_producto?.message}</p>
        <input className={styles.input} placeholder="Tipo de producto"/>
        <input className={styles.input} placeholder="Etiquetas"/>
        <input className={styles.input} placeholder="Descripción del producto"></input>
        <input className={styles.input} placeholder="Advertencias"></input>
        <input className={styles.input} placeholder="Aquí se pondrán las sucursales como etiquetas, y si no está disponible en tienda, no se pone nada, aunque no se como poner campos así, ayuda xdd">
        
        </input>
        <input className={styles.input} type="number" placeholder="Precio"></input>
        <input className={styles.input} placeholder="Página Web (Opcional)"></input><br/>
        <p className={styles.dia}>Disponible en: </p><select className={styles.mini_input}>

          <option value='Tienda'>En tienda</option>
          <option value='Linea'>En línea</option>
          <option value='Ambos'>En tienda y en línea</option>
          
        </select>
        <br/>
        <font size={4} face="Work Sans" color="007200">
        
        

        </font>

        <button type="submit" className={styles.btnSign}><font size="3" face="Work Sans"><b>✚ Registrar Producto</b></font></button>
        
        
        </form>
        </center>
    </>
  )
}