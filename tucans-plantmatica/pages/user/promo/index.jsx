import MainHead from '../../../components/MainHead'
import styles from '../../../styles/Promotor.module.css'
import Image from 'next/image'
import Link from 'next/link'
import LayoutMenu from '../../../components/LayoutMenu'
import MenuPromo from '../../../components/promo/MenuPromo'
import { useEffect } from 'react'
import { getInfoPromotor } from '../../api/promotor-https'

export default function Promotor () {

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
              Aquí podrás encontrar los mejores productos y promotores en el mercado de la medicina y herbolaria.
            </h3>
            Si deseas registrarte como promotor, <font color='007200'><Link href='./promo/SignPromotor'><b>haz clic aquí.</b></Link></font>
          </div>
          <hr className={styles.bar}></hr>
          <p>Barra de busqueda aki</p>





        </div>
        
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
                <br />
              </div>
            </div>
            </div>

      </div>
    </>
  )
}

export async function getServerSideProps ({ query }) {
  const res = await fetch(
    `https://plantmatica-api.vercel.app/productos`,
    {
      headers: {
        'x-token': query.token
      }
    }
  )
  const { productos } = await res.json()
  return { props: { productos, notFound: false } }
}