import React from 'react'
import AgregarFicha from '../../components/AgregarFicha';
import Footy from "../../components/footy"
import LayoutMenu from "../../components/LayoutMenu";

export default function Ficha() {
    return (
        <div>
            
            <LayoutMenu/>
            <font face="Work Sans" color="green" size="5">
            <center><h1>Solicitud de Adición</h1></center>
            </font>
            <AgregarFicha/>
            <Footy/>
        </div>
    )
}