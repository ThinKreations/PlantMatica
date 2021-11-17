import React from 'react'
import styles from "../../styles/Fichas.module.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Link from "next/link";
import Footy from "../../components/footy"
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import LayoutMenu from "../../components/LayoutMenu";
import MainHead from '../../components/MainHead';
export default function FichasGuardadas() {
    return (
        
        <div>
            <MainHead tituloPestana={'Fichas Guardadas'}/>
            <LayoutMenu/>
            <div className={styles.tableFichas}>

                <TableContainer component={Paper} className={styles.fondo}>
                    <Table sx={{ minWidth: 650, margin: '20px', maxWidth: '95%' }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <Stack spacing={2} >
                                    <Autocomplete
                                        freeSolo
                                        id="free-solo-2-demo"
                                        disableClearable
                                        options={top100Films.map((option) => option.title)}
                                        renderInput={(params) => (
                                            <TextField color="success"
                                                {...params}
                                                label="Buscar fichas guardadas"
                                                InputProps={{
                                                    ...params.InputProps,
                                                    type: 'search',
                                                }}
                                            />
                                        )}
                                    />
                                </Stack>
                            </TableRow>
                            <TableRow>
                                <h2 sx={{ padding: '15px' }} className={styles.titleficha} >Termino de busqueda: {`(AQUI)`}</h2>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <Card sx={{ padding: '15px' }} className={styles.card}>
                                <CardContent>
                                    <div>
                                        <p className={styles.textFich} >Etiquetas: </p>
                                        <p className={styles.etiquetas} > {`Aqui vienen las etiquetas`} </p>
                                    </div>
                                    <p className={styles.titleficha} >{`Nombre comun`}</p>
                                    <p className={styles.nombreC} >{`Nombre cientifico`}</p>
                                    <p className={styles.textFich} >{`Descripcion`}</p>
                                </CardContent>
                                <CardActions>
                                    <button className={styles.btnLinkFicha} >Mas informacion</button>
                                    <button className={styles.btnReporte} >Eliminar de mis fichas guardadas</button>
                                </CardActions>
                            </Card>
                            <Card sx={{ padding: '15px' }} className={styles.card}>
                                <CardContent>
                                    <div>
                                        <p className={styles.textFich} >Etiquetas: </p>
                                        <p className={styles.etiquetas} > {`apio`} </p>
                                        <p className={styles.etiquetas} > {`comestible`} </p>
                                        <p className={styles.etiquetas} > {`malestar estomacal`} </p>
                                        <p className={styles.etiquetas} > {`enfermedades respiratorias`} </p>
                                        <p className={styles.etiquetas} > {`diarrea`} </p>
                                    </div>
                                    <p className={styles.titleficha} >{`Apio.`}</p>
                                    <p className={styles.nombreC} >{`Apium graveolens.`}</p>
                                    <p className={styles.textFich} >{`Hierba bienal o perenne, esparcidamente ramificada, sin pelos.Mide de 30 cm a 1 m de alto.Tiene un tallo estriado longitudinalmente,  sus hojas son, de 3 a 25 cm de largo, compuestas con pocos foliolos (pinnadas), peciolos de base envainante, los foliolos son ovados u obovados, cuneados en la base, de 2 a 6 cm de largo por 1 a 5 cm de ancho, margen profundamente lobado o dentado; las hojas superiores más pequeñas que las inferiores y cortamente pecioladas o subsésiles...`}</p>
                                </CardContent>
                                <CardActions>
                                    <Link href="/fichas/ficha">
                                        <a>
                                            <button className={styles.btnLinkFicha} >Mas informacion</button>
                                            <button className={styles.btnReporte} >Eliminar de mis fichas</button>
                                        </a>
                                    </Link>
                                </CardActions>
                            </Card>

                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        <Footy/>
        </div>
            
    )
}

const top100Films = [
    { title: 'apio' },
    { title: 'dolor estomacal' },
    { title: 'enfermedades respiratorias' }
];