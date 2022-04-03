import swal from "sweetalert";
import { atraparErrores } from "./request";

export const traerUsuarios = async (tipo_usuarios) => {

    const token = localStorage.getItem("token");
    /* Responde solo con un mensaje */
    const res = await fetch(`${process.env.API_URL}admin/`, {
        method: "GET",
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
            "x-token": token
        }
    });
    const resJSON = await res.json();
    if (res.status !== 200) {
        swal({
            title: 'Error',
            text: resJSON.msg,
            icon: 'info',
            button: 'Ok',
            timer: '3000'
        });
        return;
    } else { return resJSON; }

}

export const traerFichasNoAceptadas = async () => {

    const token = localStorage.getItem("token");
    const res = await fetch(`${process.env.API_URL}admin/fichas`, {
        method: "GET",
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
            "x-token": token
        }
    });
    const resJSON = await res.json();
    if (res.status !== 200) {
        swal({
            title: 'Error',
            text: resJSON.msg,
            icon: 'info',
            button: 'Ok',
            timer: '3000'
        });
        return;
    } else { return resJSON; }

}

export const declinarAceptarFicha = async (control, idAdmin, id_ficha) => {

    const token = localStorage.getItem("token");
    const res = await fetch(`${process.env.API_URL}admin/fichaControl/${id_ficha}`, {
        method: "PUT",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "x-token": token
        },
        body: JSON.stringify({
            idAdmin,
            control
        })
    })
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

}