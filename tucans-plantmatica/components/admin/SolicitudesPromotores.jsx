import { useEffect, useState } from 'react'
import uid from 'tiny-uid'
import styles from '../../styles/Admin.module.css'
import Alert from '@mui/material/Alert'
import styles2 from '../../styles/Fichas.module.css'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'
import { controlSolPromotor, getSolPromotor } from '../../pages/api/admin-https'

export default function SolicitudesPromotores ({ solicitudesPromotor }) {
  const [solR, setSolR] = useState(solicitudesPromotor)

  const controlSolR = async (control, id_promo) => {
    controlSolPromotor(control, id_promo)
    const { solPromo } = await getSolPromotor()
    setSolR(solPromo)
  }

  useEffect(() => {}, [solR])

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
          {solR.map(sp => {
            return (
              <div key={uid()}>
                <Card sx={{ padding: '15px' }} className={styles2.card}>
                  <CardContent>
                    <div className={styles.minicard}>
                      <AssignmentIndIcon className={styles.promo_icon}  />
                      <p>
                        Usuario de referencia <br/>
                        Nombre de usuario: {sp.usuario_referencia.username} <br/>
                        Correo: {sp.usuario_referencia.correo} <br/>
                        Estado de la cuenta: {sp.usuario_referencia.status} <br/>
                      </p>
                    </div>
                    <p className={styles2.textFich}>{`Nombre público`}: </p>
                    <p className={styles.nombreCP}>{sp.nombre_publico}</p>
                    <p className={styles2.textFich}>{`Razón social`}: </p>
                    <p className={styles.nombreCP}>{sp.razon_social}</p>
                    <p className={styles2.textFich}>
                      {`Correo de la empresa`}:{' '}
                    </p>
                    <p className={styles.nombreCP}>{sp.correo_empresa}</p>
                    <p className={styles.textFich}>Dirección comercial: </p>
                    <p className={styles.nombreCP}>{sp.direccion_comercial}</p>
                    <p className={styles2.textFich}>{`Teléfono comercial`}: </p>
                    <p className={styles.nombreCP}>{sp.telefono_comercial}</p>
                    <p className={styles2.textFich}>
                      {`RFC de empresa física o persona`}:{' '}
                    </p>
                    <p className={styles.nombreCP}>
                      {sp.rfc_empresa_persona_fisica}
                    </p>
                    <p className={styles2.textFich}>
                      {`CLABE interbancaria`}:{' '}
                    </p>
                    <p className={styles.nombreCP}>{sp.clabe_interbancaria}</p>
                    <p className={styles2.textFich}>{`Tarjeta de crédito`}: </p>
                    <p className={styles.nombreCP}>
                      {sp.tarjeta_credito_titular_cuenta}
                    </p>
                  </CardContent>
                  <CardActions>
                    <button
                      onClick={() => controlSolR(true, sp._id)}
                      className={styles2.btnCalificar}
                    >
                      Aceptar promotor
                    </button>
                    <button
                      onClick={() => controlSolR(false, sp._id)}
                      className={styles.btnInfoSol}
                    >
                      Declinar solicitud.
                    </button>
                    <button
                      onClick={() => controlSolR('delete', sp._id)}
                      className={styles.btnDelete}
                    >
                      Eliminar definitivamente
                    </button>
                  </CardActions>
                </Card>
              </div>
            )
          })}
        </>
      )}
    </>
  )
}
