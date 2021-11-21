import React from 'react';
import Footy from "../../components/footy"
import Router from "next/router";
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
import { agregarFichaReq, traerEtiquetas } from '../api/fichas-http';
import { validarToken } from '../api/request';

function valuetext(value) {
    return `${value}°C`;
}

export default function Ficha({ arrayEtiquetas }) {

    const [etiquetas, setEtiquetas] = useState();
    const [caracteristica, setCaracteristicas] = useState();
    const [usos, setUsos] = useState();
    const [fuentes, setFuentes] = useState();
    const [polemica, setPolemica] = useState(false);
    const [nombreCo, setNombreCo] = useState();
    const [nombreCi, setNombreCi] = useState();
    const [lugar, setlugar] = useState();
    const [detalles, setdetalles] = useState();
    const [complemento, setcomplemento] = useState();
    const [descripcion, setdescripcion] = useState();

    const agregarFicha = async () => {
        event.preventDefault();
        const { id } = await validarToken();
        let object = new Object({
            etiquetas, 
            caracteristicas_especiales: caracteristica,
            usos_medicinales: usos, 
            fuentes, 
            polemica, 
            nombre_comun: nombreCo, 
            nombre_cientifico: nombreCi, 
            origen_distribucion:[
                {
                    nombre: lugar,
                    detalles
                }
            ],  
            complemento, 
            descripcion,
            usuario_creo: id
        });
        await agregarFichaReq(object);
    }

    const sessionControl = async () => {
        const valid = await validarToken();
        if (valid === false) {
            swal({
                title: 'Inicia sesion.',
                text: 'Tu sesion expiro, vuelve a iniciar sesion para realizar esta operacion.',
                icon: 'info',
                button: 'Ok',
                timer: '3000'
            });
            Router.push('/session/IniciarSesion');
        }
    }

    const cambiarPolemica = () => {
        !polemica ? setPolemica(true) : setPolemica(false)
    }

    useEffect(() => {
        sessionControl();
    }, []);

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
                                        onChange={cambiarPolemica}
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
                                <TextField required
                                    label="Nombre comun"
                                    variant="filled"
                                    onChange={e => setNombreCo(e.target.value)}
                                    color="success" fullWidth
                                    placeholder="Digite el nombre comun de la planta"
                                />

                                <hr className={styles.division} />
                                <p className={styles.textD}>{`Nombre cientifico: `}</p>
                                <TextField required
                                    label="Nombre cientifico"
                                    variant="filled"
                                    color="success" fullWidth
                                    onChange={e => setNombreCi(e.target.value)}
                                    placeholder="Digite el nombre cientifico de la planta"
                                />
                                <hr className={styles.division} />

                                <p className={styles.textD}>{`Origen y distribucion: `}</p>
                                <TextField required
                                    label="Lugar"
                                    variant="filled"
                                    color="success" fullWidth
                                    onChange={e => setlugar(e.target.value)}
                                    placeholder="Digite el lugar"
                                />
                                <TextField required
                                    label="Detalles"
                                    variant="filled"
                                    color="success" fullWidth
                                    onChange={e => setdetalles(e.target.value)}
                                    placeholder="Digite detalles (Si es origen o distribucion)"
                                />
                                <hr className={styles.division} />

                                <p className={styles.textD} >{`Descripcion: `}</p>
                                <textarea
                                    onChange={e => setdescripcion(e.target.value)}
                                    required
                                    className={styles.txtBody} placeholder={'Digite caracteristicas fisicas de la planta (tallos, hojas, semillas), medidas promedio de la planta, mas de lugares de origen y distribucion, habitat y clima de cuidado.'}>

                                </textarea>
                                <hr className={styles.division} />
                                <p className={styles.textD}>{`Caracteristicas especiales (Si es aromatica, etc.): `}</p>
                                <Autocomplete
                                    multiple
                                    onChange={(event, caracteristica) => setCaracteristicas(caracteristica)}
                                    id="tags-filled"
                                    options={defaultOptions.caracteristicas.map((option) => option.etiqueta)}
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
                                <textarea
                                    onChange={e => setcomplemento(e.target.value)}
                                    required className={styles.txtBody} placeholder="Digite al farmaco que puede complementar (Paracetamol, etc). " >

                                </textarea>
                                <hr className={styles.division} />
                                <p className={styles.textD}>{`Usos (Medicinales tiene, que malestares puede aliviar (dolores estomacales, enfermedades respiratorias):`}</p>
                                <br />

                                <Autocomplete
                                    multiple
                                    onChange={(event, usos) => setUsos(usos)}
                                    id="tags-filled"
                                    options={defaultOptions.usos.map((option) => option.etiqueta)}
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
                                        options={fuentes2.map((option) => option.fuente)}
                                        freeSolo
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

const defaultOptions = {
    "caracteristicas": [
        { "etiqueta": "Planta aromatica" },
        { "etiqueta": "Condimento" },
        { "etiqueta": "Comestible" },
        { "etiqueta": "Endulzante" }
    ],
    "consumo": [
        { "etiqueta": "Cocida" },
        { "etiqueta": "Cruda" },
        { "etiqueta": "Comestible" },
        { "etiqueta": "Aromatica" },
        { "etiqueta": "Masticable" },
        { "etiqueta": "Infusion" }
    ],
    "usos": [
        { "etiqueta": "Enfermedades respiratorias" },
        { "etiqueta": "Malestares estomacales" },
        { "etiqueta": "Dolores de cabeza" },
        { "etiqueta": "Analgesico" },
        { "etiqueta": "Migraña" }
    ]
}


const fuentes2 = [{
    "fuente": ""
}]

export async function getServerSideProps() {
    const { arrayEtiquetas } = await traerEtiquetas();
    return {
        props: { arrayEtiquetas, notFound: false }
    }
}