import React, { useState } from 'react'
import EditarUsuario from '../../components/EditarUsuario.jsx'
import VisualizarUsuario from '../../components/VisualizarUsuario.jsx'
import LayoutMenu from "../../components/LayoutMenu";
import Footy from "../../components/footy";

export default function Index() {
    
    //Hook para vista dependiendo xd
    const [verUsuario, setVer] = useState(true);

    const cambiarEstado = () => {
        verUsuario ? setVer(false) : setVer(true);
    }

    return (
        <div>
        <LayoutMenu/>
            {
                verUsuario ? <VisualizarUsuario evtBtn={cambiarEstado } /> : <EditarUsuario evtBtn={cambiarEstado }/>
            }
        <Footy/>
        </div>
    )
}