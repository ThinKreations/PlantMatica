import { useEffect, useState } from 'react'
import styles from '../../styles/Admin.module.css'
import { traerFichasNoAceptadas } from '../../pages/api/admin-https'
import Alert from '@mui/material/Alert'

export default function SolicitudesEdicion () {
  const [solR, setSol] = useState(null)

  return (
    <>
      <h1 className={styles.edit_title}>Solicitudes de edición.</h1>
      {solR === null ? (
        <Alert sx={{ margin: '10px' }} variant='outlined' severity='success'>
          <p className={styles.edit_title}>
            {`No hay peticiones por editar fichas...`}
          </p>
        </Alert>
      ) : (
        ''
      )}
    </>
  )
}
