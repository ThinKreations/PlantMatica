import React from 'react';
import MainHead from '../../components/MainHead';
import LayoutMenu from "../../components/LayoutMenu"
import Footy from "../../components/footy"
import MostrarFicha from '../../components/MostrarFicha';
import styles2 from "../../styles/Fichas.module.css";
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
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export default function Index({ fichas }) {
    return (
        <div>
            <MainHead tituloPestana="Inicio" />
            <LayoutMenu />
            <div className={styles2.tableFichas}>

                <TableContainer component={Paper} className={styles2.fondo}>
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
                                                label="Buscar plantas"
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
                                <h2 sx={{ padding: '15px' }} className={styles2.titleficha} >Termino de busqueda: {`(AQUI)`}</h2>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {
                                fichas.fichas.map(f => {
                                    return <div key={f._id} >
                                        <Card sx={{ padding: '15px' }} className={styles2.card}>
                                            <CardContent>
                                                <p className={styles2.titleficha} >{f.nombre_comun}</p>
                                                <p className={styles2.nombreC} >{f.nombre_cientifico}</p>
                                                <p className={styles2.textFich} >{f.descripcion}</p>
                                                <div>
                                                    <p className={styles2.textFich} >Etiquetas: </p>
                                                    {
                                                        f.etiquetas.map ( e => {
                                                            return <p key={e} className={styles2.etiquetas} > {e} </p>
                                                        })
                                                    }
                                                </div>
                                            </CardContent>
                                            <CardActions>
                                                <Link href={`/fichas/[ficha]`} as={`/fichas/${f._id}`} >
                                                    <a>
                                                        <button className={styles2.btnLinkFicha} >Mas informacion</button>
                                                    </a>
                                                </Link>
                                            </CardActions>
                                        </Card>
                                    </div>
                                })
                            }

                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <Footy />
        </div>
    )
}

const top100Films = [
    { title: 'apio' },
    { title: 'dolor estomacal' },
    { title: 'enfermedades respiratorias' }
];

export async function getServerSideProps() {
    const res = await fetch('https://tucansplantmaticabackend.vercel.app/ficha/');
    const fichas = await res.json();
    //console.log(fichas)
    return {
        props: { fichas, notFound: false }
    }
}
