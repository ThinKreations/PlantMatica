export const getUsuario = async (id_user) => {

    const token = localStorage.getItem("token")
    const res = await fetch(`https://plantmatica-api.vercel.app/user/${id_user}`, {
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
    const res = await fetch(`https://plantmatica-api.vercel.app/user/${id}`, {
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

/* create es sobre si confirma o rechaza la creacion de la cuenta */
export const reqConfirmarCuenta = async (token, create) => {

    const res = await fetch(`https://plantmatica-api.vercel.app/user/confirmar/${create}/${token}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    const resJSON = await res.json();
    if (res.status === 200) {
        swal({
            title: 'Finalizado',
            text: resJSON.msg,
            icon: 'success',
            button: 'Ok',
        });
    } else {
        swal({
            title: 'Ocurrio un error',
            text: resJSON.msg,
            icon: 'error',
            button: 'Ok',
        });
    }

}

/* mandar correo de solicitud de cambiar contrasena */
export const reqCambiarContrasena = async (correo) => {

    const res = await fetch(`https://plantmatica-api.vercel.app/user/request-password-change`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            correo
        })
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
            button: 'Ok'
        });
    }

}

/* cambiar contrasena en si */
export const cambiarPass = async (token, password) => {

    const res = await fetch(`https://plantmatica-api.vercel.app/user/change-password/${token}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            password
        })
    })

    const resJSON = await res.json();
    if (res.status === 200) {
        swal({
            title: 'Finalizado',
            text: resJSON.msg,
            icon: 'success',
            button: 'Ok',
        });
        return true;
    } else {
        swal({
            title: 'Ocurrio un error - Intente mas tarde',
            text: resJSON.msg,
            icon: 'error',
            button: 'Ok',
        });
        return false;
    }

}