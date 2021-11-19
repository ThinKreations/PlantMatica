import React from 'react';
import Footy from "../../components/footy"
import LayoutMenu from "../../components/LayoutMenu";
import { useState, useEffect } from 'react';
import styles from "../../styles/Fichas.module.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Link from 'next/link';
import MainHead from '../../components/MainHead';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { traerEtiquetas } from '../../helpers/fichas-http';

function valuetext(value) {
    return `${value}°C`;
}

export default function Ficha({ arrayEtiquetas }) {

    const [etiquetas, setEtiquetas] = useState();
    const [caracteristica, setCaracteristicas] = useState();
    const [usos, setUsos] = useState();
    const [fuentes, setFuentes] = useState();

    const agregarFicha = async () => {
        event.preventDefault();
        console.log(etiquetas, caracteristica, usos)
    }

    return (
        <div>

            <LayoutMenu />
            <font face="Work Sans" color="green" size="5">
                <center><h1>Solicitud de Adición</h1></center>
            </font>

            <div>
            <MainHead tituloPestana="Agregar" />

            <div className={styles.containerFicha}>
                <form onSubmit={agregarFicha} >
                    <Card>
                        <CardContent>

                            {/* <p>{`Imagen: `}<input type="file" name="imagen" className={styles.inputImg} id={styles.file}></input></p> */}
                            <FormGroup>
                                <FormControlLabel control={<Checkbox
                                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />} label={<p className={styles.text_danger}>Marca esta casilla si el consumo de esta planta puede llegar a ser nocivo o dañino para la salud. De igual manera si su consumo es ilicito en algunas regiones.</p>} />
                            </FormGroup>

                            <p className={styles.textD} >{`Etiquetas: `}</p>
                            <Autocomplete
                                multiple
                                onChange={(event, etiquetas) => setEtiquetas(etiquetas)}
                                id="tags-filled"
                                options={arrayEtiquetas.map((option) => option.etiqueta)}
                                freeSolo
                                renderTags={(value, getTagProps) =>
                                    value.map((option, index) => (
                                        <Chip key={`${option}${index}`} variant="outlined" label={option} {...getTagProps({ index })} />
                                    ))
                                }
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Presione la tecla enter para agregar un etiqueta"
                                        variant="filled"
                                        color="success"
                                        placeholder="Etiquetas"
                                    />
                                )}
                            />

                            <hr className={styles.division} />
                            <p className={styles.textD}>{`Nombre comun: `}</p>
                            <textarea className={styles.txtNombres} placeholder={'Ingresa el nombre.'}></textarea>
                            <hr className={styles.division} />
                            <p className={styles.textD}>{`Nombre cientifico: `}</p>
                            <textarea className={styles.txtNombres} placeholder={'Ingresa el nombre científico.'}></textarea>
                            <hr className={styles.division} />

                            <p className={styles.textD}>{`Origen y distribucion: `}</p>
                            <textarea className={styles.txtNombres} placeholder={'Ingresa el lugar.'}></textarea> <br />
                            <textarea className={styles.txtNombres} placeholder={'Ingresa detalles del lugar.'}></textarea>
                            <hr className={styles.division} />

                            <p className={styles.textD} >{`Descripcion: `}</p>
                            <textarea className={styles.txtBody} placeholder={'Ingresa la descripción aquí.'}>

                            </textarea>
                            <hr className={styles.division} />
                            <p className={styles.textD}>{`Caracteristicas especiales: `}</p>
                            <Autocomplete
                                multiple
                                onChange={(event, caracteristica) => setCaracteristicas(caracteristica)}
                                id="tags-filled"
                                options={defaultOptions.map((option) => option.etiqueta)}
                                freeSolo
                                renderTags={(value, getTagProps) =>
                                    value.map((option, index) => (
                                        <Chip key={`${option}${index}`} variant="outlined" label={option} {...getTagProps({ index })} />
                                    ))
                                }
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Presione la tecla enter para agregar una caracteristica"
                                        variant="filled"
                                        color="success"
                                        placeholder="Caracteristicas especiales"
                                    />
                                )}
                            />
                            <hr className={styles.division} />

                            <p className={styles.textD}>{`Alternativa y complementos a: `}</p>
                            <textarea className={styles.txtBody}>

                            </textarea>
                            <hr className={styles.division} />
                            <p className={styles.textD}>{`Usos:`}</p>
                            <br />

                            <Autocomplete
                                multiple
                                onChange={(event, usos) => setUsos(usos)}
                                id="tags-filled"
                                options={defaultOptions.map((option) => option.etiqueta)}
                                freeSolo
                                renderTags={(value, getTagProps) =>
                                    value.map((option, index) => (
                                        <Chip key={`${option}${index}`} variant="outlined" label={option} {...getTagProps({ index })} />
                                    ))
                                }
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Presione la tecla enter para agregar un uso"
                                        variant="filled"
                                        color="success"
                                        placeholder="Usos"
                                    />
                                )}
                            />

                            <hr className={styles.division} />

                            <div className={styles.fuentes}>
                                <p>{`Fuentes: `}</p>
                                <Autocomplete
                                    multiple
                                    onChange={(event, fuentes) => setFuentes(fuentes)}
                                    id="tags-filled"
                                    options={defaultOptions.map((option) => option.etiqueta)}
                                    freeSolo
                                    renderTags={(value, getTagProps) =>
                                        value.map((option, index) => (
                                            <Chip key={`${option}${index}`} variant="outlined" label={option} {...getTagProps({ index })} />
                                        ))
                                    }
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Presione la tecla enter para agregar una fuente "
                                            variant="filled"
                                            color="primary"
                                            placeholder="Usos"
                                        />
                                    )}
                                />
                            </div>
                            <hr className={styles.division} />

                        </CardContent>
                        <CardActions>
                            <button type="submit" className={styles.btnLinkFicha}>Enviar</button>
                            <button className={styles.btnReporte}>Cancelar</button>
                        </CardActions>
                    </Card>
                </form>
            </div >
        </div>
            
            <Footy />
        </div>
    )
}

const defaultOptions = [{
    "etiqueta": "enfermedades"
},
{
    "etiqueta": "diarrea"
},
{
    "etiqueta": "comestible"
},
{
    "etiqueta": "malestar estomacal"
}]

export async function getServerSideProps() {
    const { arrayEtiquetas } = await traerEtiquetas();
    return {
        props: { arrayEtiquetas ,notFound: false }
    }
}