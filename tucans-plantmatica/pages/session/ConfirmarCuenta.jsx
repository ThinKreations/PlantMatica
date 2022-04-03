import React, { useState } from 'react'
import Image from 'next/image'
import MainHead from '../../components/MainHead'
import LayoutIndex from '../../components/LayoutIndex'
import Link from 'next/link'
import Paper from '@mui/material/Paper'
import styles from '../../styles/Forms.module.css'
import Alert from '@mui/material/Alert'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import Router from 'next/router'

import logo from '../../src/icon.png'
import IconPlantMatica from '../../components/IconPlantMatica'

export default function ConfirmarCuenta () {
  const [confirm, setConfirm] = useState(true)
  const [loading, setLoading] = useState(false)

  return (
    <>
      <MainHead tituloPestana='Confirmar cuenta' />
      <LayoutIndex>
        <div style={{ margin: '15%' }}>
          {loading ? (
            <Backdrop
              sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
              open={open}
            >
              <CircularProgress color='inherit' />
            </Backdrop>
          ) : (
            <center>
              {confirm ? (
                <Paper eleveation='4'>
                  <div style={{ margin: '15px' }}>
                    <Alert variant='filled' severity='success'>
                      Se ha confirmado su cuenta, ya puede iniciar sesión.
                    </Alert>
                    <h2 className={styles.title}>
                      ¡Gracias por formar parte de PlantMatica!
                    </h2>
                    <IconPlantMatica wd={128} hg={128} />
                    <p
                      style={{
                        marginLeft: '5%',
                        marginRight: '5%',
                        fontSize: '20px'
                      }}
                    >
                      Ahora formas parte de nuestra comunidad, y podrás
                      consultar informacion acerca de la herbolaria, compartir
                      tus experiencias de uso y mucho más.
                    </p>
                  </div>
                  <Link href='./IniciarSesion'>
                    <a>
                      <button className={styles.btnSubmit} >
                        {`Iniciar Sesión`}
                      </button>
                    </a>
                  </Link>
                </Paper>
              ) : (
                <Paper variant='outlined' eleveation='4'>
                  <div style={{ margin: '20px' }}>
                  <Alert variant='filled' severity='success'>
                    Sobre la confirmación de su cuenta.
                  </Alert>
                  <h2 className={styles.title}>
                    Se ha rechazado la confirmación de su cuenta.
                  </h2>
                  <IconPlantMatica wd={128} hg={128} />
                  <p
                    style={{
                      marginLeft: '5%',
                      marginRight: '5%',
                      fontSize: '20px'
                    }}
                  >
                    Los datos registrados junto con su correo han sido eliminados de nuestros registros, esto para mantener 
                    la seguridad dentro de nuestra aplicación. <br/>
                    No se podrá ingresar a la aplicación con dichas credenciales.
                  </p>
                  </div>
                </Paper>
              )}
            </center>
          )}
        </div>
      </LayoutIndex>
    </>
  )
}
