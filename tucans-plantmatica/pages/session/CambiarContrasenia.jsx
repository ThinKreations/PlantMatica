import React from 'react'
import Router from 'next/router'
import LayoutIndex from '../../components/LayoutIndex'
import MainHead from '../../components/MainHead'
import styles from '../../styles/Forms.module.css'
import Link from 'next/link'

import IconPlantMatica from '../../components/IconPlantMatica'

export default function CambiarContrasenia () {
  

  return (
    <div>
      <MainHead tituloPestana='Cambiar Contraseña' />
      <LayoutIndex>
        <div style={{ margin: '10%' }}>
            <form /*onSubmit={handleSubmit(onSubmit)}*/ className={styles.root}>
              <center>
                <h2 className={styles.title}>Iniciar sesión PlantMatica.</h2>
                <IconPlantMatica wd={128} hg={128}/>
              </center>
              <br />
              <br />
              <div className={styles.cont_input}>
                <label className={styles.text}>Correo</label>
                <input  className={styles.input} />
                <p className={styles.errors}>errores</p>
              </div>
              <div className={styles.cont_input}>
                <label className={styles.text}>Contraseña Actual</label>
                <input type='password' className={styles.input}/>
                <p className={styles.errors}>errores</p>
              </div>
              <div className={styles.cont_input}>
                <label className={styles.text}>Nueva Contraseña</label>
                <input type='password'className={styles.input}/>
                <p className={styles.errors}>errores</p>
              </div>
              <div className={styles.cont_input}>
                <label className={styles.text}>Verificar Contraseña</label>
                <input type='password' className={styles.input}/>
                <p className={styles.errors}>errores</p>
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
