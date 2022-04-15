import MainHead from '../../../components/MainHead'
import styles from '../../../styles/Promotor.module.css'
import Image from 'next/image'
import Link from 'next/link'
import LayoutMenu from '../../../components/LayoutMenu'
import MenuPromo from '../../../components/promo/MenuPromo'

export default function Promotor () {
  return (
    <>
      <MainHead tituloPestana='Promotor' />
      <LayoutMenu />
      <MenuPromo />
      <div className={styles.container}>
        <center>
          <font size={6} face='Work Sans' color='007200'>
            <h1>PlantMatica para promotores</h1>
          </font>
        </center>
        <div className={styles.box_index_divider}>
          <div className={styles.info}>
            <h3 className={styles.cuestion}>
              ¿Por qué registrarse como promotor?
            </h3>
            <p style={{ fontSize: '20px' }}>
              Con nuestro programa para promotores de PlantMatica podras
              publicar tus productos relacionado a la herbolaria, registrar las
              sucursales.
            </p>
            <h3 className={styles.cuestion}>¿Cómo beneficia a mi negocio?</h3>
            <p style={{ fontSize: '20px' }}>
              Podrás tener un mejor feedback de tus productos gracias a la
              comunicación con tus clientes en la plataforma.
            </p>
            <h3 className={styles.cuestion}>¿Qué necesito para registrarme?</h3>
            <ul style={{ fontSize: '18px' }}>
              <li>
                Razón social, o nombre de la persona física titular de la
                cuenta.
              </li>
              <li>
                Dirección comercial (que sea comprobable con un estado de cuenta
              </li>
              <li>con la misma dirección) </li>
              <li>
                Nombre público. Este será el nombre de la tienda en la
                aplicación PlantMatica.{' '}
              </li>
              <li>CLABE interbancaria. </li>
              <li>
                Tarjeta de crédito del titular de la cuenta: En esta tarjeta se
                hará cobro
              </li>
              <li>
                de las mensualidades como promotor dentro de la aplicación.{' '}
              </li>
              <li>RFC de la empresa o persona física.</li>
            </ul>
            <Link href='/user/promo/SignPromotor'>
              <a className={styles.link}>
                No estas registrado como promotor, haz click aqui para
                registrarte
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
