import { useEffect, useState } from 'react';
import { traerEtiquetas } from '../api/fichas-http';
import { traerUsuarios, traerFichasNoAceptadas, declinarAceptarFicha } from '../api/admin-https';
import { validarToken } from '../api/request';

export default function Destruction(){
  
  const [numPeticiones, setNumPeticiones] = useState(0);
  
  const sessionControl = async () => {
        const valid = await validarToken();
        if (valid === false) {
            swal({
                title: 'Inicia sesion.',
                text: 'Tu sesion expiro, vuelve a iniciar sesion para realizar esta operacion.',
                icon: 'info',
                button: 'Ok',
                timer: '3000'
            });
            Router.push('/session/IniciarSesion');
        }
    }
  
  const traerFichas = async () => {
    const res = await fetch(`${process.env.API_URL}ficha`);
    const fichas = await res.json();
  }
  
  useEffect(() => {
      sessionControl();
      traerUsuarios();
      traerEtiquetas();
      traerFichas();
      setNumPeticiones(numPeticiones + 4);
    });
  
  return(
    <>
    <p>Numero de peticiones: {numPeticiones}</p>
    </>
  )
  
}
