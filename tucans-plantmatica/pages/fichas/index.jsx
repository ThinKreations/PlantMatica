import MainHead from '../../components/MainHead'
import LayoutMenu from '../../components/LayoutMenu'
import Router, { useRouter } from 'next/router'
import styles2 from '../../styles/Fichas.module.css'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Link from 'next/link'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Autocomplete from '@mui/material/Autocomplete'
import { traerEtiquetas } from '../api/fichas-http'
import { TableCell } from '@mui/material'
import uid from 'tiny-uid'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Index ({ fichas, etiquetas, coincidencia = '' }) {
  const router = useRouter()
  const [fichasR, setFichasR] = useState(fichas)
  const [terminoB, setTerminoB] = useState(router.query.coincidencia)

  const buscarCoincidencias = async () => {
    if (terminoB === undefined || terminoB === '' || terminoB === ' ') {
      const res = await fetch(
        `https://mmg7n2ixnk.us-east-2.awsapprunner.com/ficha`
      )
      const fichas = await res.json()
      setFichasR(fichas)
    } else {
      const res = await fetch(
        `https://mmg7n2ixnk.us-east-2.awsapprunner.com/ficha/encontrar/coincidencia/`,
        {
          method: 'PUT',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            termino: terminoB
          })
        }
      )
      const resJSON = await res.json()
      setFichasR(resJSON)
    }
  }

  useEffect(() => {
    buscarCoincidencias()
  }, [])

  return (
    <div>
      <MainHead tituloPestana='Inicio' />
      <LayoutMenu />
      <div className={styles2.tableFichas}>
        <TableContainer component={Paper} className={styles2.fondo}>
          <Table
            sx={{ minWidth: 650, margin: '20px', maxWidth: '95%' }}
            aria-label='simple table'
          >
            <TableHead>
              <TableRow>
                <TableCell>
                  <Stack spacing={2}>
                    <Autocomplete
                      freeSolo
                      id='free-solo-2-demo'
                      disableClearable
                      onChange={(event, terminoB) => setTerminoB(terminoB)}
                      onKeyPress={e => setTerminoB(e.target.value)}
                      options={etiquetas.arrayEtiquetas.map(
                        option => option.etiqueta
                      )}
                      renderInput={params => (
                        <TextField
                          color='success'
                          {...params}
                          label='Buscar plantas'
                          InputProps={{
                            ...params.InputProps,
                            type: 'search'
                          }}
                        />
                      )}
                    />
                  </Stack>
                </TableCell>
                <TableCell>
                  <button
                    onClick={buscarCoincidencias}
                    className={styles2.buscar_btn}
                  >
                    Buscar
                  </button>
                </TableCell>
              </TableRow>
              <TableRow>
                <h2 sx={{ padding: '15px' }} className={styles2.titleficha}>
                  Termino de busqueda: {terminoB}
                </h2>
              </TableRow>
            </TableHead>
            <TableBody>
              {fichasR.fichas.map(f => {
                return (
                  <div key={f._id}>
                    <Card sx={{ padding: '15px' }} className={styles2.card}>
                      <div className={styles2.imagen_container}>
                        <div>
                          <Image
                            src={f.imagen}
                            alt={`${f.nombre_comun} - ${f.nombre_cientifico}`}
                            width={164}
                            height={164}
                            className={styles2.imagen_cuadrada}
                          />
                          <CardActions>
                            <Link
                              href={`/fichas/[ficha]`}
                              as={`/fichas/${f._id}`}
                            >
                              <a>
                                <button className={styles2.btnLinkFicha}>
                                  Mas informacion
                                </button>
                              </a>
                            </Link>
                          </CardActions>
                        </div>
                        <div className={styles2.container_imagen_nombres}>
                          <CardContent>
                            <p className={styles2.titleficha}>
                              {f.nombre_comun}
                            </p>
                            <p className={styles2.nombreC}>
                              {f.nombre_cientifico}
                            </p>
                            <p className={styles2.textFich}>
                              {f.descripcion.substr(0, 150)}...
                            </p>
                            <div>
                              <p className={styles2.textFich}>Etiquetas: </p>
                              {f.etiquetas.map(e => {
                                return (
                                  <>
                                    <p
                                      key={uid()}
                                      className={styles2.etiquetas}
                                      onClick={buscarCoincidencias}
                                    >
                                      {' '}
                                      {e}{' '}
                                    </p>
                                  </>
                                )
                              })}
                            </div>
                          </CardContent>
                        </div>
                      </div>
                    </Card>
                  </div>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export async function getServerSideProps ({}) {
  const res = await fetch(`https://mmg7n2ixnk.us-east-2.awsapprunner.com/ficha`)
  const fichas = await res.json()
  const etiquetas = await traerEtiquetas()

  return {
    props: { fichas, etiquetas, notFound: false }
  }
}
