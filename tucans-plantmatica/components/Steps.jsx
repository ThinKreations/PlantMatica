import styles from '../styles/Forms.module.css'
import Link from 'next/link'
import Paper from '@mui/material/Paper'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import IconPlantMatica from './IconPlantMatica'

export default function Steps () {
  return (
    <div style={{ margin: '5%' }}>
      <Paper elevation={4}>
        <div style={{ padding: '20px' }}>
          <h2 style={{ padding: '20px' }} className={styles.title}>
            Su registro a finalizado.
          </h2>
          <center style={{ padding: '20px' }}>
            <IconPlantMatica wd={128} hg={128} />
          </center>
          <p
            style={{ padding: '20px', color: 'black' }}
            className={styles.text}
          >
            {`Se revisará la información registrada, si se encuentra algún error
            en la misma se notificará al correo registrado.`}
            <br />
            {`En caso de no tener problema con los datos se le notificará por correo que su registro a promotor ha sido aprobado.`}
          </p>
          <center>
            <p
              style={{ fontSize: '18px', color: 'black' }}
              className={styles.text}
            >
              En caso de necesitar aclaraciones, envíe un correo a soporte.{' '}
              <br /> (
              <a
                className={styles.link}
                href='mailto:software.tucans@gmail.com'
              >
                software.tucans@gmail.com
              </a>
              )
            </p>
          </center>

          <Link href='/fichas'>
            <a>
              <button className={styles.btnSubmit}>
                Regresar a la pagina de inicio.
              </button>
            </a>
          </Link>
        </div>
      </Paper>
    </div>
  )
}
