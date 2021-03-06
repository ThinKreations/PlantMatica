import React from 'react'
import styles from '../../styles/Forms.module.css'
import TerminosYCondiciones from '../../components/TerminosYCondiciones'
import MainHead from '../../components/MainHead'
import LayoutIndex from '../../components/LayoutIndex'
import Link from 'next/link'
import Paper from '@mui/material/Paper'
import Router from 'next/router'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import { schemaCrearCuenta } from '../../schemas/crearCuenta'
import IconPlantMatica from '../../components/IconPlantMatica'
import swal from 'sweetalert'
import Swal from "sweetalert2"
import { uploadImagen } from "../api/uploads-http"

export default function CrearCuenta () {
  const {register,handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schemaCrearCuenta)
  })

  const onSubmit = async data => {    

    const res = await fetch(`https://mmg7n2ixnk.us-east-2.awsapprunner.com/user`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        correo: data.correo,
        username: data.username,
        password: data.password,
        estadoMx: data.estadoMx,
        sexo: data.sexo,
        edad: data.edad
      })
    })
    const resJSON = await res.json()
    if (res.status !== 200) {
      try {
        let arrayErrors = resJSON.errors
        arrayErrors.forEach(e => {
          swal({
            title: 'Error al crear cuenta',
            text: e.msg,
            icon: 'error',
            button: 'Ok'
          })
        })
      } catch (error) {
        swal({
          title: 'Algo salio mal...',
          text: resJSON.msg,
          icon: 'error',
          button: 'Ok'
        })
      }
    } else {
      if (res.status === 200) {
        const { value: file } = await Swal.fire({
          title: 'Se creo la cuenta de manera exitosa - ¿Desea agregar una imagen de perfil?',
          input: 'file',
          showCancelButton: true,
          confirmButtonText: 'Subir imagen.',
          showLoaderOnConfirm: true,
          inputAttributes: {
            accept: 'image/*',
            'aria-label': 'Agregar imagen'
          }
        })
        if (file) {
          const res = uploadImagen(file, 'users', resJSON.userSave._id)
          if (res.status == 200) {
            Swal.fire({
              title: 'Imagen agregada',
              //imageUrl: e.target.result,
              icon: 'success'
            })
          }
        }
      }
      Router.push('/session/IniciarSesion')
    }
  }

  return (
    <div>
      <MainHead tituloPestana='Crear Cuenta' />
      <LayoutIndex>
        <div style={{ margin: '10%' }}>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.root}>
            <h2 className={styles.title}>Crear cuenta </h2>
            <div className={styles.cont_input}>
              <label className={styles.text}>Nombre de usuario</label>
              <input {...register('username')} className={styles.input} />
              <p className={styles.errors}>{errors.username?.message}</p>
            </div>
            <div className={styles.cont_input}>
              <label className={styles.text}>Correo</label>
              <input {...register('correo')} className={styles.input} />
              <p className={styles.errors}>{errors.correo?.message}</p>
            </div>
            <div className={styles.cont_input}>
              <label className={styles.text}>Contraseña</label>
              <input
                {...register('password')}
                type='password'
                className={styles.input}
              />
              <p className={styles.errors}>{errors.password?.message}</p>
            </div>
            <div className={styles.cont_input}>
              <label className={styles.text}>Verificar contraseña</label>
              <input
                {...register('passwordV')}
                type='password'
                className={styles.input}
              />
              <p className={styles.errors}>{errors.passwordV?.message}</p>
            </div>
            <div className={styles.cont_input}>
              <label className={styles.text}>Estado de la republica</label>
              <select
                {...register('estadoMx')}
                className={styles.input}
                name='estado'
              >
                <option value='Prefiero no decirlo'>
                  Prefiero no decirlo...
                </option>
                <option value='Resido fuera del pais'>
                  Resido fuera del pais
                </option>
                <option value='Aguascalientes'>Aguascalientes</option>
                <option value='Baja California'>Baja California</option>
                <option value='Baja California Sur'>Baja California Sur</option>
                <option value='Campeche'>Campeche</option>
                <option value='Chiapas'>Chiapas</option>
                <option value='Chihuahua'>Chihuahua</option>
                <option value='CDMX'>Ciudad de México</option>
                <option value='Coahuila'>Coahuila</option>
                <option value='Colima'>Colima</option>
                <option value='Durango'>Durango</option>
                <option value='Estado de México'>Estado de México</option>
                <option value='Guanajuato'>Guanajuato</option>
                <option value='Guerrero'>Guerrero</option>
                <option value='Hidalgo'>Hidalgo</option>
                <option value='Jalisco'>Jalisco</option>
                <option value='Michoacán'>Michoacán</option>
                <option value='Morelos'>Morelos</option>
                <option value='Nayarit'>Nayarit</option>
                <option value='Nuevo León'>Nuevo León</option>
                <option value='Oaxaca'>Oaxaca</option>
                <option value='Puebla'>Puebla</option>
                <option value='Querétaro'>Querétaro</option>
                <option value='Quintana Roo'>Quintana Roo</option>
                <option value='San Luis Potosí'>San Luis Potosí</option>
                <option value='Sinaloa'>Sinaloa</option>
                <option value='Sonora'>Sonora</option>
                <option value='Tabasco'>Tabasco</option>
                <option value='Tamaulipas'>Tamaulipas</option>
                <option value='Tlaxcala'>Tlaxcala</option>
                <option value='Veracruz'>Veracruz</option>
                <option value='Yucatán'>Yucatán</option>
                <option value='Zacatecas'>Zacatecas</option>
              </select>
            </div>

            <div className={styles.cont_input}>
              <label className={styles.text}>Sexo</label>
              <select
                {...register('sexo')}
                className={styles.input}
                name='sexo'
              >
                <option value='Masculino'>Masculino</option>
                <option value='Femenino'>Femenino</option>
                <option value='Prefiero no decirlo'>Prefiero no decirlo</option>
              </select>
            </div>

            <div className={styles.cont_input}>
              <label className={styles.text}>Edad</label>
              <input
                {...register('edad')}
                type='text'
                className={styles.input}
              />
              <p className={styles.errors}>
                {errors.edad ? 'Dato no valido' : ''}
              </p>
            </div>
            <br />

            <div>
              <center>
                <TerminosYCondiciones />
              </center>
            </div>
            <br />
            <button type='submit' className={styles.btnSubmit}>
              Crear Cuenta
            </button>

            <center className={styles.link}>
              <Link href='./IniciarSesion'>
                <a>{`Si ya tienes una cuenta puedes iniciar sesión.`}</a>
              </Link>
            </center>
          </form>
        </div>
      </LayoutIndex>
    </div>
  )
}
