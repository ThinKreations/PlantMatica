import React from 'react';
import MainHead from '../../components/MainHead';
import LayoutMenu from "../../components/LayoutMenu"
import Footy from "../../components/footy"
import styles from "../../styles/Home.module.css";
import MostrarFicha from '../../components/MostrarFicha';

export default function Index() {
    return (
        <div>
            <MainHead tituloPestana="Inicio" />
            <LayoutMenu/>
                <MostrarFicha/>
            <Footy/>
        </div>
    )
}
