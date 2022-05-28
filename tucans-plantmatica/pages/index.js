import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import MainHead from '../components/MainHead';
import IconPlantMatica from '../components/IconPlantMatica';
import LayoutIndex from '../components/LayoutIndex';
import styles from "../styles/Home.module.css";
import logo from "../src/plantmatica.png";
import Head from 'next/head'

export default function Index() {
  return (
    <div>
      <Head>
        <title>PlantMatica</title>
        <meta property="og:title" content="plantmatica" key="Plantmatica" />
      </Head>
     
      <LayoutIndex>
        <font size={4} face="Work Sans">
          <div className={styles.container_1}>
            <font size={6} face="Work Sans" color="007200">
              <br />
              <center><Image src={logo} /></center>
              <br/>
            </font>
            <center>
              <div className={styles.container_3}>
                <h3>{`Bienvenido a PlantMatica, un sitio ideal para conocer más sobre herbolaria en México.`}<br /><br />
                  {`Haznos saber qué buscas y la información llegará volando.`}</h3>
                <center>
                  <br />
                  <div className={styles.tb_info} >
                    <div>
                      <IconPlantMatica wd={158} hg={158} />
                    </div>
                    <div>
                      <p className={styles.p_info} >
                        Podrás formas parte de nuestra comunidad, conocer más sobre herbolaria en México,
                        consultar informacion acerca de la herbolaria, compartir
                        tus experiencias de uso y mucho más.
                        <br />
                        <br/>
                        En caso de necesitar aclaraciones, envíe un correo a soporte. (<a className={styles.link} href="mailto:software.tucans@gmail.com">software.tucans@gmail.com</a>)
                      </p>
                    </div>
                  </div>
                  <br />
                  <Link href="./session/IniciarSesion"><button className={styles.btnSubmit} type="submit"><h4>{`Iniciar Sesión`}</h4></button></Link>

                </center>



              </div>
            </center>
          </div>
        </font>
      </LayoutIndex>
    </div>
  )
}

