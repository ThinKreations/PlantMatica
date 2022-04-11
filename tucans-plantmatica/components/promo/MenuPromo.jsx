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

            <Link href="/user/promo"><button><p>Inicio</p></button></Link>
            <Link href=""><button><p>Productos</p></button></Link>
            <Link href="/user/promo/sucursales"><button><p>Sucursales</p></button></Link>
            <button><p>Mi cuenta</p></button>
            <button><Link href="/"><p>Cerrar Sesión</p></Link></button>

        </aside>
        </div>
        </>

    )

}
