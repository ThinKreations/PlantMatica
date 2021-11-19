import React from 'react';
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Menu.module.css";
import MainHead from './MainHead';
import logo_1_w from "../src/logo_1_w.png";
import git_logo from "../src/git_icon.png";
import styles2 from "../styles/Home.module.css";
import { validarToken } from "../pages/api/request";

export default function Menusup({ children }) {

    return (

        <>
            <div className={styles.container_0} style={{ margin: '0', padding: '0' }} >
                <font face="Work Sans" color="white">
                    <div className={styles.head}>
                        <div className={styles.logo1}>
                           <Link href="#" ><Image src={logo_1_w} width={'148%'} height={'60%'}  /></Link>
                        </div>
                        <font face="Work Sans" color="white">
                        <div className={styles.botonera}>
                            <div className={styles.dropdown}>
                            <Link href="/fichas"><button className={styles.dropbtn}><font face="Work Sans" color="white"><b>{`Inicio`}</b></font></button></Link>
                            
                            </div>

                            <div className={styles.dropdown}>
                            <button className={styles.dropbtn}><font face="Work Sans" color="white"><b>{`Fichas`}</b></font></button>
                                <div className={styles.dropdownContent}>
                                    <Link href="">{`Editadas`}</Link>
                                    <Link href="/fichas/fichasGuardadas">{`Guardadas`}</Link>
                                    <Link href="/fichas/agregar">{`+ Agregar Ficha`}</Link>
                                </div>
                            </div>

                            <div className={styles.dropdown}>
                            <button className={styles.dropbtn}><font face="Work Sans" color="white"><b>{`Administrador`}</b></font></button>
                                <div className={styles.dropdownContent}>
                                    
                                    <Link href="">{`Solicitudes`}</Link>
                                    <Link href="">{`Gestión de Usuarios`}</Link>
                                </div>
                            </div>

                            <div className={styles.dropdown}>
                            <button className={styles.dropbtn}><font face="Work Sans" color="white"><b>{`Cuenta`}</b></font></button>
                                <div className={styles.dropdownContent}>
                                    <Link href="">{`Mi Cuenta`}</Link>
                                    <Link href="">{`Configuración`}</Link>
                                    <Link href="/" >{`Cerrar Sesión`}</Link>
                                </div>
                            </div>
                            
                        </div>
                        </font>
                    </div>

                </font>
                
                
            </div>
        </>

    )

}
