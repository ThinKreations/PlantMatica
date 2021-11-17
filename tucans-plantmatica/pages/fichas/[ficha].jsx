import React from 'react'
import FichaUnica from '../../components/FichaUnica';
import Footy from "../../components/footy"
import LayoutMenu from "../../components/LayoutMenu";
import MainHead from '../../components/MainHead';
import styles from "../../styles/Fichas.module.css";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Slider from '@mui/material/Slider';
import Link from 'next/link';

function valuetext(value) {
    return `${value}°C`;
}

export default function Ficha({ ficha }) {
    return (
        <div>
            <MainHead tituloPestana="Ficha" />
            <LayoutMenu />
            <div className={styles.containerFicha}>
                <Card variant="outlined" className={styles.base}>
                    <CardContent>
                        <p className={styles.titleficha}>{`Etiquetas: `}</p>

                        {
                            ficha.etiquetas.map(e => {
                                return <p key={e} className={styles.etiquetas} > {e} </p>
                            })
                        }

                        <hr className={styles.division} />
                        <p className={styles.textU}>{`Nombre común: `}</p>
                        <p className={styles.titlefichaU}>{ficha.nombre_comun}</p>
                        <hr className={styles.division} />
                        <p className={styles.textU}>{`Nombre cientifico: `}</p>
                        <p className={styles.titlefichaU}>{ficha.nombre_cientifico}</p>
                        <hr className={styles.division} />

                        <p className={styles.textU2}>{`Origen y distribución: `}</p>
                        {
                            ficha.origen_distribucion.map(o => {
                                return <div key={o.nombre}>
                                    <p className={styles.titlefichaU2}>Nombre: {o.nombre}</p>
                                    <p className={styles.titlefichaU2}>Detalles: {o.detalles}</p>
                                </div>
                            })
                        }

                        <hr className={styles.division} />
                        <p className={styles.textD} >{`Descripcion: `}</p>
                        <p className={styles.textU2} >
                            {ficha.descripcion}
                        </p>
                        <hr className={styles.division} />
                        <p className={styles.titlefichaU}>{`Caracteristicas especiales: `}</p>
                        <ul>
                        {
                            ficha.caracteristicas_especiales.map(c => {
                                return <li key={c} className={styles.lista} >{c}</li>
                            })
                        }
                        </ul>
                        <hr className={styles.division} />
                        <p className={styles.titlefichaU}>{`Alternativa y complementos a: `}</p>
                        <p className={styles.textU2}>
                            {ficha.complemento}
                        </p>
                        <hr className={styles.division} />
                        <p className={styles.titlefichaU}>Consumo:</p>
                        <br />

                        <ul>
                            {
                                ficha.consumo.map(fc => {
                                    return <li key={fc} className={styles.lista}>{fc}</li>
                                })
                            }
                        </ul>

                        <hr className={styles.division} />
                        <p className={styles.titlefichaU}>Usos medicinales:</p>
                        <br />
                        <ul>
                            {
                                ficha.usos_medicinales.map( u => {
                                    return <li key={u} className={styles.lista}>{u}</li>
                                })
                            }
                        </ul>

                        <hr className={styles.division} />

                        <div className={styles.fuentes}>
                            <p>Fuentes:</p>
                            <ul>
                                {
                                    ficha.fuentes.map( ff => {
                                        return <li key={ff} >{ff}</li>
                                    })
                                }
                            </ul>
                        </div>
                        <hr className={styles.division} />

                        <Box sx={{ width: 300 }}>
                            <p className={styles.titlefichaU2}>{`Califica esta ficha.`}</p>
                            <Slider
                                aria-label="Calificacion"
                                defaultValue={30}
                                getAriaValueText={valuetext}
                                valueLabelDisplay="auto"
                                step={1}
                                marks
                                min={0}
                                max={10}
                                color="secondary"
                            />
                        </Box>
                    </CardContent>
                    <CardActions>
                        <button className={styles.btnCalificar} >{`Calificar ficha`}</button>
                        <Link href="editar"><button className={styles.btnSolicitud} >{`Solicitud de edicion`}</button></Link>
                        <button className={styles.btnReporte} >{`Reportar ficha`}</button>
                        <Link href="../user/fichasGuardadas"><button className={styles.btnguardar} >{`Guardar ficha`}</button></Link>
                    </CardActions>
                </Card>
            </div >
            <Footy />
        </div>
    )
}

export async function getServerSideProps({ params }) {
    const res = await fetch(`https://tucansplantmaticabackend.vercel.app/ficha/${params.ficha}`);
    const ficha = await res.json();
    console.log(ficha.ficha)
    return {
        props: { ficha: ficha.ficha, notFound: false }
    }
}