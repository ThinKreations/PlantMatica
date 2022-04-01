import MainHead from '../../../components/MainHead';
import styles from '../../../styles/Promotor.module.css'
import Image from 'next/image';
import Link from 'next/link';
import logo from "../../../src/plantmatica.png";
import MenuPromo from '../../../components/promo/MenuPromo'
export default function Promotor(){

    return(

        <>
        <MainHead tituloPestana="Promotor"/>
        <MenuPromo/>
        
        <h1>PlantMatica para promotores</h1>
        <p>A través de este medio, tendrás la posibilidad de promocionar tu negocio y tus productos a un precio justo.</p>
        </>

    )

}
