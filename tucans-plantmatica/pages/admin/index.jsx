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
import SolicitudesEdicion from '../../components/admin/SolicitudesEdicion'
import SolicitudesPromotores from '../../components/admin/SolicitudesPromotores'

export default function Index ({ fichas, total }) {
  const [none, setNone] = useState(true)

  const [visual, setVisual] = useState('')

  const changeDataUI = scope => {
    setVisual(scope)
    setNone(false)
    if (visual === 'no-accepted' || scope === 'no-accepted') {
      console.log('Cargando componente ... Fichas no aceptadas')
    }
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

  useEffect(() => {
    sessionControl()
  }, [])

  return (
    <div>
      <MainHead tituloPestana='Administrador' />
      <LayoutMenu />
      <div style={{ margin: '5%' }} className={styles.table}>
        <div>
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
                    Registros de fichas que se han solicitado para agregar sin
                    respuesta a la solicitud.
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
        </div>

        <div>
          {none ? 'Elige una de las opciones...' : ''}
          {visual === 'no-accepted' ? (
            <FichasNoAceptadas fichasNoAceptadas={fichas} />
          ) : (
            ''
          )}
          {visual === 'sol-edition' ? <SolicitudesEdicion /> : ''}
          {visual === 'sol-promo' ? <SolicitudesPromotores /> : ''}
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps ({ query }) {
  const res = await fetch(
    `https://plantmatica-api.vercel.app/admin/fichas/${query.token}`
  )
  const { fichas } = await res.json()
  //console.log(fichas)
  return { props: { fichas, notFound: false } }
}
