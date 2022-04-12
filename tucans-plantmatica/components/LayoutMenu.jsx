import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Router from 'next/router'
import Link from 'next/link'
import styles from '../styles/Menu.module.css'
import MainHead from './MainHead'
import logo_1_w from '../src/logo_1_w.png'
import git_logo from '../src/git_icon.png'

import { validarToken } from '../pages/api/request'

export default function Menusup ({ children }) {
  const [uid, setUid] = useState()
  const [valueMenu, setValueMenu] = useState(false)
  const [token, setToken] = useState()

  const definirRutas = async () => {
    if (!uid) {
      let id = localStorage.getItem('id')
      let tokenR = localStorage.getItem('token')
      setUid(id)
      setToken(tokenR)
      setValueMenu(true)
    }
  }

  const cerrarSesion = async () => {
    localStorage.removeItem('token')
    Router.push('/')
  }

  useEffect(() => {
    definirRutas()
  })

  return (
    <>
      <div className={styles.container_0} style={{ margin: '0', padding: '0' }}>
        <font face='Work Sans' color='white'>
          <div className={styles.head}>
            <div className={styles.logo1}>
              <Image src={logo_1_w} width={'148px'} height={'60px'} />
            </div>
            <font face='Work Sans' color='white'>
              <div className={styles.botonera}>
                <div className={styles.dropdown}>
                  <Link href='/fichas'>
                    <a>
                      <button className={styles.dropbtn}>
                        <font face='Work Sans' color='white'>
                          <b>{`Inicio`}</b>
                        </font>
                      </button>
                    </a>
                  </Link>
                </div>

                <div className={styles.dropdown}>
                  <button className={styles.dropbtn}>
                    <font face='Work Sans' color='white'>
                      <b>{`Fichas`}</b>
                    </font>
                  </button>
                  <div className={styles.dropdownContent}>
                    <Link
                      href={valueMenu ? `/fichas/user/[guardadas]` : '#'}
                      as={valueMenu ? `/fichas/user/${uid}` : '#'}
                    >{`Guardadas`}</Link>
                    <Link href='/fichas/agregar'>{`+ Agregar Ficha`}</Link>
                  </div>
                </div>
                {!valueMenu ? (
                  <div className={styles.dropdown}>
                    <Link href='/session/IniciarSesion'>
                      <a>
                        <button className={styles.dropbtn}>
                          <font face='Work Sans' color='white'>
                            <b>{`Iniciar Sesion.`}</b>
                          </font>
                        </button>
                      </a>
                    </Link>
                  </div>
                ) : (
                  <div className={styles.dropdown}>
                    <button className={styles.dropbtn}>
                      <font face='Work Sans' color='white'>
                        <b>{`Cuenta`}</b>
                      </font>
                    </button>
                    <div className={styles.dropdownContent}>
                      <Link href='/user/cuenta'>{`Mi Cuenta`}</Link>
                      <Link href='/user/promo/'>{`Promotor`}</Link>
                      <button
                        className={styles.btnCerrar}
                        onClick={cerrarSesion}
                      >
                        <font
                          face='Work Sans'
                          color='black'
                          size='3'
                        >{`Cerrar Sesión`}</font>
                      </button>
                    </div>
                  </div>
                )}
                <div className={styles.dropdown}>
                  <Link href={`/admin?token=${token}`}>
                    <a>
                      <button className={styles.dropbtn}>
                        <font face='Work Sans' color='white'>
                          <b>{`Administrador`}</b>
                        </font>
                      </button>
                    </a>
                  </Link>
                </div>

                
              </div>
            </font>
          </div>
        </font>
      </div>
    </>
  )
}
