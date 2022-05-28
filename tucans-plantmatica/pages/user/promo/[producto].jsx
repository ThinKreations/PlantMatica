import MainHead from '../../../components/MainHead'
import LayoutMenu from '../../../components/LayoutMenu'
import MenuPromo from '../../../components/promo/MenuPromo'
import { traerEtiquetas } from '../../api/fichas-http'
import { useEffect, useState } from 'react'
import styles from '../../../styles/Promotor.module.css'
import { Alert } from '@mui/material'
import { Card } from '@mui/material'
import { CardContent } from '@mui/material'
import { getInfoPromotor } from '../../api/promotor-https'
import Image from 'next/image'
import uid from 'tiny-uid'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import styles2 from '../../../styles/Promotor.module.css'
import {
  postComentarioProducto,
  deleteComentarioProducto,
  getComentariosProducto
} from '../../api/comentario-http'
import Link from 'next/link'
import ProductosRelacionados from '../../../components/promo/ProductosRelacionados'

export default function Producto ({
  producto,
  sucursales,
  arrayEtiquetas,
  comentarios
}) {
  const [renderProduct, setRenderProduct] = useState(producto)
  const [sucursalesRender, setSucursalesRender] = useState(sucursales)
  const [comentario, setComentario] = useState()
  const [idn, setIdn] = useState('')
  const [comentariosRender, setComentariosRender] = useState(comentarios)

  const publicarComentario = async id_producto => {
    const resp = await postComentarioProducto(id_producto, comentario)
    const resGetComentarios = await getComentariosProducto(id_producto)
    setComentariosRender(resGetComentarios.comentarios)
    setComentario('')
  }

  const borrarComentario = async (id_comentario, id_producto) => {
    const resp = await deleteComentarioProducto(id_comentario)
    const resGetComentarios = await getComentariosProducto(id_producto)
    setComentariosRender(resGetComentarios.comentarios)
  }

  useEffect(() => {
    const ola = localStorage.getItem('id')
    setIdn(ola)
  }, [comentariosRender])

  return (
    <>
      <MainHead tituloPestana={producto.nombre} />
      <LayoutMenu />
      <MenuPromo />

      <div className={styles.container}>
        {!producto ? (
          <Alert>Ha ocurrido un error, recarga la página.</Alert>
        ) : (
          <div className={styles.containerProducto}>
            <div className={styles.fichaUnica}>
              <>
                <aside className={styles.asideFicha}>
                  <font face='Work Sans' color='gray'>
                    {`Etiquetas >ㅤ`}
                    {producto.etiquetas.map(e => {
                      return (
                        <>
                          <q key={uid()}>{e}</q>ㅤ
                        </>
                      )
                    })}
                  </font>

                  <div
                    style={{ marginTop: '10px', borderRadius: '4px' }}
                    className={styles.Image}
                  >
                    <Image
                      src={producto.imagen}
                      className={styles.imagen_cuadrada}
                      width={222}
                      height={222}
                    />
                    <font size={6} face='Work Sans' color='007200'>
                      <h1 className={styles.nombreProducto}>
                        {producto.nombre}
                      </h1>
                    </font>
                  </div>
                  <br />
                  <p>
                    <b>
                      <font face='Work Sans' size={5} color='007200'>
                        Por:{' '}
                      </font>
                    </b>
                    <font size={5}>
                      {producto.referencia_promotor.nombre_publico}
                    </font>
                  </p>
                  <p>
                    <b>
                      <font face='Work Sans' size={5} color='007200'>
                        Descripción:{' '}
                      </font>
                    </b>
                    <font size={5}>{producto.descripcion}</font>
                  </p>

                  <p>
                    <b>
                      <font face='Work Sans' size={5} color='007200'>
                        Disponible en las sucursales ubicadas en:{' '}
                      </font>
                    </b>
                    <ul>
                      {producto.disponibilidad_sucursales.map(d => {
                        return (
                          <li key={uid()}>
                            <font face='Work Sans' size={3}>
                              <b>
                                {d.direccion.estado}, {d.direccion.alcaldia},{' '}
                                {d.direccion.avenida} #{d.direccion.num_ext_int}
                                .
                              </b>
                            </font>
                            <a target='_blank'>
                              <Link
                                href={
                                  'https://www.google.com/maps/place/' +
                                  d.direccion.estado +
                                  '%20' +
                                  d.direccion.alcaldia +
                                  '%20' +
                                  d.direccion.avenida +
                                  '%20' +
                                  d.direccion.num_ext_int
                                }
                              >
                                <a>
                                  <font color='blue' face='Work Sans' size={3}>
                                    {' '}
                                    <b>Buscar en Maps ➜</b>
                                  </font>
                                </a>
                              </Link>
                            </a>
                          </li>
                        )
                      })}
                    </ul>
                  </p>

                  <p>
                    <b>
                      <font face='Work Sans' size={5} color='red'>
                        Advertencias:{' '}
                      </font>
                    </b>
                    <font size={4} color='red'>
                      {producto.advertencias.map(a => {
                        return (
                          <>
                            <li key={uid()}>{a}</li>
                          </>
                        )
                      })}
                    </font>
                  </p>

                  <br />
                  <p>
                    <b>
                      <font size={6} face='Work Sans' color='007200'>
                        Precio:{' '}
                      </font>
                    </b>
                    <font size={6} face='Work Sans'>
                      <b>${producto.costo_fisico} MXN</b>
                    </font>
                  </p>
                </aside>
              </>
            </div>
            {/*<ProductosRelacionados productos={producto} />*/}
          </div>
        )}

        <div>
          <font size={6} face='Work Sans' color='007200'>
            <p>Comentarios:</p>
          </font>
          <input
            onChange={e => setComentario(e.target.value)}
            className={styles.inputComentario}
            value={comentario}
            placeholder='Comentario'
          ></input>
          <Button
            onClick={() => publicarComentario(producto._id)}
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
                            onClick={() =>
                              borrarComentario(c._id, producto._id)
                            }
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
    </>
  )
}

export async function getServerSideProps ({ params }) {

  const res = await fetch(
    `https://mmg7n2ixnk.us-east-2.awsapprunner.com/product/show/${params.producto}`
  )
  const resComentarios = await fetch(
    `https://mmg7n2ixnk.us-east-2.awsapprunner.com/product/show/comentarios/${params.producto}`
  )
  const { comentarios } = await resComentarios.json()
  const { producto } = await res.json()
  console.log(producto)

  /* const resProductosRelacionados = await fetch(
    `https://mmg7n2ixnk.us-east-2.awsapprunner.com/product/coincidencias/${producto.etiquetas[0]}/${producto.etiquetas[1]}/${producto.etiquetas[2]}`
  )
  const resJSONProdRelacionados = await resProductosRelacionados.json();
  console.log(resJSONProdRelacionados)s */

  //peticion servidor
  return {
    props: {
      comentarios,
      producto,
      /* resJSONProdRelacionados, */
      notFound: false
    }
  }
}
