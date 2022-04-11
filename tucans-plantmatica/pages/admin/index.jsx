import MainHead from '../../components/MainHead'
import Router from 'next/router'
import LayoutMenu from '../../components/LayoutMenu'
import { useEffect, useState } from 'react'
import {
  traerUsuarios,
  traerFichasNoAceptadas,
  declinarAceptarFicha
} from '../api/admin-https'
import { validarToken } from '../api/request'
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt'
import EditIcon from '@mui/icons-material/Edit'
import styles from '../../styles/Admin.module.css'
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle'
import FichasNoAceptadas from '../../components/admin/FichasNoAceptadas'

export default function Index ({ fichas }) {
  const [value, setValue] = useState(0)
  const [fichasR, setFichasR] = useState(fichas)
  const [fichasNoR, setFichasNoR] = useState(fichas)

  const [visual, setVisual] = useState('')

  const changeDataUI = scope => {
    setVisual(scope)
    console.log(visual)
  }

  const controlFicha = async (control, id_ficha) => {
    let id = localStorage.getItem('id')
    await declinarAceptarFicha(control, id, id_ficha)
    const fichasNoRes = await traerFichasNoAceptadas()
    setFichasNoR(fichasNoRes)
  }

  const sessionControl = async () => {
    const valid = await validarToken()
    if (valid === false) {
      swal({
        title: 'Inicia sesion.',
        text:
          'Tu sesion expiro, vuelve a iniciar sesion para realizar esta operacion.',
        icon: 'info',
        button: 'Ok',
        timer: '3000'
      })
      Router.push('/session/IniciarSesion')
    }
  }

  const actualizarDataFichasNoAceptadas = async () => {
    if (fichasNoR === fichasR) {
      const fichasNoRes = await traerFichasNoAceptadas()
      setFichasNoR(fichasNoRes)
    }
  }

  useEffect(() => {
    actualizarDataFichasNoAceptadas()
    sessionControl()
    console.log(fichasNoR)
  }, [fichasNoR, fichasR])

  return (
    <div>
      <MainHead tituloPestana='Administrador' />
      <LayoutMenu />
      <div style={{ margin: '5%' }}>
        <table style={{ width: '100%' }}>
          <tr>
            <th style={{ width: '30%' }}>
              <div
                className={styles.card}
                onClick={() => changeDataUI('no-accepted')}
              >
                <div className={styles.card_not}>
                  <div className={styles.content}>
                    <div className={styles.rig}>
                      <DoNotDisturbAltIcon fontSize='large' color='error' />
                    </div>
                    <div>
                      <h3>Fichas no aceptadas.</h3>
                      <p className={styles.text}>
                        Registros de fichas que se han solicitado para agregar
                        sin respuesta a la solicitud.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={styles.card}
                onClick={() => changeDataUI('sol-edition')}
              >
                <div className={styles.card_edit}>
                  <div className={styles.content}>
                    <div className={styles.rig}>
                      <EditIcon fontSize='large' color='success' />
                    </div>
                    <div>
                      <h3>Solicitudes de edición</h3>
                      <p className={styles.text}>
                        Ficheros que solicitan un cambio en su contenido por un
                        error en este, falso o incompleto.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={styles.card}
                onClick={() => changeDataUI('sol-promo')}
              >
                <div className={styles.card_promo}>
                  <div className={styles.content}>
                    <div className={styles.rig}>
                      <SupervisedUserCircleIcon
                        fontSize='large'
                        color='secondary'
                      />
                    </div>
                    <div>
                      <h3>Solicitudes de promotores</h3>
                      <p className={styles.text}>
                        Solicitudes de los usuarios hacia el programa promotor.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </th>
            <th>
              {visual === 'no-accepted' ? (
                <FichasNoAceptadas fichas={fichasNoR} />
              ) : (
                ''
              )}
              {visual === 'sol-edition' ? 'Solicitudes de edicion' : ''}
              {visual === 'sol-promo' ? 'Solicitudes a promotor' : ''}
            </th>
          </tr>
        </table>
      </div>
    </div>
  )
}

export async function getServerSideProps () {
  const res = await fetch(`https://plantmatica-api.vercel.app/ficha`)
  const fichas = await res.json()

  return {
    props: { fichas, notFound: false }
  }
}
