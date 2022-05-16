import MainHead from '../../../components/MainHead'
import styles from '../../../styles/Promotor.module.css'
import { traerEtiquetas } from '../../api/fichas-http'
import Image from 'next/image'
import Link from 'next/link'
import LayoutMenu from '../../../components/LayoutMenu'
import MenuPromo from '../../../components/promo/MenuPromo'
import Registrar from '../../../components/promo/RegistrarProducto'
import EditIcon from '@mui/icons-material/Edit'
import uid from 'tiny-uid'

export default function Productos ({ arrayEtiquetas, sucursales, productos }) {
  return (
    <>
      <MainHead tituloPestana='Productos' />
      <LayoutMenu />
      <MenuPromo />
      <div className={styles.container}>
        <center>
          <font size={6} face='Work Sans' color='007200'>
            <h1>Productos</h1>
          </font>
        </center>
        <p>
          Aquí va la barra de búsqueda y los productos que estén registrados
        </p>

        <hr className={styles.bar} />

        <div className={styles.sucursales}>
          <font size={5} face='Work Sans' color='007200'>
            <center>
              <h1>Tus Productos</h1>
            </center>
          </font>

          <div className={styles.fichero}>
            {productos.map(producto => {
              return (
                <div className={styles.ficha} key={producto._id}>
                  <div className={styles.fichaImagen}>
                    <Image src={producto.imagen} width={128} height={128} />
                  </div>
                  <aside
                    className={styles.dataProductos}
                    style={{ paddingLeft: '20px' }}
                  >
                    <font size={3} face='Work Sans' color='007200'>
                      <h2>{producto.nombre}</h2>
                    </font>

                    <p>{producto.descripcion}</p>
                    <p>Costo físico: ${producto.costo_fisico} mxn</p>
                    <font size={2} face='Work Sans' color='007200'>
                      <h2>Sucursales donde se encuentra:</h2>
                    </font>
                    <font size={3} face='Work Sans'>
                      <ul>
                        {producto.disponibilidad_sucursales.map(sucursal => {
                          return (
                            <li key={sucursal._id}>
                              {sucursal.direccion.estado} -{' '}
                              {sucursal.direccion.alcaldia} -{' '}
                              {sucursal.direccion.avenida} -{' '}
                              {sucursal.direccion.num_ext_int}
                            </li>
                          )
                        })}
                      </ul>
                      <font size={2} face='Work Sans' color='007200'>
                        <h2>
                          Advertencias, contradicciones, efectos secundarios:
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
                </div>
              )
            })}
          </div>
        </div>

        <hr className={styles.bar} />
        <center>
          <Registrar
            etiquetasRender={arrayEtiquetas}
            sucursalesRender={sucursales}
          />
        </center>
      </div>
    </>
  )
}

export async function getServerSideProps ({ query }) {
  const { arrayEtiquetas } = await traerEtiquetas()
  const res = await fetch(
    `https://plantmatica-api.vercel.app/sucursal/${query.idpromo}`,
    {
      headers: {
        'x-token': query.token
      }
    }
  )

  const resProd = await fetch(
    `https://plantmatica-api.vercel.app/product/promo/${query.idpromo}`,
    {
      headers: {
        'x-token': query.token
      }
    }
  )

  const { productos } = await resProd.json()
  const { sucursales } = await res.json()

  return {
    props: { arrayEtiquetas, sucursales, productos, notFound: false }
  }
}
