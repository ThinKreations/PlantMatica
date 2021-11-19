import swal from 'sweetalert';

export const validarToken = async () => {

    const token = localStorage.getItem('token');
    const res = await fetch(`https://plantmatica-back.vercel.app/login/token/${token}`, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'x-token': token
        }
    });
    const resJSON = await res.json();
    if (res.status !== 200) {
        await atraparErrores(res, resJSON);
        return false;
    }
    return resJSON;

}

export const guardarFichaHttp = async (id_ficha, id_user, token) => {

    const res = await fetch(`https://plantmatica-back.vercel.app/ficha/guardar/${id_ficha}`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'x-token': token
        },
        body: JSON.stringify({
            id_user
        })
    });
    const resJSON = await res.json();
    await atraparErrores(res, resJSON);
    return resJSON;

}

const atraparErrores = async (res, resJSON) => {
    if (res.status !== 200) {
        if (!resJSON.errors) {
            swal({
                title: 'Finalizado.',
                text: resJSON.msg,
                icon: 'success',
                button: 'Ok',
                timer: '3000'
            });
        } else {
            let arrayErrors = await resJSON.errors;
            arrayErrors.forEach(e => {
                swal({
                    title: 'Error',
                    text: e.msg,
                    icon: 'error',
                    button: 'Ok',
                })
            });
        }
    } else {
        swal({
            title: 'Finalizado.',
            text: resJSON.msg,
            icon: 'success',
            button: 'Ok',
            timer: '3000'
        });
    }
}

export const buscarCoincidencia = async (termino) => {

    const res = await fetch(`https://plantmatica-back.vercel.app/ficha/encontrar/coincidencia/`, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            termino
        })
    });
    /* Respuesta procesada en formato json */
    const resJSON = await res.json();

}