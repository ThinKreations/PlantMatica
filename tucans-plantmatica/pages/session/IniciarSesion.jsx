import React from 'react'
import Router from 'next/router'
import LayoutIndex from '../../components/LayoutIndex'
import MainHead from '../../components/MainHead'
import styles from '../../styles/Forms.module.css'
import Link from 'next/link'
import Paper from '@mui/material/Paper'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import { schemaIniciarSesion } from '../../schemas/iniciarSesion'
import swal from 'sweetalert'
import IconPlantMatica from '../../components/IconPlantMatica'
import { getUsuario } from '../api/user-https'

export default function IniciarSesion () {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schemaIniciarSesion)
  })

  const onSubmit = async data => {
    const res = await fetch(`https://mmg7n2ixnk.us-east-2.awsapprunner.com/login`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        correo: data.correo,
        password: data.password
      })
    })
    const resJSON = await res.json()
    if (res.status !== 200) {
      swal({
        title: 'Error al iniciar sesion.',
        text: resJSON.msg,
        icon: 'error',
        button: 'Ok'
      })
    } else {
      swal({
        title: 'Finalizado.',
        text: resJSON.msg,
        icon: 'success',
        button: 'Ok',
        timer: '3000'
      })
      localStorage.setItem('id', resJSON.id);
      localStorage.setItem('token', resJSON.token)
      Router.push('/fichas')
    }
  }

  return (
    <div>
      <MainHead tituloPestana='Iniciar sesión' />
      <LayoutIndex>
        <div style={{ margin: '10%' }}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.root}>
              <center>
                <h2 className={styles.title}>Iniciar sesión PlantMatica.</h2>
                <IconPlantMatica wd={128} hg={128}/>
              </center>
              <br />
              <br />
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
              <center className={styles.link}>
                <Link href='./ReqCambiarContrasenia'>
                  <a>
                    ¿Olvidaste tu contraseña?, haz click aquí.
                  </a>
                </Link>
              </center>
              <br />
              <br />
              <br />
              <br />
              <button className={styles.btnSubmit} type='submit'>
                Iniciar Sesion
              </button>
              <center className={styles.link}>
                <Link href='./CrearCuenta'>
                  <a>
                    Si no posees una cuenta puedes crear una haciendo click
                    aqui.
                  </a>
                </Link>
              </center>
            </form>
        </div>
      </LayoutIndex>
    </div>
  )
}
