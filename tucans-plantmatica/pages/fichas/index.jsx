import React from 'react';
import MainHead from '../../components/MainHead';
import LayoutIndex from '../../components/LayoutIndex';
import LayoutMenu from "../../components/LayoutMenu"
import styles from "../../styles/Home.module.css";
import MostrarFicha from '../../components/MostrarFicha';

export default function Index() {
    return (
        <div>
            <MainHead tituloPestana="Inicio" />
            <LayoutMenu/>
                <MostrarFicha/>
            
        </div>
    )
}
