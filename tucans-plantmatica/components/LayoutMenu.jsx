import React from 'react';
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Menu.module.css";
import MainHead from './MainHead';
import logo_1_w from "../src/logo_1_w.png";
import git_logo from "../src/git_icon.png";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import styles2 from "../styles/Home.module.css";

export default function menusup({ children }) {

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };


    return (

        <>
            <div className={styles.container_0} style={{ margin: '0', padding: '0' }} >
                <font face="Work Sans" color="white">
                    <div className={styles.head}>
                        <div>
                            <br/><Link href="menu"><Image src={logo_1_w} width={'188%'} height={'70%'} /></Link>
                        </div>
                        <div className={styles.botonera}>
                            <Link href="/fichas">
                                <a>
                                    <button className={styles.menuButton}>
                                        <font face="Work Sans" color="white"><h3>Inicio</h3></font>
                                    </button>
                                </a>
                            </Link>
                            <Link href="/user/">
                                <a>
                                    <button className={styles.menuButton}>
                                        <font face="Work Sans" color="white"><h3>Mi Cuenta</h3></font>
                                    </button>
                                </a>
                            </Link>
                            <Link href="/user/fichasGuardadas">
                                <a>
                                    <button className={styles.menuButton}>
                                        <font face="Work Sans" color="white"><h3>Fichas guardadas</h3></font>
                                    </button>
                                </a>
                            </Link>
                            <Link href="/">
                                <a>
                                    <button className={styles.menuButton} onClick={handleToggle}>
                                        <font face="Work Sans" color="white"><h3>Cerrar Sesión</h3></font>
                                    </button>
                                </a>
                            </Link>
                            <Backdrop
                                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                open={open}
                                onClick={handleClose}
                            >
                                <CircularProgress color="inherit" />
                            </Backdrop>
                        </div>

                    </div>

                </font>
                <div className={styles2.bgimagen}>
                    {children}
                </div>
                <font face="Work Sans" color="#FAFAFA">
                    <footer className={styles2.footy}>
                        <table className={styles2.footy_t}>
                            <tbody><tr>
                                <td className={styles2.footy_t_1}>
                                    <a><h2>© 2021 Tucan's Software</h2></a>
                                </td>
                                <td className={styles2.footy_t_2}>
                                    <Link href="https://github.com/addRian0-0/5IV9-PA-Tucanes-del-Software" passHref>
                                        <a target="_blank">
                                            <Image src={git_logo} className={styles2.git_logo} width={'50%'} height={'50%'} />
                                        </a>
                                    </Link>
                                </td>
                            </tr>
                            </tbody></table>
                    </footer>
                </font>
            </div>
        </>

    )

}
