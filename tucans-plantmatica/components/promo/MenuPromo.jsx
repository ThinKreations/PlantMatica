import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Router from "next/router";
import Link from "next/link";
import styles from '../../styles/Promotor.module.css'

import logo from "../../src/plantmatica.png";
export default function MenuPromo() {


    return (

        <>
            <div className={styles.header}>
        <aside><Image src={logo} width="360" height="66"/></aside>
        <aside>

            <Link href="/promo"><button><p>Inicio</p></button></Link>
            <Link href="/promo/productos/productos"><button><p>Productos</p></button></Link>
            <button><p>Sucursales</p></button>
            <button><p>Mi cuenta</p></button>
            <button><a href="/"><p>Cerrar Sesión</p></a></button>

        </aside>
        </div>
        </>

    )

}
