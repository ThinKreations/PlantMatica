import { useEffect, useState } from 'react';

export default function Destruction(){
  
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
  
  useEffect(() => {
        sessionControl();
    });
  
  return(
    <>
    <p>Numero de peticiones</p>
    </>
  )
  
}
