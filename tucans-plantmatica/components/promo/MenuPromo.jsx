import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Router from 'next/router'
import Link from 'next/link'
import styles from '../../styles/Promotor.module.css'
import logo from '../../src/plantmatica.png'
import { getInfoPromotor } from '../../pages/api/promotor-https'
import { validarToken } from '../../pages/api/request'
export default function MenuPromo () {
  const [idPromo, setIdPromo] = useState()
  const [token, setToken] = useState()
  const [optionMenu, setOptionMenu] = useState(false)

  const definirRutas = async () => {
    if (!idPromo) {
      let id = localStorage.getItem('id_promotor')
      if (id !== null || id !== undefined) {
        setOptionMenu(false)
      }
      let tokenR = localStorage.getItem('token')
      setToken(tokenR)
      setIdPromo(id)
    }
  }

  const sessionControl = async () => {
    const valid = await validarToken()
    if (valid === false) {
      swal({
        title: 'Inicia sesion.',
        text:
          'Tu sesion expiro, vuelve a iniciar sesion para realizar esta operacion.',
        icon: 'info',
        button: 'Ok',
        timer: '3000'
      })
      Router.push('/session/IniciarSesion')
    }
  }

  useEffect(() => {
    definirRutas()
  })

  return (
    <>
      <div className={styles.header}>
        <aside>
          <Link href='/user/promo'>
            <a>
              <button className={styles.btnMenu}>
                <font face='Work Sans' size='3'>
                  <b>{`Inicio`}</b>
                </font>
              </button>
            </a>
          </Link>
          {optionMenu ? (
            <>
              <Link href={`/user/promo/productos?idpromo=${idPromo}&token=${token}`}>
                <a>
                  <button className={styles.btnMenu}>
                    <font face='Work Sans' size='3'>
                      <b>{`Productos`}</b>
                    </font>
                  </button>
                </a>
              </Link>
              <Link
                href={`/user/promo/sucursales?idpromo=${idPromo}&token=${token}`}
              >
                <a>
                  <button className={styles.btnMenu}>
                    <font face='Work Sans' size='3'>
                      <b>{`Sucursales`}</b>
                    </font>
                  </button>
                </a>
              </Link>
            </>
          ) : (
            ''
          )}
          <Link href='/user/promo/perfil'>
            <a>
              <button className={styles.btnMenu}>
                <font face='Work Sans' size='3'>
                  <b>{`Perfil`}</b>
                </font>
              </button>
            </a>
          </Link>
        </aside>
      </div>
    </>
  )
}
