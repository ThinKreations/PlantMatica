import { useEffect, useState } from "react";
import styles from "../../../styles/Fichas.module.css";
import Router from "next/router";
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
import Footy from "../../../components/footy"
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import LayoutMenu from "../../../components/LayoutMenu";
import MainHead from '../../../components/MainHead';
import { validarToken } from "../../api/request";
import { misFichasGuardadas } from "../../api/fichas-http";

export default function FichasGuardadas({ fichas }) {

    const [num, setNum] = useState(0);

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

    const executa = async () => {
        if (num > 2) {
            const { id } = await validarToken();
            const lel = await misFichasGuardadas(id);
            console.log(lel)
            setNum(num + 1);
        }
    }

    useEffect(() => {
        sessionControl();
        executa();
    });

    return (

        <div>
            <MainHead tituloPestana={'Fichas Guardadas'} />
            <LayoutMenu />
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

                            {
                                fichas.fichas.map(f => {
                                    return <div key={f._id} >
                                        <Card sx={{ padding: '15px' }} className={styles.card}>
                                            <CardContent>
                                                <p className={styles.titleficha} >{f.nombre_comun}</p>
                                                <p className={styles.nombreC} >{f.nombre_cientifico}</p>
                                                <p className={styles.textFich} >{f.descripcion}</p>
                                                <div>
                                                    <p className={styles.textFich} >Etiquetas: </p>
                                                    {
                                                        f.etiquetas.map(e => {
                                                            return <p key={e} className={styles.etiquetas} > {e} </p>
                                                        })
                                                    }
                                                </div>
                                            </CardContent>
                                            <CardActions>
                                                <Link href={`/fichas/[ficha]`} as={`/fichas/${f._id}`} >
                                                    <a>
                                                        <button className={styles.btnLinkFicha} >Mas informacion</button>
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

export async function getServerSideProps({ }) {
    const res = await fetch(`https://plantmatica-back.vercel.app/ficha`);
    const fichas = await res.json();

    return {
        props: { fichas, notFound: false }
    }
}