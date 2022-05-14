import React, { useEffect, useState } from 'react'
import styles from "../../../styles/Forms.module.css"
import TerminosYCondiciones from '../../../components/TerminosYCondiciones'
import MainHead from '../../../components/MainHead'
import LayoutMenu from '../../../components/LayoutMenu'
import MenuPromo from '../../../components/promo/MenuPromo'
import Link from 'next/link'
import Router from 'next/router'
import { validarToken } from '../../api/request'
import swal from 'sweetalert'
import Steps from '../../../components/Steps'
import SignPromotorComponent from '../../../components/promo/SignPromotorComponent'

export default function SignPromotor () {
  
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
    sessionControl();
  },[])

  return (
    <div>
      <MainHead tituloPestana='Registrate como Promotor' />
      <LayoutMenu/>
      <MenuPromo />
        <SignPromotorComponent/>
      
    </div>
  )
}
