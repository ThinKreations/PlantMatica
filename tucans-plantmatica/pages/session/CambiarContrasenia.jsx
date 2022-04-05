import React from 'react'
import LayoutIndex from '../../components/LayoutIndex'
import MainHead from '../../components/MainHead'
import styles from '../../styles/Forms.module.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import Router, { useRouter } from 'next/router'
import swal from 'sweetalert'
import IconPlantMatica from '../../components/IconPlantMatica'
import { schemaCambiarPass } from '../../schemas/cambiarPass'
import { cambiarPass } from '../api/user-https'

export default function CambiarContrasenia () {
  const { query } = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schemaCambiarPass)
  })

  const onSubmit = async data => {
    const { password } = data
    const status = cambiarPass(query.token, password)
    Router.push('/session/IniciarSesion')
  }

  return (
    <div>
      <MainHead tituloPestana='Cambiar Contraseña' />
      <LayoutIndex>
        <div style={{ margin: '10%' }}>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.root}>
            <center>
              <h2 className={styles.title}>Cambiar Contraseña</h2>
              <IconPlantMatica wd={128} hg={128} />
            </center>
            <br />
            <br />
            <div className={styles.cont_input}>
              <label className={styles.text}>Nueva Contraseña</label>
              <input
                {...register('password')}
                type='password'
                className={styles.input}
              />
              <p className={styles.errors}>{errors.password?.message}</p>
            </div>
            <div className={styles.cont_input}>
              <label className={styles.text}>Verificar Contraseña</label>
              <input
                {...register('passwordV')}
                type='password'
                className={styles.input}
              />
              <p className={styles.errors}>{errors.passwordV?.message}</p>
            </div>
            <button className={styles.btnSubmit} type='submit'>
              Guardar
            </button>
          </form>
        </div>
      </LayoutIndex>
    </div>
  )
}
