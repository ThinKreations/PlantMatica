import MainHead from '../../components/MainHead';
import LayoutMenu from "../../components/LayoutMenu"
import Footy from "../../components/footy";
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
import { traerEtiquetas } from '../api/fichas-http';
import { TableCell } from '@mui/material';
import { useEffect, useState } from 'react';

export default function Index({ fichas, etiquetas }) {

    const [fichasR, setFichasR] = useState(fichas);
    const [terminoB, setTerminoB] = useState('');

    const buscarCoincidencias = async () => {
        if (terminoB === undefined || terminoB === "" || terminoB === " ") {
            const res = await fetch(`https://plantmatica-back.vercel.app/ficha`);
            const fichas = await res.json();
            setFichasR(fichas);
        } else {
            const res = await fetch(`https://plantmatica-back.vercel.app/ficha/encontrar/coincidencia/`, {
                method: 'PUT',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    termino: terminoB
                })
            });
            const resJSON = await res.json();
            setFichasR(resJSON);
        }
    }

    

    return (
        <div>
            <MainHead tituloPestana="Inicio" />
            <LayoutMenu />
            <div className={styles2.tableFichas}>

                <TableContainer component={Paper} className={styles2.fondo}>
                    <Table sx={{ minWidth: 650, margin: '20px', maxWidth: '95%' }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>

                                    <Stack spacing={2} >
                                        <Autocomplete
                                            freeSolo
                                            id="free-solo-2-demo"
                                            disableClearable
                                            onChange={(event, terminoB) => setTerminoB(terminoB)}
                                            onKeyPress={e => setTerminoB(e.target.value)}
                                            options={etiquetas.arrayEtiquetas.map((option) => option.etiqueta)}
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
                                </TableCell>
                                <TableCell><button onClick={buscarCoincidencias} className={styles2.buscar_btn} >Buscar</button></TableCell>
                            </TableRow>
                            <TableRow>
                                <h2 sx={{ padding: '15px' }} className={styles2.titleficha} >Termino de busqueda: {terminoB}</h2>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {
                                fichasR.fichas.map(f => {
                                    return <div key={f._id} >
                                        <Card sx={{ padding: '15px' }} className={styles2.card}>
                                            <CardContent>
                                                <p className={styles2.titleficha} >{f.nombre_comun}</p>
                                                <p className={styles2.nombreC} >{f.nombre_cientifico}</p>
                                                <p className={styles2.textFich} >{f.descripcion}</p>
                                                <div>
                                                    <p className={styles2.textFich} >Etiquetas: </p>
                                                    {
                                                        f.etiquetas.map(e => {
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

export async function getServerSideProps({ }) {
    const res = await fetch(`https://plantmatica-back.vercel.app/ficha`);
    const fichas = await res.json();
    const etiquetas = await traerEtiquetas();

    return {
        props: { fichas, etiquetas, notFound: false }
    }
}
