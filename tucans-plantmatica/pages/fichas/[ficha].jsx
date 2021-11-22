import React from 'react'
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
import Alert from '@mui/material/Alert';
import { guardarFichaHttp, validarToken, obtenerComentario, subirComentario } from '../api/request';
import { useState, useEffect } from 'react';

function valuetext(value) {
    return `${value}°C`;
}



export default function Ficha({ ficha }) {

    const guardarFicha = async (id_ficha) => {

        const token = localStorage.getItem('token');
        const { id } = await validarToken();

        await guardarFichaHttp(id_ficha, id, token);

    }

    const [comentario, setComentario]=useState('')
    
    const postComentario=async(id_ficha)=>{
        
        const { id} = await validarToken();
        const subeComentario=await subirComentario(id_ficha, id, comentario);
        console.log(subeComentario)

    }

    

    return (
        <div>
            <MainHead tituloPestana={ficha.nombre_comun} />
            <LayoutMenu />
            <div className={styles.containerFicha}>
                {
                    !ficha.polemica ? "" : <Alert sx={{ margin: '10px' }} variant="outlined" severity="error">
                        <p className={styles.text_danger}>
                            {`Tucan's Software no es responsable de efectos negativos a la salud, asi como de aquellas acciones legales que se tomen contra la persona por consumo ilegal de esta planta. Para mas referencia consulte a su medico o su constitución.`}
                        </p>
                    </Alert>
                }
                <Card variant="outlined" className={styles.base}>
                    <CardContent>
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
                                    <p className={styles.titlefichaU2}>Nombre:</p>
                                    <p className={styles.textU2} >{o.nombre}</p>
                                    <br />
                                    <p className={styles.titlefichaU2}>Detalles: </p>
                                    <p className={styles.textU2} >{o.detalles}</p>
                                    <br />
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
                                ficha.usos_medicinales.map(u => {
                                    return <li key={u} className={styles.lista}>{u}</li>
                                })
                            }
                        </ul>

                        <hr className={styles.division} />

                        <div className={styles.fuentes}>
                            <p>Fuentes:</p>
                            <ul>
                                {
                                    ficha.fuentes.map(ff => {
                                        return <li key={ff} >{ff}</li>
                                    })
                                }
                            </ul>
                        </div>
                        <hr className={styles.division} />

                        <p className={styles.titleficha}>{`Etiquetas: `}</p>

                        {
                            ficha.etiquetas.map(e => {
                                return <p key={e} className={styles.etiquetas} > {e} </p>
                            })
                        }

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
                        <hr className={styles.division} />
                    </CardContent>
                    <CardActions>
                        <button className={styles.btnCalificar} >{`Calificar ficha`}</button>
                        <Link href="editar"><button className={styles.btnSolicitud} >{`Solicitud de edicion`}</button></Link>
                        <button className={styles.btnReporte} >{`Reportar ficha`}</button>
                        <button onClick={() => guardarFicha(ficha._id)} className={styles.btnguardar} >{`Guardar ficha`}</button>
                    </CardActions>
                    
                    

                    <CardContent>
                        
                    <hr className={styles.division} />
                    <p className={styles.textU}>{`Comentarios: `}</p><br/>
                    <textarea className={styles.txtEtiquetas} value={comentario} placeholder={'Ingresa tu comentario aquí.'} onChange={c=>setComentario(event.target.value)}></textarea>
                    <button type="submit" className={styles.btnEnviar} onClick={()=>postComentario(ficha._id)}><font face="Work Sans" color="white" size="3"><b>{`Enviar`}</b></font></button>
                    <br/>
                    <div className={styles.commentArea}>
                    <font face="Work Sans" color="black" size="3">    
                    {
                        
                        ficha.comentarios.map(com=>{
                            return <p key={com} className={styles.comentarios}> {com} </p>
                        })
                    }
                    <p>Ola</p>
                    <p>Ola</p>
                    <p>Ola</p>
                    </font>
                    </div>
                    </CardContent>
                </Card>
            </div >
            <Footy />
        </div>
    )
}

export async function getServerSideProps({ params }) {

    const res = await fetch(`https://plantmatica-back.vercel.app/ficha/${params.ficha}`);
    const ficha = await res.json();
    console.log(ficha.ficha.comentarios)
    return {
        props: { ficha: ficha.ficha, notFound: false }
    }
}