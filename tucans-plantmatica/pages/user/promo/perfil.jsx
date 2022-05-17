import MainHead from '../../../components/MainHead'
import Image from 'next/image'
import Link from 'next/link'
import LayoutMenu from '../../../components/LayoutMenu'
import MenuPromo from '../../../components/promo/MenuPromo'
import styles from '../../../styles/Admin.module.css'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import styles3 from '../../../styles/Promotor.module.css'
import styles2 from '../../../styles/Fichas.module.css'
import Card from '@mui/material/Card'
import { useEffect, useState } from "react"
import CardContent from '@mui/material/CardContent'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'
import CardActions from '@mui/material/CardActions'

export default function PerfilPromotor ({ promotor }) {

  const [token, setToken] = useState()

  useEffect(() => {
    const token_local = localStorage.getItem('token');
    setToken(token_local)
  }, [])

  return (
    <>
      <MainHead tituloPestana={promotor.usuario_referencia.username} />
      <LayoutMenu />
      <MenuPromo />
      <div className={styles3.container}>
        <center>
          <font size={6} face='Work Sans' color='007200'>
            <h1>Perfil (PlantMatica para promotores)</h1>
          </font>
        </center>
        {!promotor ? (
          <>
            <div className={styles3.box_index_divider}>
              <div className={styles3.info}>
                <h3 className={styles3.cuestion}>
                  ¿Por qué registrarse como promotor?
                </h3>
                <p style={{ fontSize: '20px' }}>
                  Con nuestro programa para promotores de PlantMatica podras
                  publicar tus productos relacionado a la herbolaria, registrar
                  las sucursales.
                </p>
                <h3 className={styles3.cuestion}>
                  ¿Cómo beneficia a mi negocio?
                </h3>
                <p style={{ fontSize: '20px' }}>
                  Podrás tener un mejor feedback de tus productos gracias a la
                  comunicación con tus clientes en la plataforma.
                </p>
                <h3 className={styles3.cuestion}>
                  ¿Qué necesito para registrarme?
                </h3>
                <ul style={{ fontSize: '18px' }}>
                  <li>
                    Razón social, o nombre de la persona física titular de la
                    cuenta.
                  </li>
                  <li>
                    Dirección comercial (que sea comprobable con un estado de
                    cuenta
                  </li>
                  <li>con la misma dirección) </li>
                  <li>
                    Nombre público. Este será el nombre de la tienda en la
                    aplicación PlantMatica.{' '}
                  </li>
                  <li>CLABE interbancaria. </li>
                  <li>
                    Tarjeta de crédito del titular de la cuenta: En esta tarjeta
                    se hará cobro
                  </li>
                  <li>
                    de las mensualidades como promotor dentro de la aplicación.{' '}
                  </li>
                  <li>RFC de la empresa o persona física.</li>
                </ul>
                <Link href='/user/promo/SignPromotor'>
                  <button className={styles3.btnSign}>
                    <font size='3' face='Work Sans'>
                      <b>✚ Registrarse como promotor</b>
                    </font>
                  </button>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <>
            {promotor.estado_aprobado === false ? (
              <>
                <Alert severity='warning' variant='filled'>
                  <AlertTitle>
                    {' '}
                    <strong style={{ fontSize: '19px' }}>
                      Advertencia - Promotor no verificado
                    </strong>{' '}
                  </AlertTitle>
                  <p style={{ fontSize: '15px' }}>
                    Revisa la bandeja del correo registrado en tu solicitud al
                    programa de promotores, si hubo algun error con los datos
                    registrados se le notifico en dicho correo, si no tiene
                    algun correo respecto a su solicitud dicha esta siendo
                    procesada.
                  </p>
                  <strong style={{ fontSize: '16px' }}>
                    En caso de que haya algun error, puede editar los datos
                    registrados.
                  </strong>
                </Alert>
              </>
            ) : (
              ''
            )}
            <div className={styles2.imagen_container}>
              <Card sx={{ padding: '15px' }} className={styles2.card}>
                <CardActions>
                  <Link
                    href={`/user/promo/[editarpromo]`}
                    as={`/user/promo/${promotor._id}?token=${token}`}
                  >
                    <a>
                      <button className={styles2.btnCalificar}>
                        Editar datos de promotor.
                      </button>
                    </a>
                  </Link>
                </CardActions>
                <CardContent>
                  <div className={styles.minicard}>
                    <AssignmentIndIcon
                      fontSize='large'
                      className={styles.promo_icon}
                    />
                    <p style={{ marginLeft: '16px' }}>
                      Usuario de referencia <br />
                      Nombre de usuario: {
                        promotor.usuario_referencia.username
                      }{' '}
                      <br />
                      Correo: {promotor.usuario_referencia.correo} <br />
                      Estado de la cuenta: {
                        promotor.usuario_referencia.status
                      }{' '}
                      <br />
                    </p>
                  </div>
                  <div>
                    <p className={styles2.textFich}>{`Nombre público`}: </p>
                    <p className={styles.nombreCP}>{promotor.nombre_publico}</p>
                    <p className={styles2.textFich}>{`Razón social`}: </p>
                    <p className={styles.nombreCP}>{promotor.razon_social}</p>
                    <p className={styles2.textFich}>
                      {`Correo de la empresa`}:{' '}
                    </p>
                    <p className={styles.nombreCP}>{promotor.correo_empresa}</p>
                    <p className={styles.textFich}>Dirección comercial: </p>
                    <p className={styles.nombreCP}>
                      {promotor.direccion_comercial}
                    </p>
                    <p className={styles2.textFich}>{`Teléfono comercial`}: </p>
                    <p className={styles.nombreCP}>
                      {promotor.telefono_comercial}
                    </p>
                    <p className={styles2.textFich}>
                      {`RFC de empresa física o persona`}:{' '}
                    </p>
                    <p className={styles.nombreCP}>*************</p>
                    <p className={styles2.textFich}>
                      {`CLABE interbancaria`}:{' '}
                    </p>
                    <p className={styles.nombreCP}> ************* </p>
                    <p className={styles2.textFich}>{`Tarjeta de crédito`}: </p>
                    <p className={styles.nombreCP}>*************</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export async function getServerSideProps ({ query }) {
  const res = await fetch(
    `https://plantmatica-api.vercel.app/promotor/${query.iduser}`,
    {
      method: 'GET',
      headers: {
        'x-token': query.token
      }
    }
  )
  const { promotor } = await res.json()
  return {
    props: {
      promotor,
      notFound: false
    }
  }
}
