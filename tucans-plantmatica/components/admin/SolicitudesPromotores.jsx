import { useEffect, useState } from 'react'
import uid from 'tiny-uid'
import styles from '../../styles/Admin.module.css'
import { traerFichasNoAceptadas } from '../../pages/api/admin-https'
import Alert from '@mui/material/Alert'
import styles2 from '../../styles/Fichas.module.css'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'

export default function SolicitudesPromotores ({ solicitudesPromotor }) {
  const [solR, setSolR] = useState(solicitudesPromotor)

  useEffect(() => {
    console.log(solR)
  }, [])

  return (
    <>
      <h1 className={styles.promo_title}>Solicitudes de promotores.</h1>
      {solR.length === 0 ? (
        <Alert sx={{ margin: '10px' }} variant='outlined' color='secondary'>
          <p className={styles.promo_title}>
            {`No hay peticiones por promotores...`}
          </p>
        </Alert>
      ) : (
        <>
        {
          solicitudesPromotor.map(sp => {
            return <div key={uid()} >
              <Card sx={{ padding: '15px' }} className={styles2.card}>
                <CardContent>
                  <p className={styles2.textFich} >{`Nombre público`}: </p>
                  <p className={styles.nombreCP}>{sp.nombre_publico}</p>
                  <p className={styles2.textFich} >{`Razón social`}: </p>
                  <p className={styles.nombreCP}>{sp.razon_social}</p>
                  <p className={styles2.textFich} >{`Correo de la empresa`}: </p>
                  <p className={styles.nombreCP}>{sp.correo_empresa}</p>
                  <p className={styles.textFich}>Dirección comercial: </p>
                  <p className={styles.nombreCP} >{sp.direccion_comercial}</p>
                  <p className={styles2.textFich} >{`Teléfono comercial`}: </p>
                  <p className={styles.nombreCP}>{sp.telefono_comercial}</p>
                  <p className={styles2.textFich} >{`RFC de empresa física o persona`}: </p>
                  <p className={styles.nombreCP}>{sp.rfc_empresa_persona_fisica}</p>
                  <p className={styles2.textFich} >{`CLABE interbancaria`}: </p>
                  <p className={styles.nombreCP}>{sp.clabe_interbancaria}</p>
                  <p className={styles2.textFich} >{`Tarjeta de crédito`}: </p>
                  <p className={styles.nombreCP}>{sp.tarjeta_credito_titular_cuenta}</p>
                </CardContent>
                <CardActions>
                <button
                      className={styles2.btnCalificar}
                    >
                      Aceptar promotor
                    </button>
                    <button
                      className={styles2.btnReporte}
                    >
                      Declinar
                    </button>
                </CardActions>
              </Card>
            </div>
          })
        }
        </>
      )}
    </>
  )
}
