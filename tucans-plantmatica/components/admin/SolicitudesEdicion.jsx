import { useEffect, useState } from 'react'
import styles from '../../styles/Admin.module.css'
import uid from 'tiny-uid'
import Alert from '@mui/material/Alert'
import styles2 from '../../styles/Fichas.module.css'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import { controlSolicitudEdicion } from '../../pages/api/solicitudes-https'
import { getSolPromotor } from '../../pages/api/admin-https'

export default function SolicitudesEdicion ({ solicitudesEdicion }) {
  const [solR, setSol] = useState(solicitudesEdicion)

  const controlFicha = async (id_ficha, control) => {
    const res = controlSolicitudEdicion(id_ficha, control);
    /* Trae las solicitudes jaja neta we */
    const { solFichas } = await getSolPromotor()
    setSol(solFichas);
  }

  useEffect(() => {}, [solR])

  return (
    <>
      <h1 className={styles.edit_title}>Solicitudes de edición.</h1>
      {solR.length === 0 ? (
        <Alert sx={{ margin: '10px' }} variant='outlined' severity='success'>
          <p className={styles.edit_title}>
            {`No hay peticiones por editar fichas...`}
          </p>
        </Alert>
      ) : (
        <>
          {solR.map(f => {
            return (
              <div key={f._id}>
                <Card sx={{ padding: '15px' }} className={styles2.card}>
                  <CardContent>
                    {f.polemica ? (
                      <Alert variant='outlined' severity='warning'>
                        {`Esta planta fue marcada como "polemica", debido a las fronteras legales o su consumo puede volverse peligroso`}
                      </Alert>
                    ) : (
                      ''
                    )}
                    <p className={styles.textFich}>
                      {' '}
                      Usuario que edito: 
                    </p>
                    <p className={styles.nombreC} >{f.datos_edicion.usuario_edicion.username}</p>
                    <p className={styles.nombreC}>Fecha de edición: </p>
                    <p className={styles.com_Info}>
                      {Date.parse(f.datos_edicion.fecha.dia)}/
                      {Date.parse(f.datos_edicion.fecha.mes)}/
                      {Date.parse(f.datos_edicion.fecha.year)}{' '}
                    </p>
                    <p className={styles.nombreC}>
                      Nombre común:
                      {f.nombre_comun}
                    </p>
                    <p className={styles.nombreC}>
                      {' '}
                      Nombre cientifico: {f.nombre_cientifico}
                    </p>
                    <p className={styles.nombreC}>Descripción: </p>
                    <p className={styles2.textFich}>{f.descripcion}</p>
                    <p className={styles.nombreC}>Complemento a: </p>
                    <p className={styles2.textFich}>{f.complemento}</p>
                    {f.caracteristicas_especiales.length > 0 ? (
                      <>
                        <p className={styles.nombreC}>
                          Características especiales:
                        </p>
                        <ul>
                          {f.caracteristicas_especiales.map(ce => {
                            return (
                              <li className={styles2.textFich} key={uid()}>
                                {ce}
                              </li>
                            )
                          })}
                        </ul>
                      </>
                    ) : (
                      <p className={styles.nombreC}>
                        No tiene características especiales
                      </p>
                    )}
                    {f.origen_distribucion.length > 0 ? (
                      <>
                        <p className={styles.nombreC}>Distribución u origen:</p>
                        <ul>
                          {f.origen_distribucion.map(ce => {
                            return (
                              <div key={uid()}>
                                <p className={styles.nombreC}>Lugar: </p>
                                <p className={styles2.textFich}>{ce.nombre}</p>
                                {ce.detalles ? (
                                  <>
                                    <p className={styles.nombreC}>Detalles: </p>
                                    <p className={styles2.textFich}>
                                      {ce.detalles}
                                    </p>
                                  </>
                                ) : (
                                  ''
                                )}
                              </div>
                            )
                          })}
                        </ul>
                      </>
                    ) : (
                      <p className={styles.nombreC}>
                        No se registraron lugares de distribución u origen.
                      </p>
                    )}
                    {f.usos_medicinales.length > 0 ? (
                      <>
                        <p className={styles.nombreC}>Usos medicinales:</p>
                        <ul>
                          {f.usos_medicinales.map(ce => {
                            return (
                              <li className={styles2.textFich} key={uid()}>
                                {ce}
                              </li>
                            )
                          })}
                        </ul>
                      </>
                    ) : (
                      ''
                    )}
                    <div>
                      <p className={styles.nombreC}>Etiquetas: </p>
                      {f.etiquetas.map(e => {
                        return (
                          <p key={e} className={styles2.etiquetas}>
                            {' '}
                            {e}{' '}
                          </p>
                        )
                      })}
                    </div>
                    {f.fuentes.length > 0 ? (
                      <>
                        <p className={styles.nombreC}>Fuentes:</p>
                        <ul>
                          {f.fuentes.map(ce => {
                            return (
                              <li className={styles2.textFich} key={uid()}>
                                {ce}
                              </li>
                            )
                          })}
                        </ul>
                      </>
                    ) : (
                      <p className={styles.nombreC}>
                        No se registraron fuentes
                      </p>
                    )}
                  </CardContent>
                  <CardActions>
                    <button
                      onClick={() => controlFicha(f._id, true)}
                      className={styles2.btnLinkFicha}
                    >
                      Aceptar ficha
                    </button>
                    <button
                      onClick={() => controlFicha(f._id, false)}
                      className={styles2.btnReporte}
                    >
                      Declinar
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
