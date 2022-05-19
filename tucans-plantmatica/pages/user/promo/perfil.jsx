import MainHead from '../../../components/MainHead'
import Link from 'next/link'
import LayoutMenu from '../../../components/LayoutMenu'
import MenuPromo from '../../../components/promo/MenuPromo'
import styles4 from '../../../styles/Admin.module.css'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import styles3 from '../../../styles/Promotor.module.css'
import styles from '../../../styles/Forms.module.css'
import styles2 from '../../../styles/Fichas.module.css'
import Card from '@mui/material/Card'
import { useEffect, useState } from 'react'
import CardContent from '@mui/material/CardContent'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'
import CardActions from '@mui/material/CardActions'
import EditIcon from '@mui/icons-material/Edit'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { actualizarPromotor } from '../../../pages/api/promotor-https'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'

export default function PerfilPromotor ({ promotor }) {
  const [token, setToken] = useState()
  const [edit, setEdit] = useState(false)

  const schemaSignPromotor = yup.object().shape({
    nombre_publico: yup
      .string()
      .required('El nombre público obligatorio')
      .default(promotor ? promotor.nombre_publico : ''),
    razon_social: yup
      .string()
      .required('La razón social es obligatoria')
      .default(promotor ? promotor.nombre_publico : ''),
    direccion_comercial: yup
      .string()
      .required('La dirección es obligatoria')
      .default(promotor ? promotor.direccion_comercial : ''),
    telefono_comercial: yup
      .string()
      .required('Número obligatorio')
      .min(10, 'Debe ser minimo de 10 caracteres')
      .default(promotor ? promotor.telefono_comercial : ''),
    correo_comercial: yup
      .string()
      .required('Correo obligatorio')
      .email('Formato de correo no valido')
      .default(promotor ? promotor.correo_empresa : ''),
    clabe_interbancaria: yup
      .string()
      .required('CLABE obligatoria')
      .min(18, 'CLABE no valida'),
    tarjeta_credito: yup.string().min(16, 'Tarjeta no valida'),
    rfc: yup
      .string()
      .required('El RFC obligatorio')
      .min(13, 'RFC no valida')
      .max(13, 'El RFC tiene sólo 13 caratéres')
  })

  const initialValues = schemaSignPromotor.cast()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(schemaSignPromotor)
  })

  const onSubmit = async data => {
    const res = await actualizarPromotor(promotor._id, data)
    setEdit(false)
    location.reload()
  }

  useEffect(() => {
    const token_local = localStorage.getItem('token')
    setToken(token_local)
  }, [])

  return (
    <>
      <MainHead tituloPestana={` Promotor - ${(promotor) ? promotor.nombre_publico : "Perfil" }`} />
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
                    registrados se le notifico en dicho correo y puede editar
                    los datos en esta pagina, si no tiene algun correo respecto
                    a su solicitud dicha esta siendo procesada.
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
                  <button
                    onClick={() => setEdit(!edit)}
                    className={styles2.btnCalificar}
                  >
                    {edit === false ? <EditIcon /> : <VisibilityIcon />}
                    {edit === false ? 'Editar' : 'Visualizar'} datos de
                    promotor.
                  </button>
                </CardActions>
                <CardContent>
                  {edit === false ? (
                    <>
                      <div className={styles4.minicard}>
                        <AssignmentIndIcon
                          fontSize='large'
                          className={styles4.promo_icon}
                        />
                        <p style={{ marginLeft: '16px' }}>
                          Usuario de referencia <br />
                          Nombre de usuario:{' '}
                          {promotor.usuario_referencia.username} <br />
                          Correo: {promotor.usuario_referencia.correo} <br />
                          Estado de la cuenta:{' '}
                          {promotor.usuario_referencia.status} <br />
                        </p>
                      </div>
                      <div>
                        <p className={styles2.textFich}>{`Nombre público`}: </p>
                        <p className={styles4.nombreCP}>
                          {promotor.nombre_publico}
                        </p>
                        <p className={styles2.textFich}>{`Razón social`}: </p>
                        <p className={styles4.nombreCP}>
                          {promotor.razon_social}
                        </p>
                        <p className={styles2.textFich}>
                          {`Correo de la empresa`}:{' '}
                        </p>
                        <p className={styles4.nombreCP}>
                          {promotor.correo_empresa}
                        </p>
                        <p className={styles4.textFich}>
                          Dirección comercial:{' '}
                        </p>
                        <p className={styles4.nombreCP}>
                          {promotor.direccion_comercial}
                        </p>
                        <p className={styles2.textFich}>
                          {`Teléfono comercial`}:{' '}
                        </p>
                        <p className={styles4.nombreCP}>
                          {promotor.telefono_comercial}
                        </p>
                        <p className={styles2.textFich}>
                          {`RFC de empresa física o persona`}:{' '}
                        </p>
                        <p className={styles4.nombreCP}>*************</p>
                        <p className={styles2.textFich}>
                          {`CLABE interbancaria`}:{' '}
                        </p>
                        <p className={styles4.nombreCP}> ************* </p>
                        <p className={styles2.textFich}>
                          {`Tarjeta de crédito`}:{' '}
                        </p>
                        <p className={styles4.nombreCP}>*************</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className={styles4.minicard}>
                        <AssignmentIndIcon
                          fontSize='large'
                          className={styles4.promo_icon}
                        />
                        <p style={{ marginLeft: '16px' }}>
                          Usuario de referencia <br />
                          Nombre de usuario:{' '}
                          {promotor.usuario_referencia.username} <br />
                          Correo: {promotor.usuario_referencia.correo} <br />
                          Estado de la cuenta:{' '}
                          {promotor.usuario_referencia.status} <br />
                        </p>
                      </div>
                      <form
                        style={{ padding: '3%' }}
                        onSubmit={handleSubmit(onSubmit)}
                        className={styles.root}
                      >
                        <Alert severity='info'>
                          <AlertTitle>Editar datos</AlertTitle>
                          En caso de necesitar aclaraciones, envíe un correo a
                          soporte. (
                          <strong>
                            <a
                              className={styles.link}
                              href='mailto:software.tucans@gmail.com'
                            >
                              software.tucans@gmail.com
                            </a>
                          </strong>
                          )
                        </Alert>
                        <div className={styles.cont_input}>
                          <label className={styles.text}>Nombre público</label>
                          <input
                            {...register('nombre_publico')}
                            className={styles.input}
                          />
                          <p className={styles.errors}>
                            {errors.nombre_publico?.message}
                          </p>
                        </div>
                        <div className={styles.cont_input}>
                          <label className={styles.text}>Razón social</label>
                          <input
                            {...register('razon_social')}
                            className={styles.input}
                          />
                          <p className={styles.errors}>
                            {errors.razon_social?.message}
                          </p>
                        </div>
                        <div className={styles.cont_input}>
                          <label
                            className={styles.text}
                          >{`Dirección comercial`}</label>
                          <input
                            {...register('direccion_comercial')}
                            type='text'
                            className={styles.input}
                          />
                          <p className={styles.errors}>
                            {errors.direccion_comercial?.message}
                          </p>
                        </div>
                        <div className={styles.cont_input}>
                          <label className={styles.text}>
                            Teléfono comercial
                          </label>
                          <input
                            {...register('telefono_comercial')}
                            type='number'
                            className={styles.input}
                          />
                          <p className={styles.errors}>
                            {errors.telefono_comercial?.message}
                          </p>
                        </div>
                        <div className={styles.cont_input}>
                          <label className={styles.text}>
                            Correo comercial
                          </label>
                          <input
                            {...register('correo_comercial')}
                            type='text'
                            className={styles.input}
                          />
                          <p className={styles.errors}>
                            {errors.correo_comercial?.message}
                          </p>
                        </div>

                        <div className={styles.cont_input}>
                          <label className={styles.text}>
                            CLABE interbancaria
                          </label>
                          <input
                            {...register('clabe_interbancaria')}
                            type='number'
                            className={styles.input}
                          />
                          <p className={styles.errors}>
                            {errors.clabe_interbancaria?.message}
                          </p>
                        </div>
                        <div className={styles.cont_input}>
                          <label className={styles.text}>
                            Tarjeta de crédito del titular
                          </label>
                          <input
                            {...register('tarjeta_credito')}
                            type='number'
                            className={styles.input}
                          />
                          <p className={styles.errors}>
                            {errors.tarjeta_credito?.message}
                          </p>
                        </div>
                        <div className={styles.cont_input}>
                          <label className={styles.text}>RFC</label>
                          <input
                            {...register('rfc')}
                            type='text'
                            className={styles.input}
                          />
                          <p className={styles.errors}>{errors.rfc?.message}</p>
                        </div>

                        <button type='submit' className={styles.btnSubmit}>
                          Editar datos
                        </button>
                      </form>
                    </>
                  )}
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
    `https://mmg7n2ixnk.us-east-2.awsapprunner.com/promotor/${query.iduser}`,
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
