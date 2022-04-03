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
import Footy from "../../../components/footy";
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import LayoutMenu from "../../../components/LayoutMenu";
import MainHead from '../../../components/MainHead';
import { validarToken } from "../../api/request";
import { misFichasGuardadas } from "../../api/fichas-http";

export default function FichasGuardadas() {

    const [num, setNum] = useState(0);
    const [fichasG, setFichasG] = useState();

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

    const borrarFicha = async (id_ficha) => {
        const token = localStorage.getItem('token');
        const { id } = await validarToken();
        const res = await fetch(`${process.env.API_URL}/ficha/guardadas/delete/${id_ficha}`, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-token': token
            },
            body: JSON.stringify({
                id_user: id
            })
        })
        const resJSON = await res.json();
        if (res.status !== 200) {
            let arrayErrors = resJSON.errors;
            arrayErrors.forEach(e => {
                swal({
                    title: 'Error',
                    text: e.msg,
                    icon: 'error',
                    button: 'Ok',
                })
            });
        } else {
            swal({
                title: 'Finalizado',
                text: resJSON.msg,
                icon: 'success',
                button: 'Ok',
                timer: '3000'
            });
        }
    }

    const traerFichas = async () => {
        const { id } = await validarToken();
        const { fichas_guardadas } = await misFichasGuardadas(id);
        setFichasG(fichas_guardadas);
    }

    useEffect(() => {
        sessionControl();
        traerFichas()
    }, [fichasG]);

    return (

        <div>
            <MainHead tituloPestana={'Fichas Guardadas'} />
            <LayoutMenu />
            <div className={styles.tableFichas}>

                <TableContainer component={Paper} className={styles.fondo}>
                    <Table sx={{ minWidth: 650, margin: '20px', maxWidth: '95%' }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {
                                !fichasG ? <Alert variant="outlined" severity="info">
                                    No tiene fichas guardadas.
                                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                                </Alert> :
                                    fichasG.fichas_guardadas.map(f => {
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
                                                    <a>
                                                        <button onClick={() => borrarFicha(f._id)} className={styles.btnReporte} >Eliminar de mis guardados</button>
                                                    </a>
                                                </CardActions>
                                            </Card>
                                        </div>
                                    })
                            }

                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            
        </div>

    )
}

const top100Films = [
    { title: 'apio' },
    { title: 'dolor estomacal' },
    { title: 'enfermedades respiratorias' }
];

