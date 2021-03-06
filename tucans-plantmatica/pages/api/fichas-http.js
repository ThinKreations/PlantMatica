export const agregarFichaReq = async (ficha) => {
    const token = localStorage.getItem("token");
    const res = await fetch(`https://mmg7n2ixnk.us-east-2.awsapprunner.com/ficha`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            "x-token": token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ficha)
    })
    const resJSON = await res.json();
    if (res.status !== 200) {
        let arrayErrors = resJSON.errors;
        arrayErrors.forEach(e => {
            swal({
                title: 'Error',
                text: e.msg,
                icon: 'error',
                button: 'Ok',
            })
        });
    } else {
        swal({
            title: 'Finalizado',
            text: resJSON.msg,
            icon: 'success',
            button: 'Ok',
            timer: '3000'
        });
    }
    return { resJSON, res }
}

export const traerEtiquetas = async () => {
    const res = await fetch(`https://mmg7n2ixnk.us-east-2.awsapprunner.com/ficha/buscar/etiquetas`)
    const etiquetas = await res.json();
    return etiquetas;
}

export const misFichasGuardadas = async (id_user) => {
    const token = localStorage.getItem('token');
    const res = await fetch(`https://mmg7n2ixnk.us-east-2.awsapprunner.com/ficha/guardadas/${id_user}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'x-token': token
        }
    })
    const fichas = await res.json();
    return fichas;
}

/* Imágenes */

