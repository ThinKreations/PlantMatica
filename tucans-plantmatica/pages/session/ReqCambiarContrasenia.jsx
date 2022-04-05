import IconPlantMatica from '../../components/IconPlantMatica'
import LayoutIndex from '../../components/LayoutIndex'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import MainHead from '../../components/MainHead'
import styles from '../../styles/Forms.module.css'
import { schemaCorreo } from "../../schemas/correo";
import { reqCambiarContrasena } from '../api/user-https'

export default function ReqCambiarContrasenia () {

    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm({
        resolver: yupResolver(schemaCorreo)
      })

  const onSubmit = async data => {
    const { password } = data;
    reqCambiarContrasena(password);
  }

  return (
    <>
      <MainHead tituloPestana='Cambiar Contraseña (Correo)' />
      <LayoutIndex>
        <div style={{ margin: '15%' }}>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.root}>
            <center>
              <h2 className={styles.title}>
                Escribe la dirección de correo con la que te registraste, te
                llegara un correo para que puedas establecer una nueva
                contraseña.
              </h2>
              <IconPlantMatica wd={128} hg={128} />
            </center>
            <br />
            <br />
            <div className={styles.cont_input}>
              <label className={styles.text}>Correo</label>
              <input {...register('correo')} className={styles.input} />
              <p className={styles.errors}>{errors.correo?.message}</p>
            </div>
            <button className={styles.btnSubmit} type='submit'>
              Enviar correo de cambio de contraseña.
            </button>
          </form>
        </div>
      </LayoutIndex>
    </>
  )
}
