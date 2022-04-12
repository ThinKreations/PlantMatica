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
        
        <aside>

            <Link href="/user/promo"><button className={styles.btnMenu}>
                <font face='Work Sans' size="3"><b>{`Inicio`}</b></font>
            </button></Link>
            <Link href="/user/promo/productos"><button className={styles.btnMenu}>
                <font face='Work Sans' size="3"><b>{`Productos`}</b></font>
            </button></Link>
            <Link href="/user/promo/sucursales"><button className={styles.btnMenu}>
                <font face='Work Sans' size="3"><b>{`Sucursales`}</b></font>    
            </button></Link>
            <Link href="/user/promo/promo"><button className={styles.btnMenu}>
                <font face='Work Sans' size="3"><b>{`Perfil`}</b></font>  
            </button></Link>
            
        </aside>
        </div>
        </>

    )

}
