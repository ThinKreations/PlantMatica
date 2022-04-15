import styles from '../../styles/Fichas.module.css'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Alert from '@mui/material/Alert'
import { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility'
import EditVisualBtn from './EditVisualBtn'
import EditArrays from './EditArrays'

export default function EditarFicha ({ fichaParaEdicion }) {
  const [etiquetas, setEtiquetas] = useState()
  const [lugar, setlugar] = useState()
  const [detalles, setdetalles] = useState()
  const [caracteristica, setCaracteristicas] = useState(
    fichaParaEdicion.caracteristicas_especiales
  )
  const [usos, setUsos] = useState(fichaParaEdicion.usos_medicinales)
  const [fuentes, setFuentes] = useState(fichaParaEdicion.fuentes)
  const [consumo, setConsumo] = useState(fichaParaEdicion.consumo)
  const [polemica, setPolemica] = useState(fichaParaEdicion.polemica)
  const [nombreCo, setNombreCo] = useState(fichaParaEdicion.nombre_comun)
  const [nombreCi, setNombreCi] = useState(fichaParaEdicion.nombre_cientifico)
  const [complemento, setcomplemento] = useState(fichaParaEdicion.complemento)
  const [descripcion, setdescripcion] = useState(fichaParaEdicion.descripcion)

  const enviarFormulario = async () => {
    console.log(nombreCo, nombreCi, descripcion)
  }

  return (
    <>
      <h1 style={{ margin: '30px' }} className={styles.titleficha}>
        Solicitud de edición.
      </h1>
      <div className={styles.containerFicha}>
        {!fichaParaEdicion.polemica ? (
          ''
        ) : (
          <Alert sx={{ margin: '10px' }} variant='outlined' severity='error'>
            <p className={styles.text_danger}>
              {`Tucan's Software no es responsable de efectos negativos a la salud, asi como de aquellas acciones legales que se tomen contra la persona por consumo ilegal de esta planta. Para mas referencia consulte a su medico o su constitución.`}
            </p>
          </Alert>
        )}
        <Card variant='outlined' className={styles.base}>
          <CardContent>
            <EditVisualBtn
              editarVista={false}
              visualizarNombreDato={`Nombre común`}
              fichaParaEdicion={nombreCo}
              changeValue={e => setNombreCo(e.target.value)}
            />

            <hr className={styles.division} />
            <EditVisualBtn
              editarVista={false}
              visualizarNombreDato={`Nombre científico`}
              fichaParaEdicion={nombreCi}
              changeValue={e => setNombreCi(e.target.value)}
            />
            <hr className={styles.division} />

            {fichaParaEdicion.origen_distribucion.length > 0 ? (
              <>
                <p className={styles.textU2}>{`Origen y distribución: `}</p>

                {fichaParaEdicion.origen_distribucion.map(o => {
                  return (
                    <div key={o.nombre}>
                      <p className={styles.titlefichaU2}>Nombre:</p>
                      <p className={styles.textU2}>{o.nombre}</p>
                      <br />
                      {o.detalles ? (
                        <>
                          <p className={styles.titlefichaU2}>Detalles: </p>
                          <p className={styles.textU2}>{o.detalles}</p>
                        </>
                      ) : (
                        ''
                      )}

                      <br />
                    </div>
                  )
                })}
              </>
            ) : (
              <p
                className={styles.textU2}
              >{`No se registraron lugares de origen o distribución`}</p>
            )}

            <hr className={styles.division} />
            <EditVisualBtn
              editarVista={false}
              visualizarNombreDato={`Descripción`}
              fichaParaEdicion={descripcion}
              changeValue={e => setdescripcion(e.target.value)}
            />
            <hr className={styles.division} />
            <EditArrays
              editarVista={false}
              visualizarNombreDato={`Características especiales`}
              fichaParaEdicion={caracteristica}
            />

            <hr className={styles.division} />
            <EditVisualBtn
              editarVista={false}
              visualizarNombreDato={`Alternativa y complemento a `}
              fichaParaEdicion={complemento}
              changeValue={e => setcomplemento(e.target.value)}
            />
            <hr className={styles.division} />
            <EditArrays
              editarVista={false}
              visualizarNombreDato={`Consumo`}
              fichaParaEdicion={consumo}
            />

            <hr className={styles.division} />
            <EditArrays
              editarVista={false}
              visualizarNombreDato={`Usos medicinales`}
              fichaParaEdicion={usos}
            />

            <hr className={styles.division} />

            <EditArrays
              editarVista={false}
              visualizarNombreDato={`Fuentes`}
              fichaParaEdicion={fuentes}
            />

            <hr className={styles.division} />

            <p className={styles.titleficha}>{`Etiquetas: `}</p>

            {fichaParaEdicion.etiquetas.map(e => {
              return (
                <p key={e} className={styles.etiquetas}>
                  {' '}
                  {e}{' '}
                </p>
              )
            })}

            <hr className={styles.division} />

            <hr className={styles.division} />
          </CardContent>
          <CardActions>
            <button
              className={styles.btnSolicitud}
              onClick={enviarFormulario}
            >{`Enviar solicitud de edición.`}</button>
          </CardActions>
        </Card>
      </div>
    </>
  )
}
