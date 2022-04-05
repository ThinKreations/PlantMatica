import React, { useState } from 'react'
import Router, { useRouter } from 'next/router'
import MainHead from '../../components/MainHead'
import LayoutIndex from '../../components/LayoutIndex'
import Link from 'next/link'
import Paper from '@mui/material/Paper'
import styles from '../../styles/Forms.module.css'
import Alert from '@mui/material/Alert'
import swal from 'sweetalert'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import logo from '../../src/icon.png'
import IconPlantMatica from '../../components/IconPlantMatica'
import { reqConfirmarCuenta } from '../api/user-https'

export default function ConfirmarCuenta () {
  const [confirm, setConfirm] = useState(null)
  const [decline, setDecline] = useState(null)
  const [loading, setLoading] = useState(false)
  const { query } = useRouter()

  const declineBtn = async () => {
    if (query.token) {
      setDecline(true)
      setConfirm(false)
      const lod = reqConfirmarCuenta(query.token, false)
    } else {
      swal({
        title: 'Error',
        text: 'Debe tener una cuenta para confirmarla',
        icon: 'error',
        button: 'Ok'
      })
      Router.push('/session/IniciarSesion')
    }
  }

  const confirmBtn = async () => {
    if (query.token) {
      setConfirm(true)
      setDecline(false)
      const lod = reqConfirmarCuenta(query.token, true)
    } else {
      swal({
        title: 'Error',
        text: 'Debe tener una cuenta para confirmarla',
        icon: 'error',
        button: 'Ok'
      })
      Router.push('/session/IniciarSesion')
    }
  }

  return (
    <>
      <MainHead tituloPestana='Confirmar cuenta' />
      <LayoutIndex>
        <div style={{ margin: '15%' }}>
          {decline === null && confirm === null ? (
            <center>
              <Paper eleveation='4'>
                <div style={{ margin: '15px' }}>
                  <Alert variant='filled' severity='success'>
                    Sobre la confirmación de su cuenta.
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
                    Ahora formas parte de nuestra comunidad, y podrás consultar
                    informacion acerca de la herbolaria, compartir tus
                    experiencias de uso y mucho más.
                    <br />
                    <br />
                    <b>
                      Si no creaste una cuenta recientemente, por favor,
                      selecciona el boton "No fui yo".
                    </b>
                  </p>
                </div>
                <a>
                  <button onClick={confirmBtn} className={styles.btnSubmit}>
                    {`Confirmar cuenta`}
                  </button>
                </a>
                <a>
                  <button
                    onClick={declineBtn}
                    className={styles.btnNot}
                  >{`No fui yo`}</button>
                </a>
              </Paper>
            </center>
          ) : (
            ''
          )}
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
                    Ahora formas parte de nuestra comunidad, y podrás consultar
                    informacion acerca de la herbolaria, compartir tus
                    experiencias de uso y mucho más.
                  </p>
                </div>
                <Link href='./session/IniciarSesion'>
                  <a>
                    <button className={styles.btnSubmit}>
                      {`Iniciar Sesión`}
                    </button>
                  </a>
                </Link>
              </Paper>
            ) : (
              ''
            )}
            {decline ? (
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
                    Los datos registrados junto con su correo han sido
                    eliminados de nuestros registros, esto para mantener la
                    seguridad dentro de nuestra aplicación. <br />
                    No se podrá ingresar a la aplicación con dichas
                    credenciales.
                  </p>
                </div>
              </Paper>
            ) : (
              ''
            )}
          </center>
        </div>
      </LayoutIndex>
    </>
  )
}
