import MainHead from '../../../components/MainHead'
import styles from '../../../styles/Promotor.module.css'
import Link from 'next/link'
import LayoutMenu from '../../../components/LayoutMenu'
import MenuPromo from '../../../components/promo/MenuPromo'
import { useEffect, useState } from 'react'
import { getInfoPromotor } from '../../api/promotor-https'
import Image from 'next/image'
import uid from 'tiny-uid'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function Promotor ({ productos }) {
  const [renderProduct, setRenderProduct] = useState(productos)

  useEffect(() => {
    getInfoPromotor()
  }, [])

  return (
    <>
      <MainHead tituloPestana='Promotor' />
      <LayoutMenu />
      <MenuPromo />
      <div className={styles.container}>
        <center>
          <font size={5} face='Work Sans' color='007200'>
            <h1>¡Bienvenido!</h1>
          </font>
        </center>
        <div className={styles.box_index_divider}>
          <div className={styles.info}>
            <h3 className={styles.cuestion}>
              Aquí podrás encontrar los mejores productos y promotores en el
              mercado de la medicina y herbolaria.
            </h3>
            Si deseas registrarte como promotor,{' '}
            <font color='007200'>
              <Link href='./promo/SignPromotor'>
                <b>haz clic aquí.</b>
              </Link>
            </font>
          </div>
          <hr className={styles.bar}></hr>
          <p>Barra de busqueda aki</p>
        </div>

        {renderProduct.length === 0 ? (
          <>
            <Alert variant='outlined' severity='info'>
              <AlertTitle>No hay productos</AlertTitle>
              No hay productos registrados en la página
              <strong> Si esto es un error recarga la pagina</strong>
            </Alert>
          </>
        ) : (
          <div className={styles.fichero}>
            {renderProduct.map(producto => {
              return (
                <>
                  <Card
                    key={producto._id}
                    sx={{ maxWidth: 350, marginTop: '20px' }}
                  >
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
                    <CardContent>
                      <aside
                        className={styles.dataProductos}
                        style={{ paddingLeft: '20px' }}
                      >
                        <font size={3} face='Work Sans' color='007200'>
                          <h2>{producto.nombre}</h2>
                        </font>

                        <p>{producto.descripcion}</p>
                        <p>Costo físico: ${producto.costo_fisico} mxn</p>
                        <font size={3} face='Work Sans'>
                          <font size={2} face='Work Sans' color='007200'>
                            <h2>
                              Advertencias, contradicciones, efectos
                              secundarios:
                            </h2>
                          </font>
                          <ul>
                            {producto.advertencias.map(a => {
                              return <li key={uid()}>{a}</li>
                            })}
                          </ul>
                          <font size={2} face='Work Sans' color='007200'>
                            <h2>Etiquetas:</h2>
                          </font>
                          <ul>
                            {producto.etiquetas.map(e => {
                              return <li key={uid()}> {e} </li>
                            })}
                          </ul>
                        </font>
                      </aside>
                    </CardContent>
                    <CardActions
                      sx={{ alignItems: 'center', justifyContent: 'center' }}
                    >
                      <Link href="./promo/[producto]" as={`./promo/${producto._id}`}>
                      <Button size='large' variant='contained' color='success'>
                        Mas información
                      </Button>
                      </Link>
                    </CardActions>
                  </Card>
                </>
              )
            })}
          </div>
        )}
      </div>
    </>
  )
}

export async function getServerSideProps ({ query }) {
  const res = await fetch(
    `https://plantmatica-api.vercel.app/product/visualizar-productos`,
    {
      headers: {
        'x-token': query.token
      }
    }
  )
  const { productos } = await res.json()
  return { props: { productos, notFound: false } }
}
