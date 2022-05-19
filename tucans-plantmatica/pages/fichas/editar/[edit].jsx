import EditarFicha from '../../../components/fichas/EditarFicha'
import LayoutMenu from '../../../components/LayoutMenu'
import MainHead from '../../../components/MainHead'
import { useEffect } from 'react'
import { validarToken } from '../../api/request'

export default function Editar ({ ficha }) {
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
    sessionControl()
  }, [])

  return (
    <>
      <MainHead tituloPestana={`Editar: ${ficha.nombre_comun}`} />
      <LayoutMenu />
      <EditarFicha fichaParaEdicion={ficha} />
    </>
  )
}

export async function getServerSideProps ({ params }) {
  const res = await fetch(
    `https://mmg7n2ixnk.us-east-2.awsapprunner.com/ficha/${params.edit}`
  )

  const ficha = await res.json()
  return {
    props: { ficha: ficha.ficha, notFound: false }
  }
}
