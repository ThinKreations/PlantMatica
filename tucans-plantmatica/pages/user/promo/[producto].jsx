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

export default function Producto ({ producto, sucursales, arrayEtiquetas }) {
  const [renderProduct, setRenderProduct] = useState(producto)
  const [sucursalesRender, setSucursalesRender] = useState(sucursales)
  const [comentario, setComentario] = useState();

  const publicarComentario = async (id_producto) => {
    const id = localStorage.getItem('id');
  }

  return (
    <>
      <MainHead tituloPestana={producto.nombre} />
      <LayoutMenu />
      <MenuPromo />

      <div className={styles.container}>
        {!Producto ? (
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
          <input onChange={ (e) => setComentario(e.target.value) } className={styles.inputComentario} placeholder='ola'></input>
          <Button size='large' variant='contained' color='success'>
            Subir
          </Button>

          <List>
            <ListItem>
              <ListItemText
                primary='`Nombre de Usuario'
                secondary={
                  <>
                    <Typography
                      sx={{ display: 'inline' }}
                      component='span'
                      variant='body2'
                      color='text.primary'
                    >
                      Fecha jaja
                    </Typography>
                    {`"Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eos, accusamus eius a provident aperiam consequuntur et
                    neque maiores vitae aspernatur, illum tempore quis, eum
                    recusandae ullam incidunt dolorem ducimus fugiat? Porro iste
                    corrupti reprehenderit architecto omnis iure reiciendis sit
                    at eaque eveniet, veniam quibusdam earum temporibus
                    repudiandae modi sunt in excepturi facere. Sit facilis
                    voluptates ex, repudiandae facere cupiditate debitis?"`}
                  </>
                }
              />
            </ListItem>
            <Divider />
          </List>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps ({ params, query }) {
  const res = await fetch(
    `https://mmg7n2ixnk.us-east-2.awsapprunner.com/product/show/${params.producto}`
  )

  const { producto } = await res.json()

  console.log(producto)

  //peticion servidor
  return {
    props: {
      producto,
      notFound: false
    }
  }
}
