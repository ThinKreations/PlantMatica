import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import MainHead from '../components/MainHead';
import LayoutIndex from '../components/LayoutIndex';
import styles from "../styles/Home.module.css";

export default function Index() {
  return (
    <div>
      <MainHead tituloPestana="Bienvenido a PlantMatica" />
      <LayoutIndex>
        <font size={4} face="Work Sans">
          <div className={styles.container_1}>
            <font size={6} face="Work Sans" color="007200">
              <center><h1>{`Tucan's PlantMatica`}</h1></center>
            </font>
            <center>
              <div className={styles.container_3}>
                <h3>{`Bienvenido a PlantMatica, un sitio ideal para conocer más sobre herbolaria en México.`}<br /><br />
                  {`Haznos saber qué buscas y la información llegará volando.`}</h3>
                <center>
                  <br />
                  <div className={styles.container_4}>
                    <Link href="./session/CrearCuenta"><button className={styles.btnSubmit} type="submit"><h3>{`Crear Cuenta`}</h3></button></Link>
                    <Link href="./session/IniciarSesion"><button className={styles.btnSubmit} type="submit"><h3>{`Iniciar Sesión`}</h3></button></Link>
                  </div>
                  <br />
                </center><br />
                <h1>
                  {`Tucan's Software, ¿quiénes somos?`}
                </h1>
                <br />
                <h3>
                  {`Somos una empresa pequeña dedicada al desarrollo de software de la mejor calidad, con el proposito de fomentar la cultura, generar curiosidad.`}
                </h3>
                <br />
                <h1>
                  {`Visión`}
                </h1>
                <br />
                <h3>
                  {`Nuestra visión como empresa es figurar como una de las mejores empresas en el desarrollo de Software, y así lograr un impacto en la sociedad, y por ello ser reconocidos por la dedicación que le damos a nuestros proyectos.`}
                </h3>

                <br />
                <h1>{`Nuestro equipo`}</h1>
                <h3>{`Tucan's Software está conformado por 5 integrantes:`}</h3>
                <h4><Link href="https://github.com/Kiramasu2003"passHref><a target="_blank" className={styles.nombres} >{`Arce Roldán Sergio Elías`}</a></Link>, <Link href="https://github.com/Rafael260401" passHref><a target="_blank" className={styles.nombres} >{`Castañeda Rodriguez Rafael Gil`}</a></Link>, <Link href="https://github.com/addRian0-0" passHref><a target="_blank" className={styles.nombres} >{`Flores Zamora Ithan Adrián`}</a></Link>, <Link href="https://github.com/AlfredoGV77" passHref><a target="_blank" className={styles.nombres} >{`Gutiérrez Villalobos José Alfredo`}</a></Link> y <Link href="https://github.com/ThinKreations" passHref><a target="_blank" className={styles.nombres} >{`Nápoles Munguía José de Jesús`}</a></Link>; siendo todos unos desarrolladores con experiencia.</h4>
                <br />

                <br />
              </div>
            </center>
          </div>
        </font>
      </LayoutIndex>
    </div>
  )
}