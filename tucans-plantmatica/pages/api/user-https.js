export const getUsuario = async (id_user) => {

    const token = localStorage.getItem("token")
    const res = await fetch(`${process.env.API_URL}/user/${id_user}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-token": token
        }
    });
    const resJSON = await res.json();
    if (res.status !== 200) {
        if (!resJSON.errors) {
            swal({
                title: 'Inicie sesion.',
                text: resJSON.msg,
                icon: 'error',
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
    return resJSON;
}

export const actualizarUsuario = async (id, usuario) => {

    const token = localStorage.getItem("token");
    const res = await fetch(`${process.env.API_URL}/user/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "x-token": token
        },
        body: JSON.stringify(usuario)
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
}
