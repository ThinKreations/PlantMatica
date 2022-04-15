import EditarFicha from '../../../components/fichas/EditarFicha'
import LayoutMenu from '../../../components/LayoutMenu'
import MainHead from '../../../components/MainHead'

export default function Editar ({ ficha }) {
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
    `https://plantmatica-api.vercel.app/ficha/${params.edit}`
  )

  const ficha = await res.json()
  return {
    props: { ficha: ficha.ficha, notFound: false }
  }
}
