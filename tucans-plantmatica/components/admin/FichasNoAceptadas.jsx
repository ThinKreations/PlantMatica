import { useEffect, useState } from 'react'
import styles from '../../styles/Admin.module.css'
import uid from 'tiny-uid'
import Alert from '@mui/material/Alert'
import styles2 from '../../styles/Fichas.module.css'
import styles3 from '../../styles/Promotor.module.css'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Image from "next/image"
import {
  declinarAceptarFicha,
  traerFichasNoAceptadas
} from '../../pages/api/admin-https'

export default function FichasNoAceptadas ({ fichasNoAceptadas }) {
  const [fichasR, setFichasR] = useState(fichasNoAceptadas)

  const controlFicha = async (id_ficha, control) => {
    const id = localStorage.getItem('id')
    declinarAceptarFicha(control, id, id_ficha)
    const { fichas } = await traerFichasNoAceptadas()
    setFichasR(fichas)
  }

  useEffect(() => {}, [fichasR])

  return (
    <>
      <h1 className={styles.not_title}>Fichas no aceptadas.</h1>
      {fichasR.length === 0 ? (
        <Alert sx={{ margin: '10px' }} variant='outlined' severity='error'>
          <p className={styles.not_title}>
            {`No hay peticiones por agregar fichas...`}
          </p>
        </Alert>
      ) : (
        <>
          {fichasR.map(f => {
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
                    <div className={styles3.imagen_container}>
                      <div>
                        <Image
                          src={f.imagen}
                          alt={`${f.nombre_comun} - ${f.nombre_cientifico}`}
                          width={128}
                          height={128}
                          className={styles3.imagen_cuadrada}
                        ></Image>
                      </div>
                      <div className={styles3.container_imagen_nombres}>
                        <p className={styles.nombreC}>Fecha de creación: </p>
                        <p className={styles.com_Info}>
                          {Date.parse(f.datos_creacion.fecha.dia)}/
                          {Date.parse(f.datos_creacion.fecha.mes)}/
                          {Date.parse(f.datos_creacion.fecha.year)}{' '}
                        </p>
                        <p className={styles.nombreC}>
                          Nombre común:
                          {f.nombre_comun}
                        </p>
                        <p className={styles.nombreC}>
                          {' '}
                          Nombre cientifico: {f.nombre_cientifico}
                        </p>
                      </div>
                    </div>
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
