import React from 'react'
import FichaUnica from '../../components/FichaUnica';
import Footy from "../../components/footy"
import LayoutMenu from "../../components/LayoutMenu";
import MainHead from '../../components/MainHead';
export default function Ficha() {
    return (
        <div>
            <MainHead tituloPestana="Ficha" />
            <LayoutMenu/>
                <FichaUnica/>
            <Footy/>
        </div>
    )
}