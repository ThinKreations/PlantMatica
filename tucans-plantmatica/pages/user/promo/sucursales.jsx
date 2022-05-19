import MainHead from '../../../components/MainHead'
import styles from '../../../styles/Promotor.module.css'
import Image from 'next/image'
import Link from 'next/link'
import uid from 'tiny-uid'
import LayoutMenu from '../../../components/LayoutMenu'
import MenuPromo from '../../../components/promo/MenuPromo'
import Registrar from '../../../components/promo/RegistrarSucursal'
import EditIcon from '@mui/icons-material/Edit'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import { useEffect, useState } from 'react'
import { getSucursalesPromotor } from '../../api/sucursales-http'
import { validarToken } from '../../api/request'

export default function Sucursales ({ sucursales }) {
  const [sucursalesRender, setSucursalesRender] = useState(sucursales)


  return (
    <>
      <MainHead tituloPestana='Sucursales' />
      <LayoutMenu />
      <MenuPromo />
      <div className={styles.container}>
        <center>
          <font size={6} face='Work Sans' color='007200'>
            <h1>Sucursales</h1>
          </font>
        </center>

        <div className={styles.sucursales}>
          <font size={5} face='Work Sans' color='007200'>
            <center>
              <h1>Tus Sucursales</h1>
            </center>
          </font>

          {sucursalesRender.length === 1 ? (
            <>
              <Alert variant='outlined' severity='info'>
                <AlertTitle>Sin sucursales</AlertTitle>
                No tienes sucursales registradas, registralas en el siguiente
                formulario —{' '}
                <strong> Si esto es un error recarga la pagina</strong>
              </Alert>
            </>
          ) : (
            <div className={styles.fichero}>
              {sucursalesRender.map(s => {
                return (
                  <div className={styles.ficha} key={uid()}>
                    <aside className={styles.dataSucursal}>
                      <font size={2} face='Work Sans' color='007200'>
                        <h2>{s.nombre_sucursal}</h2>
                        <h3>
                          {s.direccion.estado}, {s.direccion.alcaldia},{' '}
                          {s.direccion.avenida} , {s.direccion.num_ext_int}
                        </h3>
                        <h3>{s.telefono}</h3>
                        <h3>Encargado: {s.persona_cargo}</h3>
                      </font>
                    </aside>
                    <aside className={styles.dataSucursal}>
                      <font size={1} face='Work Sans' color='007200'>
                        <h2>Horario</h2>
                        <h3>
                          Lunes: {s.horario_atencion.lunes.abierto} a{' '}
                          {s.horario_atencion.lunes.cierre}{' '}
                        </h3>
                        <h3>
                          Martes: {s.horario_atencion.martes.abierto} a{' '}
                          {s.horario_atencion.martes.cierre}{' '}
                        </h3>
                        <h3>
                          Miércoles: {s.horario_atencion.miercoles.abierto} a{' '}
                          {s.horario_atencion.miercoles.cierre}{' '}
                        </h3>
                        <h3>
                          Jueves: {s.horario_atencion.jueves.abierto} a{' '}
                          {s.horario_atencion.jueves.cierre}{' '}
                        </h3>
                        <h3>
                          Viernes: {s.horario_atencion.viernes.abierto} a{' '}
                          {s.horario_atencion.viernes.cierre}{' '}
                        </h3>
                        <h3>
                          Sábado: {s.horario_atencion.sabado.abierto} a{' '}
                          {s.horario_atencion.sabado.cierre}
                        </h3>
                        <h3>
                          Domingo: {s.horario_atencion.domigo.abierto} a{' '}
                          {s.horario_atencion.domigo.cierre}
                        </h3>
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
                )
              })}
            </div>
          )}
        </div>

        <hr className={styles.bar} />
        <center>
          <Registrar />
        </center>
      </div>
    </>
  )
}

export async function getServerSideProps ({ query }) {
  const res = await fetch(
    `https://mmg7n2ixnk.us-east-2.awsapprunner.com/sucursal/${query.idpromo}`,
    {
      headers: {
        'x-token': query.token
      }
    }
  )
  const { sucursales } = await res.json()
  return { props: { sucursales, notFound: false } }
}
