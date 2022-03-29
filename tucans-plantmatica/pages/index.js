import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import MainHead from '../components/MainHead';
import LayoutIndex from '../components/LayoutIndex';
import styles from "../styles/Home.module.css";
import logo from "../src/plantmatica.png";

export default function Index() {
  return (
    <div>
      <MainHead tituloPestana="PlantMatica" />
      <LayoutIndex>
        <font size={4} face="Work Sans">
          <div className={styles.container_1}>
            <font size={6} face="Work Sans" color="007200">
            <br />
              <center><Image src={logo}  /></center>
            </font>
            <center>
              <div className={styles.container_3}>
                <h3>{`Bienvenido a PlantMatica, un sitio ideal para conocer más sobre herbolaria en México.`}<br /><br />
                  {`Haznos saber qué buscas y la información llegará volando.`}</h3>
                <center>
                  <br />
                  
                    
                    <Link href="./session/IniciarSesion"><button className={styles.btnSubmit} type="submit"><h4>{`Iniciar Sesión`}</h4></button></Link>
                  
                  <br />
                  
                </center><br />
                

                <br />
              </div>
            </center>
          </div>
        </font>
      </LayoutIndex>
    </div>
  )
}