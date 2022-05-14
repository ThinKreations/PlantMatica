import { Autocomplete } from '@mui/material'
import { traerEtiquetas } from '../../pages/api/fichas-http'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import MainHead from '../MainHead'
import styles from '../../styles/Promotor.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Checkbox, FormControl } from '@mui/material'
import TextField from '@mui/material/TextField'
import { schemaSignProducto } from '../../schemas/signProducto'
import { signProducto } from '../../pages/api/promotor-https'

export default function RegistrarProductos ({ etiquetasRender = [] }) {
  const [registrado, setRegistrado] = useState(false)
  const [etiquetas, setEtiquetas] = useState()
  const [advertencias, setAdvertencias] = useState()

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
    console.log(data.nombre_producto)
  }
  return (
    <>
      <center>
        <form className={styles.registrar} onSubmit={handleSubmit(onSubmit)}>
          <font size={5} face='Work Sans' color='007200'>
            <b>Registrar Producto</b>
          </font>
          <br />
          <input
            {...register('nombre_producto')}
            className={styles.input}
            placeholder='Nombre del producto'
          ></input>
          <p className={styles.errors}>{errors.nombre_producto?.message}</p>
          <input className={styles.input} placeholder='Tipo de producto' />

          <Autocomplete
            multiple
            sx={{ marginTop: '20px' }}
            onChange={(event, etiquetas) => setEtiquetas(etiquetas)}
            id='tags-filled'
            options={etiquetasRender.map(option => option.etiqueta)}
            freeSolo
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  key={`${option}${index}`}
                  variant='outlined'
                  label={option}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={params => (
              <TextField
                {...params}
                label='Presione la tecla enter para agregar un etiqueta'
                variant='filled'
                color='success'
                placeholder='Debe introducir terminos de busqueda para que los usuarios puedan encontrar su producto'
              />
            )}
          />
          <input
            className={styles.input}
            placeholder='Descripción del producto'
          ></input>
          <Autocomplete
            multiple
            sx={{ marginTop: '20px' }}
            onChange={(event, advertencias) => setAdvertencias(advertencias)}
            id='tags-filled'
            options={defaultOptions.advertencias.map(option => option)}
            freeSolo
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  key={`${option}${index}`}
                  variant='outlined'
                  label={option}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={params => (
              <TextField
                {...params}
                label='Presione la tecla enter para agregar una advertencia o efectos secundarios.'
                variant='filled'
                color='success'
                placeholder='Advertencias sobre el producto, su consumo y efectos secundarios.'
              />
            )}
          />
          <input
            className={styles.input}
            placeholder='Aquí se pondrán las sucursales como etiquetas, y si no está disponible en tienda, no se pone nada, aunque no se como poner campos así, ayuda xdd'
          ></input>
          <input
            className={styles.input}
            type='number'
            placeholder='Precio'
          ></input>
          <input
            className={styles.input}
            placeholder='Página Web (Opcional)'
          ></input>
          <br />
          <p className={styles.dia}>Disponible en: </p>
          <select className={styles.mini_input}>
            <option value='Tienda'>En tienda</option>
            <option value='Linea'>En línea</option>
            <option value='Ambos'>En tienda y en línea</option>
          </select>
          <br />
          <font size={4} face='Work Sans' color='007200'></font>

          <button type='submit' className={styles.btnSign}>
            <font size='3' face='Work Sans'>
              <b>✚ Registrar Producto</b>
            </font>
          </button>
        </form>
      </center>
    </>
  )
}


const defaultOptions = {
  "advertencias": [
    "No consumir mas de la dosis indicada.",
    "No mezclar con alcohol.",
    "Dolor de cabeza",
    "Mareos",
    "Somnolencia"
  ]
}