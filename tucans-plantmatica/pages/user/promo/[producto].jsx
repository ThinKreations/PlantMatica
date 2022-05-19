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
import { postComentarioProducto, deleteComentarioProducto, getComentariosProducto } from '../../api/comentario-http'

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
    const resGetComentarios = await getComentariosProducto(id_producto);
    setComentariosRender(resGetComentarios.comentarios)
  }

  const borrarComentario = async (id_comentario, id_producto) => {
    const resp = await deleteComentarioProducto(id_comentario);
    const resGetComentarios = await getComentariosProducto(id_producto);
    setComentariosRender(resGetComentarios.comentarios);
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
          <div className={styles.fichaUnica}>
            <>
              <aside className={styles.asideFicha}>
                <div
                  style={{ marginTop: '20px', borderRadius: '4px' }}
                  className={styles.fichaImagen}
                >
                  <Image
                    src={producto.imagen}
                    className={styles.imagen_cuadrada}
                    width={164}
                    height={164}
                  />
                </div>
                <p>{producto.descripcion}</p>
                <p>${producto.costo_fisico} MXN</p>
                Advertencias
                {producto.advertencias.map(a => {
                  return (
                    <>
                      <li>{a}</li>
                    </>
                  )
                })}
                Sucursales ----------------
                <ul>
                  {producto.etiquetas.map(e => {
                    return <li key={uid()}> {e} </li>
                  })}
                </ul>
              </aside>
              <aside className={styles.asideFicha}>
                <font size={6} face='Work Sans' color='007200'>
                  <h1 className={styles.nombreProducto}>{producto.nombre}</h1>
                </font>
              </aside>
            </>
          </div>
        )}

        <div>
          <font size={6} face='Work Sans' color='007200'>
            <p>Comentarios:</p>
          </font>
          <input
            onChange={e => setComentario(e.target.value)}
            className={styles.inputComentario}
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
                            onClick={() => borrarComentario(c._id, producto._id)}
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

export async function getServerSideProps ({ params, query }) {
  const res = await fetch(
    `https://mmg7n2ixnk.us-east-2.awsapprunner.com/product/show/${params.producto}`
  )
  const resComentarios = await fetch(
    `https://mmg7n2ixnk.us-east-2.awsapprunner.com/product/show/comentarios/${params.producto}`
  )
  const { comentarios } = await resComentarios.json()
  const { producto } = await res.json()
  console.log(comentarios)
  //console.log(producto)

  //peticion servidor
  return {
    props: {
      comentarios,
      producto,
      notFound: false
    }
  }
}
