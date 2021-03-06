import styles from '../../styles/Fichas.module.css'
import Router from 'next/router'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Alert from '@mui/material/Alert'
import { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility'
import EditVisualBtn from './EditVisualBtn'
import EditArrays from './EditArrays'
import OrigenDisEdit from './OrigenDisEdit'
import { agregarSolicitud } from '../../pages/api/solicitudes-https'
import Image from 'next/image'
import AddImg from './AgregarImagen'
import imagenNotFound from '../../src/image_no_icon.png'

export default function EditarFicha ({ fichaParaEdicion }) {
  const [etiquetas, setEtiquetas] = useState(fichaParaEdicion.etiquetas)
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
  const [lugares, setLugares] = useState(fichaParaEdicion.origen_distribucion)
  const [imagen, setImagen] = useState(fichaParaEdicion.imagen)
  const [nombreL, setNombreL] = useState(
    fichaParaEdicion.origen_distribucion[0].nombre
  )
  const [detallesL, setDetallesL] = useState(
    fichaParaEdicion.origen_distribucion[0].detalles
  )

  const enviarFormulario = async () => {
    const usuario_edicion = localStorage.getItem('id')
    const solFicha = {
      etiquetas,
      nombre_comun: nombreCo,
      nombre_cientifico: nombreCi,
      origen_distribucion: [
        {
          nombre: nombreL,
          detalles: detallesL
        }
      ],
      descripcion,
      complemento,
      usos_medicinales: usos,
      consumo,
      fuentes,
      usuario_edicion,
      caracteristicas_especiales: caracteristica
    }
    const res = await agregarSolicitud(solFicha, fichaParaEdicion._id)
    Router.back()
  }

  return (
    <>
      <h1 style={{ margin: '30px' }} className={styles.titleficha}>
        Solicitud de edici??n.
      </h1>
      <div className={styles.containerFicha}>
        {!fichaParaEdicion.polemica ? (
          ''
        ) : (
          <Alert sx={{ margin: '10px' }} variant='outlined' severity='error'>
            <p className={styles.text_danger}>
              {`Tucan's Software no es responsable de efectos negativos a la salud, asi como de aquellas acciones legales que se tomen contra la persona por consumo ilegal de esta planta. Para mas referencia consulte a su medico o su constituci??n.`}
            </p>
          </Alert>
        )}
        <Card variant='outlined' className={styles.base}>
          <CardContent>
            <div className={styles.imagen_container}>
              <div>
                <Image
                  src={imagen}
                  alt={`${nombreCo} - ${nombreCi}`}
                  width={164}
                  height={164}
                  className={styles.imagen_cuadrada}
                />
              </div>
              <div className={styles.container_imagen_nombres}>
                <AddImg
                  mostrarBtn={true}
                  id_coleccion={fichaParaEdicion._id}
                  coleccion='fichas'
                  texto='Editar'
                />
                <hr className={styles.division} />

                <EditVisualBtn
                  editarVista={false}
                  visualizarNombreDato={`Nombre com??n`}
                  fichaParaEdicion={nombreCo}
                  changeValue={e => setNombreCo(e.target.value)}
                />

                <hr className={styles.division} />
                <EditVisualBtn
                  editarVista={false}
                  visualizarNombreDato={`Nombre cient??fico`}
                  fichaParaEdicion={nombreCi}
                  changeValue={e => setNombreCi(e.target.value)}
                />
              </div>
            </div>

            <hr className={styles.division} />

            <OrigenDisEdit
              fichaParaEdicionChafa={lugares}
              changeValueNombre={e => setNombreL(e.target.value)}
              edicionNombre={nombreL}
              edicionDetalles={detallesL}
              changeValueDetalles={e => setDetallesL(e.target.value)}
            />

            <hr className={styles.division} />
            <EditVisualBtn
              editarVista={false}
              visualizarNombreDato={`Descripci??n`}
              fichaParaEdicion={descripcion}
              changeValue={e => setdescripcion(e.target.value)}
            />
            <hr className={styles.division} />
            <EditArrays
              editarVista={false}
              visualizarNombreDato={`Caracter??sticas especiales`}
              changeArray={(event, caracteristica) =>
                setCaracteristicas(caracteristica)
              }
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
              changeArray={(event, consumo) => setConsumo(consumo)}
              fichaParaEdicion={consumo}
            />

            <hr className={styles.division} />
            <EditArrays
              editarVista={false}
              visualizarNombreDato={`Usos medicinales`}
              changeArray={(event, usos) => setUsos(usos)}
              fichaParaEdicion={usos}
            />

            <hr className={styles.division} />

            <EditArrays
              editarVista={false}
              visualizarNombreDato={`Fuentes`}
              changeArray={(event, fuentes) => setFuentes(fuentes)}
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
            >{`Enviar solicitud de edici??n.`}</button>
          </CardActions>
        </Card>
      </div>
    </>
  )
}
