import React from "react";
import styles from '../styles/Home.module.css';
import MainHead from '../components/MainHead';
import IconPlantMatica from "../components/IconPlantMatica";
import logo_1_w from "../src/logo_1_b.png";
import Image from "next/image";

export default function Error (){

    return (
        <>
        
        <MainHead tituloPestana="Error" />
        
        <div className={styles.container}>
        <br/><br/>
            <center>
            <Image src={logo_1_w} width={'200%'} height={'80%'}  /><br/><br/>
            <IconPlantMatica wd={158} hg={158} />
            
        <h3><b><font face='Work Sans' size={5} color='red'>¡Error encontrado!</font></b></h3>
        <p><b><font face='Work Sans' size={3} >Si deseas reportarlo, puedes mandar un correo a: <a className={styles.link} href='mailto:software.tucans@gmail.com'>
                    software.tucans@gmail.com
                  </a>, y lo solucionaremos lo más pronto posible.</font></b></p>
                  
                  
                  </center>
        </div>
       

        </>
    )

}