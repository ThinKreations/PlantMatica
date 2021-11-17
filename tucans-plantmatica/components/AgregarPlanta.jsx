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
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Link from 'next/link';
import MainHead from './MainHead';
function valuetext(value) {
    return `${value}°C`;
}

export default function FichaUnica() {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <div>
            <MainHead tituloPestana="Editar" />
            
            <div className={styles.containerFicha}>
            <Card variant="outlined">
                <CardContent>
                    <p>{`Imagen: `}<input type="file" name="imagen" className={styles.inputImg} id={styles.file}></input></p>
                    <p className={styles.titleficha} >{`Etiquetas: `}</p>
                    <textarea type={'text'} className={styles.txtEtiquetas}placeholder={'Ingresa las etiquetas de tu ficha.'}></textarea>
                    <hr className={styles.division} />
                    <p className={styles.textU}>{`Nombre comun: `}</p>
                    <textarea className={styles.txtNombres}placeholder={'Ingresa el nombre.'}></textarea>
                    <hr className={styles.division} />
                    <p className={styles.textU}>{`Nombre cientifico: `}</p>
                    <textarea className={styles.txtNombres} placeholder={'Ingresa el nombre científico.'}></textarea>
                    <hr className={styles.division} />
                    <p className={styles.textU2}>{`Origen y distribucion: `}</p>
                    <textarea className={styles.txtEtiquetas}></textarea>
                    <hr className={styles.division} />
                    <p className={styles.textD} >{`Descripcion: `}</p>
                    <textarea className={styles.txtBody} placeholder={'Ingresa la descripción aquí.'}>
                        
                    </textarea>
                    <hr className={styles.division} />
                    <p className={styles.textU2}>Caracteristicas especiales: </p>
                    <textarea className={styles.txtNombres} placeholder={'Ingresa las características aquí.'}></textarea>
                    <hr className={styles.division} />
                    <p className={styles.titlefichaU}>Alternativa y complementos a: </p>
                    <textarea className={styles.txtBody}>
                        
                    </textarea>
                    <hr className={styles.division} />
                    <p className={styles.titlefichaU}>Usos:</p>
                    <br />
                        
                        <textarea className={styles.txtBody} placeholder={'Para agregar un uso, escribelo entre comillas simples y separalas con una coma.'}></textarea>

                    <hr className={styles.division} />

                    <div className={styles.fuentes}>
                        <p>Fuentes: </p>
                        <textarea className={styles.txtRef} placeholder={'Escribelas entre comillas, separalas por una diagonal y entre los paréntesis agrega un enlace.'}>
                            
                        </textarea>
                    </div>
                    <hr className={styles.division} />

                </CardContent>
                <CardActions>
                    <a href="/fichas/ficha">
                            <button className={styles.btnLinkFicha} onClick={handleToggle}>Enviar</button>
                    </a>
                    <Link href="/fichas/ficha">
                            <button className={styles.btnReporte} >Cancelar</button>
                    </Link>
                    <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                    onClick={handleClose}
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>
                </CardActions>
            </Card>
        </div >
        </div>
    )
}