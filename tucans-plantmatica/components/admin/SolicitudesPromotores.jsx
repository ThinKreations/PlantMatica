import { useEffect, useState } from 'react'
import styles from '../../styles/Admin.module.css'
import { traerFichasNoAceptadas } from '../../pages/api/admin-https'
import Alert from '@mui/material/Alert'

export default function SolicitudesPromotores () {
  const [solR, setSolR] = useState(null)

  return (
    <>
      <h1 className={styles.promo_title}>Solicitudes de promotores.</h1>
      {solR === null ? (
        <Alert sx={{ margin: '10px' }} variant='outlined' color='secondary'>
          <p className={styles.promo_title}>
            {`No hay peticiones por promotores...`}
          </p>
        </Alert>
      ) : (
        ''
      )}
    </>
  )
}
