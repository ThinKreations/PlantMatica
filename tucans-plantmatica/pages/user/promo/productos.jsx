import MainHead from '../../../components/MainHead'
import styles from '../../../styles/Promotor.module.css'
import { traerEtiquetas } from '../../api/fichas-http'
import Image from 'next/image'
import Link from 'next/link'
import LayoutMenu from '../../../components/LayoutMenu'
import MenuPromo from '../../../components/promo/MenuPromo'
import Registrar from '../../../components/promo/RegistrarProducto'
import EditIcon from '@mui/icons-material/Edit'

export default function Sucursales ({ arrayEtiquetas, sucursales }) {
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
        


        <hr className={styles.bar} />

        <div className={styles.sucursales}>
          <font size={5} face='Work Sans' color='007200'>
            <center>
              <h1>Tus Productos</h1>
            </center>
          </font>

          <div className={styles.fichero}>
            <div className={styles.ficha}>
              <aside className={styles.dataProductos}>
                <font size={2} face='Work Sans' color='007200'>
                  <h1>`Nombre`</h1>
                  <h3>`Promotor/distribuidor`</h3>
                  <h3>`Tipo de producto`</h3>
                  <h3>Descripción del producto</h3>
                  <h3>En tienda: `Sí/No`</h3>
                  <h3>En línea: `Sí/No`</h3>
                </font>
              </aside>
              <aside className={styles.dataProductos}>
                <font size={1} face='Work Sans' color='007200'>
                  <h2>Etiquetas:</h2>
                  <h2>Advertencias:</h2>
                  <h2>Precios:</h2>
                  <h2>Sucursales donde se encuentra:</h2>

                  <font size={2} face='Work Sans'>
                    <li>
                      <b>Sucursal `1`</b>
                    </li>
                    <li>
                      <b>Sucursal `1`</b>
                    </li>
                    <li>
                      <b>Sucursal `1`</b>
                    </li>
                    <li>
                      <b>Sucursal `1`</b>
                    </li>
                    <li>
                      <b>Sucursal `1`</b>
                    </li>
                    <li>
                      <b>Sucursal `1`</b>
                    </li>
                  </font>
                </font>
              </aside>
              <div>
                <button className={styles.btnEdit}>
                  <EditIcon
                    className={styles.editIcon}
                    fontSize='medium'
                    color='success'
                  />
                </button>
                <br />
              </div>
            </div>

            <div className={styles.ficha}>
              <aside className={styles.dataProductos}>
                <font size={2} face='Work Sans' color='007200'>
                  <h1>`Nombre`</h1>
                  <h3>`Promotor/distribuidor`</h3>
                  <h3>`Tipo de producto`</h3>
                  <h3>Descripción del producto</h3>
                  <h3>En tienda: `Sí/No`</h3>
                  <h3>En línea: `Sí/No`</h3>
                </font>
              </aside>
              <aside className={styles.dataProductos}>
                <font size={1} face='Work Sans' color='007200'>
                  <h2>Etiquetas:</h2>
                  <h2>Advertencias:</h2>
                  <h2>Precios:</h2>
                  <h2>Sucursales donde se encuentra:</h2>

                  <font size={2} face='Work Sans'>
                    <li>
                      <b>Sucursal `1`</b>
                    </li>
                    <li>
                      <b>Sucursal `1`</b>
                    </li>
                    <li>
                      <b>Sucursal `1`</b>
                    </li>
                    <li>
                      <b>Sucursal `1`</b>
                    </li>
                    <li>
                      <b>Sucursal `1`</b>
                    </li>
                    <li>
                      <b>Sucursal `1`</b>
                    </li>
                  </font>
                </font>
              </aside>
              <div>
                <button className={styles.btnEdit}>
                  <EditIcon
                    className={styles.editIcon}
                    fontSize='medium'
                    color='success'
                  />
                </button>
                <br />
              </div>
            </div>
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
    `https://plantmatica-api.vercel.app/product/${query.idpromo}`,
    {
      headers: {
        'x-token': query.token
      }
    }
  )

  const { productos } = await resProd.json();
  const { sucursales } = await res.json()

  return {
    props: { arrayEtiquetas, sucursales, notFound: false }
  }
}
