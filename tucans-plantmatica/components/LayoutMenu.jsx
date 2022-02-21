import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Router from "next/router";
import Link from "next/link";
import styles from "../styles/Menu.module.css";
import MainHead from './MainHead';
import logo_1_w from "../src/logo_1_w.png";
import git_logo from "../src/git_icon.png";
import styles2 from "../styles/Home.module.css";
import { validarToken } from "../pages/api/request";

export default function Menusup({ children }) {

    const [uid, setUid] = useState();
    const [valueMenu, setValueMenu] = useState(false);

    const definirRutas = async () => {
        if (!uid) {
            const { id } = await validarToken();
            setUid(id);
            setValueMenu(true);
        }
    }

    const cerrarSesion = async () => {
        localStorage.removeItem('token');
        Router.push('/');
    }

    useEffect(() => {
        definirRutas();
    });

    return (

        <>
            <div className={styles.container_0} style={{ margin: '0', padding: '0' }} >
                <font face="Work Sans" color="white">
                    <div className={styles.head}>
                        <div className={styles.logo1}>
                            <Link href="#" ><Image src={logo_1_w} width={'148%'} height={'60%'} /></Link>
                        </div>
                        <font face="Work Sans" color="white">
                            <div className={styles.botonera}>
                                <div className={styles.dropdown}>
                                    <Link href="/fichas">
                                        <button className={styles.dropbtn}><font face="Work Sans" color="white"><b>{`Inicio`}</b></font></button>
                                    </Link>
                                </div>

                                <div className={styles.dropdown}>
                                    <button className={styles.dropbtn}><font face="Work Sans" color="white"><b>{`Fichas`}</b></font></button>
                                    <div className={styles.dropdownContent}>
                                        <Link href={valueMenu ? `/fichas/user/[guardadas]` : "#"}
                                            as={valueMenu ? `/fichas/user/${uid}` : "#"} >{`Guardadas`}</Link>
                                        <Link href="/fichas/agregar">{`+ Agregar Ficha`}</Link>
                                    </div>
                                </div>

                                <div className={styles.dropdown}>
                                    <Link href="/admin"><button className={styles.dropbtn}><font face="Work Sans" color="white"><b>{`Administrador`}</b></font></button></Link>
                                    {/*
                                    
                                    <div className={styles.dropdownContent}>
                                        <Link href="/admin">{`Inicio`}</Link>
                                        <Link href="">{`Solicitudes`}</Link>
                                        <Link href="">{`Gestión de Usuarios`}</Link>
                                    </div>

                                    */}
                                </div>

                                {
                                    !valueMenu ? <div className={styles.dropdown}>
                                        <Link href="/session/IniciarSesion"><a>
                                            <button className={styles.dropbtn}><font face="Work Sans" color="white"><b>{`Iniciar Sesion.`}</b></font></button>
                                        </a></Link>
                                    </div> : <div className={styles.dropdown}>
                                        <button className={styles.dropbtn}><font face="Work Sans" color="white"><b>{`Cuenta`}</b></font></button>
                                        <div className={styles.dropdownContent}>
                                            <Link href="/user/cuenta">{`Mi Cuenta`}</Link>
                                            <Link href="">{`Configuración`}</Link>
                                            <button className={styles.btnCerrar} onClick={cerrarSesion} ><font face="Work Sans" color="black" size="3">{`Cerrar Sesión`}</font></button>
                                        </div>
                                    </div>
                                }

                            </div>
                        </font>
                    </div>

                </font>


            </div>
        </>

    )

}
