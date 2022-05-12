import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Router from 'next/router'
import Link from 'next/link'
import styles from '../../styles/Promotor.module.css'

import logo from '../../src/plantmatica.png'
export default function MenuPromo () {
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
          <Link href='/user/promo/productos'>
            <a>
              <button className={styles.btnMenu}>
                <font face='Work Sans' size='3'>
                  <b>{`Productos`}</b>
                </font>
              </button>
            </a>
          </Link>
          <Link href='/user/promo/sucursales'>
            <a>
              <button className={styles.btnMenu}>
                <font face='Work Sans' size='3'>
                  <b>{`Sucursales`}</b>
                </font>
              </button>
            </a>
          </Link>
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
