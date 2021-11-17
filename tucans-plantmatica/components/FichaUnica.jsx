//Sera inservible
import React from 'react';
import styles from "../styles/Fichas.module.css";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Slider from '@mui/material/Slider';
import Link from 'next/link';
function valuetext(value) {
    return `${value}°C`;
}

export default function FichaUnica() {
    return (
        <div className={styles.containerFicha}>
            <Card variant="outlined" className={styles.base}>
                <CardContent>
                    <p className={styles.titleficha}>{`Etiquetas: `}</p>
                    <p className={styles.etiquetas} > {`apio`} </p>
                    <p className={styles.etiquetas} > {`comestible`} </p>
                    <p className={styles.etiquetas} > {`malestar estomacal`} </p>
                    <p className={styles.etiquetas} > {`enfermedades respiratorias`} </p>
                    <p className={styles.etiquetas} > {`diarrea`} </p>
                    <hr className={styles.division} />
                    <p className={styles.textU}>{`Nombre común: `}</p>
                    <p className={styles.titlefichaU}>{`Apio`}</p>
                    <hr className={styles.division} />
                    <p className={styles.textU}>{`Nombre cientifico: `}</p>
                    <p className={styles.titlefichaU}>{`Apium graveolens`}</p>
                    <hr className={styles.division} />
                    <p className={styles.textU2}>{`Origen y distribución: `}</p>
                    <p className={styles.titlefichaU2}>{`Originaria de Japon, Indonesia, Vietnam.`}</p>
                    <hr className={styles.division} />
                    <p className={styles.textD} >{`Descripcion: `}</p>
                    <p className={styles.textU2} >
                        {`Hierba bienal o perenne, esparcidamente ramificada, sin pelos.Mide de 30 cm a 1 m de alto.Tiene un tallo estriado longitudinalmente,  sus hojas son, de 3 a 25 cm de largo, compuestas con pocos foliolos (pinnadas), peciolos de base envainante, los foliolos son ovados u obovados, cuneados en la base, de 2 a 6 cm de largo por 1 a 5 cm de ancho, margen profundamente lobado o dentado; las hojas superiores más pequeñas que las inferiores y cortamente pecioladas o subsésiles.
                        Sus flores son pequeñas, de simetría radial, hermafroditas, blancas; cáliz diminuto, unido al ovario; 5 pétalos libres, ovados, el ápice largo y curvado hacia el centro de la flor; los estambres son 5, alternados con los pétalos; ovario ínfero.
                        Frutos y semillas: El fruto es un esquizocarpo (es decir un fruto indehiscente formado por un gineceo de dos carpelos unidos que en la madurez se separan) casi circular, de aproximadamente 2 mm de largo, comprimido lateralmente, sin pelos, formado por 2 mericarpios (es decir cada una de las partes separables de un fruto) cada uno con una semilla, cada mericarpio tiene en su parte dorsal 5 costillas levemente aladas.`}
                    </p>
                    <hr className={styles.division} />
                    <p className={styles.textU2}>{`Caracteristicas especiales: `}</p>
                    <p className={styles.titlefichaU2}>{`Planta aromática.`}</p>
                    <hr className={styles.division} />
                    <p className={styles.titlefichaU}>{`Alternativa y complementos a: `}</p>
                    <p className={styles.textU2}>
                        {`Paracetamol está indicado para el tratamiento de los síntomas del dolor leve a moderado.
                        Albuterol (ProAir HFA; Proventil HFA; Ventolin HFA),  (Xopenex HFA) e ipratropio (Combivent), para enfermedades respiratorias.`}
                    </p>
                    <hr className={styles.division} />
                    <p className={styles.titlefichaU}>Usos:</p>
                    <br />
                    <p className={styles.textU2} >
                        {`Raiz cocida o cruda
                        Aromatica
                        Tallos y hojas crudos o cocinados`}
                    </p>

                    <   li className={styles.lista}>{`Desordenes ginecologicos (regla atrasada).`}</li>
                        <li className={styles.lista}>{`Curar abscesos en mujeres.`}</li>
                        <li className={styles.lista}>{`Transtornosa digestivos como vomito, empacho, enlechado de ninos.`}</li>
                        <li className={styles.lista}>{`Disminuir la produccion de leche.`}</li>
                        <li className={styles.lista}>{`Contra el dolor de rinon, vejiga y retencion de orina.`}</li>
                        <li className={styles.lista}>{`Utilizado para el dolor de cabeza.`}</li>
                        <li className={styles.lista}>{`Enfermedades respiratorias.`}</li>

                    <hr className={styles.division} />

                    <div className={styles.fuentes}>
                        <p>Fuentes:</p>
                        <li>
                            {`Rzedowski, G. C. de y J. Rzedowski, 2001. Flora fanerogámica del Valle de México. 2a ed. Instituto de Ecología y Comisión Nacional para el Conocimiento y Uso de la Biodiversidad. Pátzcuaro, Michoacán, México.`}
                        </li>
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
    )
}