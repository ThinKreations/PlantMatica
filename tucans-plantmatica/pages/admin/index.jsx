import MainHead from '../../components/MainHead';
import Alert from '@mui/material/Alert';
import Router from "next/router";
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
import { TableCell } from '@mui/material';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { traerUsuarios, traerFichasNoAceptadas } from '../api/admin-https';
import { validarToken } from '../api/request';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Index({ fichas }) {

    const [value, setValue] = useState(0);
    const [fichasR, setFichasR] = useState(fichas);
    const [usuariosR, setUsuarios] = useState();
    const [fichasNoR, setFichasNoR] = useState(fichas);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const actualizarDataUsuarios = async () => {
        if (!usuariosR) {
            const usuarios = await traerUsuarios();
            setUsuarios(usuarios);
        }
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

    const actualizarDataFichasNoAceptadas = async () => {
        if (fichasNoR === fichasR) {
            const fichasNoRes = await traerFichasNoAceptadas();
            setFichasNoR(fichasNoRes);
        }
    }

    useEffect(() => {
        actualizarDataUsuarios();
        actualizarDataFichasNoAceptadas();
        sessionControl();
    }, [usuariosR, fichasNoR]);

    return (
        <div>
            <MainHead tituloPestana="Inicio" />
            <LayoutMenu />
            <div className={styles2.tableFichas}>

                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} textColor="secondary"
                            indicatorColor="secondary">
                            <Tab label="Fichas aceptadas" {...a11yProps(0)} />
                            <Tab label="Fichas no aceptadas" {...a11yProps(1)} />
                            <Tab label="Solicitudes de edicion" {...a11yProps(2)} />
                            <Tab label="Usuarios" {...a11yProps(3)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
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
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <h2 sx={{ padding: '15px' }} className={styles2.titleficha}>Solicitudes de agregar fichas pendientes: { !fichasNoR ? "0" : fichasNoR.noAceptadas }.</h2>
                        {

                            !fichasNoR ? <Alert variant="outlined" severity="info">
                                No hay solicitudes para agregar fichas pendientes.
                            </Alert> :
                                fichasNoR.fichas.map(fn => {
                                    return <div key={fn._id} >
                                        <Card sx={{ padding: '15px' }} className={styles2.card}>
                                            <CardContent>
                                                <p className={styles2.titleficha} >{fn.nombre_comun}</p>
                                                <p className={styles2.nombreC} >{fn.nombre_cientifico}</p>
                                                <p className={styles2.textFich} >{fn.descripcion}</p>
                                                <div>
                                                    <p className={styles2.textFich} >Etiquetas: </p>
                                                    {
                                                        fn.etiquetas.map(e => {
                                                            return <p key={e} className={styles2.etiquetas} > {e} </p>
                                                        })
                                                    }
                                                </div>
                                            </CardContent>
                                            <CardActions>
                                                <Link href={`/fichas/[ficha]`} as={`/fichas/${fn._id}`} >
                                                    <a>
                                                        <button className={styles2.btnLinkFicha} >Mas informacion</button>
                                                    </a>
                                                </Link>
                                            </CardActions>
                                        </Card>
                                    </div>
                                })
                        }
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Solicitudes
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <h2 sx={{ padding: '15px' }} className={styles2.titleficha}>Usuarios con la cuenta activa.</h2>
                        {
                            !usuariosR ? <Alert variant="outlined" severity="info">
                                Cargando...
                            </Alert> :
                                usuariosR.usuarios.map(u => {
                                    return <div key={u._id} >
                                        <Card sx={{ padding: '15px' }} className={styles2.card}>
                                            <CardContent>
                                                <p className={styles2.nombreC} >Nombre de usuario: {u.username}</p>
                                                <p className={styles2.textFich} >Correo: {u.correo}</p>
                                                <p className={styles2.textFich} >Edad: {u.edad}</p>
                                                <p className={styles2.textFich} >Rol: {u.rol}</p>
                                                <p className={styles2.textFich} >Estado de la cuenta: {u.status}</p>
                                                <p className={styles2.textFich} >Numero de reportes hacia este usuario: {u.reportes.length}</p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                })
                        }
                    </TabPanel>
                </Box>
            </div>
            <Footy />
        </div>
    )
}

export async function getServerSideProps({ }) {
    const res = await fetch(`https://plantmatica-back.vercel.app/ficha`);
    const fichas = await res.json();

    return {
        props: { fichas, notFound: false }
    }
}
