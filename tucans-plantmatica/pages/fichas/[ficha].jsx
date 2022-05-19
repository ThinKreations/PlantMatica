import React from 'react'
import Image from 'next/image'
import Footy from '../../components/footy'
import LayoutMenu from '../../components/LayoutMenu'
import MainHead from '../../components/MainHead'
import styles from '../../styles/Fichas.module.css'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import uid from 'tiny-uid'
import CardContent from '@mui/material/CardContent'
import Slider from '@mui/material/Slider'
import Link from 'next/link'
import Alert from '@mui/material/Alert'
import { guardarFichaHttp } from '../api/request'
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import {
  postComentario,
  getComentarios,
  deleteComentarioFicha
} from '../api/comentario-http'
import styles2 from '../../styles/Promotor.module.css'
import Typography from '@mui/material/Typography'

export default function Ficha ({ ficha, comentarios = [] }) {
  const [idn, setIdn] = useState('')
  const [comentario, setComentario] = useState('')
  const [comentariosRender, setComentariosRender] = useState(comentarios)

  const guardarFicha = async id_ficha => {
    const token = localStorage.getItem('token')
    const id = localStorage.getItem('id')
    await guardarFichaHttp(id_ficha, id, token)
  }

  const publicarComentario = async id_ficha => {
    const id = localStorage.getItem('id')
    const response = await postComentario(id, id_ficha, comentario)
    const resGetComentarios = await getComentarios(id_ficha)
    setComentariosRender(resGetComentarios.comentarios)
  }

  const borrarComentario = async (id_comentario, id_ficha) => {
    const response = await deleteComentarioFicha(id_comentario)
    const resGetComentarios = await getComentarios(id_ficha)
    setComentariosRender(resGetComentarios.comentarios)
  }

  useEffect(() => {
    const ola = localStorage.getItem('id')
    setIdn(ola)
  }, [comentariosRender])

  return (
    <div>
      <MainHead tituloPestana={ficha.nombre_comun} />
      <LayoutMenu />
      <div className={styles.containerFicha}>
        {!ficha.polemica ? (
          ''
        ) : (
          <Alert sx={{ margin: '10px' }} variant='outlined' severity='error'>
            <p className={styles.text_danger}>
              {`Tucan's Software no es responsable de efectos negativos a la salud, asi como de aquellas acciones legales que se tomen contra la persona por consumo ilegal de esta planta. Para mas referencia consulte a su medico o su constitución.`}
            </p>
          </Alert>
        )}

        <Card variant='outlined' className={styles.base}>
          <CardContent>
            <div className={styles.imagen_container}>
              <div>
                <Image
                  src={ficha.imagen}
                  alt={`${ficha.nombre_comun} - ${ficha.nombre_cientifico}`}
                  width={128}
                  height={128}
                  className={styles.imagen_cuadrada}
                ></Image>
              </div>
              <div className={styles.container_imagen_nombres}>
                <p className={styles.textU}>{`Nombre común: `}</p>
                <p className={styles.titlefichaU}>{ficha.nombre_comun}</p>
                <hr className={styles.division} />
                <p className={styles.textU}>{`Nombre cientifico: `}</p>
                <p className={styles.titlefichaU}>{ficha.nombre_cientifico}</p>
              </div>
            </div>
            <hr className={styles.division} />
            {ficha.origen_distribucion.length > 0 ? (
              <>
                <p className={styles.textU2}>{`Origen y distribución: `}</p>

                {ficha.origen_distribucion.map(o => {
                  return (
                    <div key={o.nombre}>
                      <p className={styles.titlefichaU2}>Nombre:</p>
                      <p className={styles.textU2}>{o.nombre}</p>
                      <br />
                      {o.detalles ? (
                        <>
                          <p className={styles.titlefichaU2}>Detalles: </p>
                          <p className={styles.textU2}>{o.detalles}</p>
                        </>
                      ) : (
                        ''
                      )}

                      <br />
                    </div>
                  )
                })}
              </>
            ) : (
              <p
                className={styles.textU2}
              >{`No se registraron lugares de origen o distribución`}</p>
            )}

            <hr className={styles.division} />
            <p className={styles.textD}>{`Descripcion: `}</p>
            <p className={styles.textU2}>{ficha.descripcion}</p>
            <hr className={styles.division} />
            {ficha.caracteristicas_especiales.length > 0 ? (
              <>
                <p
                  className={styles.titlefichaU}
                >{`Caracteristicas especiales: `}</p>
                <ul>
                  {ficha.caracteristicas_especiales.map(c => {
                    return (
                      <li key={c} className={styles.lista}>
                        {c}
                      </li>
                    )
                  })}
                </ul>
              </>
            ) : (
              <p
                className={styles.titlefichaU}
              >{`No se registraron características especiales.`}</p>
            )}

            <hr className={styles.division} />
            <p
              className={styles.titlefichaU}
            >{`Alternativa y complementos a: `}</p>
            <p className={styles.textU2}>{ficha.complemento}</p>
            <hr className={styles.division} />
            {ficha.consumo.length > 0 ? (
              <>
                <p className={styles.titlefichaU}>Consumo:</p>
                <br />

                <ul>
                  {ficha.consumo.map(fc => {
                    return (
                      <li key={fc} className={styles.lista}>
                        {fc}
                      </li>
                    )
                  })}
                </ul>
              </>
            ) : (
              <p className={styles.titlefichaU}>
                No se registraron formas de consumo.
              </p>
            )}

            <hr className={styles.division} />
            {ficha.usos_medicinales.length > 0 ? (
              <>
                <p className={styles.titlefichaU}>Usos medicinales:</p>
                <br />
                <ul>
                  {ficha.usos_medicinales.map(u => {
                    return (
                      <li key={u} className={styles.lista}>
                        {u}
                      </li>
                    )
                  })}
                </ul>
              </>
            ) : (
              <p className={styles.titlefichaU}>
                No se registraron usos medicinales.
              </p>
            )}

            <hr className={styles.division} />

            {ficha.fuentes.length > 0 ? (
              <>
                <div className={styles.fuentes}>
                  <p>Fuentes:</p>
                  <ul>
                    {ficha.fuentes.map(ff => {
                      return <li key={ff}>{ff}</li>
                    })}
                  </ul>
                </div>
              </>
            ) : (
              <div className={styles.fuentes}>
                <p>No se registraron fuentes.</p>
              </div>
            )}

            <hr className={styles.division} />

            <p className={styles.titleficha}>{`Etiquetas: `}</p>

            {ficha.etiquetas.map(e => {
              return (
                <p key={e} className={styles.etiquetas}>
                  {' '}
                  {e}{' '}
                </p>
              )
            })}

            <hr className={styles.division} />

            <hr className={styles.division} />
          </CardContent>
          <CardActions>
            <Link
              href={`/fichas/editar/[edit]`}
              as={`/fichas/editar/${ficha._id}`}
            >
              <a>
                <button
                  className={styles.btnSolicitud}
                >{`Solicitud de edicion`}</button>
              </a>
            </Link>
            <button
              onClick={() => guardarFicha(ficha._id)}
              className={styles.btnguardar}
            >{`Guardar ficha`}</button>
          </CardActions>
        </Card>

        <div>
          <font size={6} face='Work Sans' color='007200'>
            <p>Comentarios:</p>
          </font>
          <input
            onChange={e => setComentario(e.target.value)}
            className={styles2.inputComentario}
            placeholder='Escriba su comentario'
          ></input>
          <Button
            onClick={() => publicarComentario(ficha._id)}
            size='large'
            variant='contained'
            color='success'
          >
            Subir
          </Button>

          {comentariosRender.length > 0 ? (
            <>
              <List>
                {comentariosRender.map(c => {
                  return (
                    <div key={c._id}>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar
                            alt={c.ref_user.username}
                            src={c.ref_user.imagen}
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <>
                              <Typography
                                sx={{ display: 'inline' }}
                                component='span'
                                variant='h5'
                                color='text.secondary'
                              >
                                {c.ref_user.username}
                              </Typography>
                            </>
                          }
                          secondary={
                            <>
                              <Typography
                                sx={{ display: 'inline' }}
                                component='span'
                                variant='body1'
                                color='text.primary'
                              >
                                {`${Date.parse(
                                  c.fecha_comenta.dia
                                )}/${Date.parse(
                                  c.fecha_comenta.mes
                                )}/${Date.parse(c.fecha_comenta.year)} - `}
                              </Typography>
                              <Typography
                                variant='body1'
                                color='text.primary'
                                component='span'
                              >
                                {`${c.comentario}`}
                              </Typography>
                            </>
                          }
                        />
                        {idn === c.ref_user._id ? (
                          <p
                            onClick={() => borrarComentario(c._id, ficha._id)}
                            className={styles2.borrar_comentario}
                          >
                            Borrar
                          </p>
                        ) : (
                          ''
                        )}
                      </ListItem>

                      <Divider />
                    </div>
                  )
                })}
              </List>
            </>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps ({ params }) {
  const res = await fetch(
    `https://mmg7n2ixnk.us-east-2.awsapprunner.com/ficha/${params.ficha}`
  )
  const ficha = await res.json()
  const resComentarios = await fetch(
    `https://mmg7n2ixnk.us-east-2.awsapprunner.com/ficha/show/comentarios/${params.ficha}`
  )
  const { comentarios } = await resComentarios.json()
  console.log(comentarios)
  return {
    props: { comentarios, ficha: ficha.ficha, notFound: false }
  }
}
