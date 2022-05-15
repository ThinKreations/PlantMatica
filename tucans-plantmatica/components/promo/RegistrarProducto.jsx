import { Autocomplete, FormGroup } from '@mui/material'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import MainHead from '../MainHead'
import styles from '../../styles/Promotor.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Chip from '@mui/material/Chip'
import TextField from '@mui/material/TextField'
import { schemaAgregarProducto } from '../../schemas/agregarProducto'
import Imagen from '../../components/fichas/AgregarImagen'
import { FormControlLabel } from '@mui/material'
import ListItemText from '@mui/material/ListItemText'
import Select from '@mui/material/Select'
import Checkbox from '@mui/material/Checkbox'
import { signProducto } from '../../pages/api/producto-https'

export default function RegistrarProductos ({
  etiquetasRender = [],
  sucursalesRender = []
}) {
  const [registrado, setRegistrado] = useState(false)
  const [etiquetas, setEtiquetas] = useState()
  const [advertencias, setAdvertencias] = useState()
  const [sucursales, setSucursales] = useState([])
  const [modal, setModal] = useState(true)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schemaAgregarProducto)
  })

  const disponibilidadSucursales = id => {
    if (sucursales.includes(id)) {
      setSucursales(sucursales.filter(sucursal => sucursal !== id))
    } else {
      setSucursales([...sucursales, id])
    }
  }

  const onSubmit = async data => {
    let producto = {
      nombre: data.nombre,
      descripcion: data.descripcion,
      costo_fisico: data.costo_fisico,
      etiquetas,
      advertencias,
      disponibilidad_sucursales: sucursales
    }
    let res = await signProducto(producto)
    if (res.status === 200) {
      setModal(true)
    }
  }
  return (
    <>
      <center>
        {modal ? <Imagen /> : ''}
        <form className={styles.registrar} onSubmit={handleSubmit(onSubmit)}>
          <font size={5} face='Work Sans' color='007200'>
            <b>Registrar Producto</b>
          </font>
          <br />
          <input
            {...register('nombre')}
            className={styles.input}
            placeholder='Nombre del producto'
          ></input>
          <p className={styles.errors}>{errors.nombre?.message}</p>
          <input
            className={styles.input}
            placeholder='Descripción del producto'
            {...register('descripcion')}
          ></input>
          <p className={styles.errors}>{errors.descripcion?.message}</p>
          <input
            className={styles.input}
            type='number'
            placeholder='Precio'
            {...register('costo_fisico')}
          ></input>
          <p className={styles.errors}>{errors.costo_fisico?.message}</p>

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
          <p className={styles.dia}>Disponible en: </p>
          <FormGroup>
            {sucursalesRender.map(sucursal => {
              return (
                <FormControlLabel
                  key={sucursal._id}
                  control={
                    <Checkbox
                      color='success'
                      onChange={() => disponibilidadSucursales(sucursal._id)}
                      sx={{ fontSize: 28 }}
                    />
                  }
                  label={`${sucursal.nombre_sucursal} - ${sucursal.direccion.estado} - ${sucursal.direccion.alcaldia} - ${sucursal.direccion.avenida}`}
                />
              )
            })}
          </FormGroup>

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
  advertencias: [
    'No consumir mas de la dosis indicada.',
    'No mezclar con alcohol.',
    'Dolor de cabeza',
    'Mareos',
    'Somnolencia'
  ]
}
