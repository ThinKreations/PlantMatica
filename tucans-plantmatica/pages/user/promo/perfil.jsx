import MainHead from '../../../components/MainHead'
import Image from 'next/image'
import Link from 'next/link'
import LayoutMenu from '../../../components/LayoutMenu'
import MenuPromo from '../../../components/promo/MenuPromo'
import styles from '../../../styles/Admin.module.css'
import Alert from '@mui/material/Alert'
import styles3 from '../../../styles/Promotor.module.css'
import styles2 from '../../../styles/Fichas.module.css'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import CardContent from '@mui/material/CardContent'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'

export default function PerfilPromotor ({ promotor }) {
  return (
    <>
      <MainHead tituloPestana='Perfil' />
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
          <div className={styles2.imagen_container}>
            <div style={{ minWidth: '420px' }}>
              <List >
                <ListItem disablePadding>
                  <div className={styles.minicard_socios} >ola</div>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                  <ListItemButton component='a' href='#simple-list'>
                    <ListItemText primary='Spam' />
                  </ListItemButton>
                </ListItem>
              </List>
            </div>
            <Card sx={{ padding: '15px' }} className={styles2.card}>
              <CardContent>
                <div className={styles.minicard}>
                  <AssignmentIndIcon className={styles.promo_icon} />
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
                  <p className={styles2.textFich}>{`Correo de la empresa`}: </p>
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
                  <p className={styles2.textFich}>{`CLABE interbancaria`}: </p>
                  <p className={styles.nombreCP}> ************* </p>
                  <p className={styles2.textFich}>{`Tarjeta de crédito`}: </p>
                  <p className={styles.nombreCP}>*************</p>
                </div>
              </CardContent>
            </Card>
          </div>
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
  console.log(promotor)
  return {
    props: {
      promotor,
      notFound: false
    }
  }
}
