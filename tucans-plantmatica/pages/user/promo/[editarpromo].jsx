export default function EditarPromo () {
  return (
    <>
      <p>Hola</p>
    </>
  )
}

export async function getServerSideProps ({ params, query }) {
    //console.log(query.token, params)
  const res = await fetch(
    `https://plantmatica-api.vercel.app/promotor/${params.editarpromo}`,
    {
      method: 'GET',
      headers: {
        'x-token': query.token
      }
    }
  )
  const { promotor } = await res.json()
  return {
    props: {
      promotor,
      notFound: false
    }
  }
}
