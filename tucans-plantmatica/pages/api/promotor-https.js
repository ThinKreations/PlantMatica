import { atraparErrores } from "./handle-errors";
import Router from 'next/router'

export const signPromotor = async promotor => {

    let id_user = localStorage.getItem('id');
    const token = localStorage.getItem('token');
    const data = { ...promotor, usuario_referencia: id_user };
    let raw = JSON.stringify(data);
    //console.log(data);
    const res = await fetch("https://mmg7n2ixnk.us-east-2.awsapprunner.com/promotor", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-token": token
        },
        body: raw
    });
    const resJSON = await res.json();
    atraparErrores(res, resJSON, 'Error al registrarse como promotor');
    return res;

}

export const actualizarPromotor = async (id_promotor, promotor) => {

    const token = localStorage.getItem('token');
    const data = { ...promotor };
    let raw = JSON.stringify(data);
    //console.log(data);
    const res = await fetch(`https://mmg7n2ixnk.us-east-2.awsapprunner.com/promotor/edit/${id_promotor}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "x-token": token
        },
        body: raw
    });
    const resJSON = await res.json();
    atraparErrores(res, resJSON, 'Error al actualizar el promotor');
    return res;

}

export const getInfoPromotor = async () => {

    const token = localStorage.getItem('token');
    const id_user = localStorage.getItem('id');
    const res = await fetch(`https://mmg7n2ixnk.us-east-2.awsapprunner.com/promotor/${id_user}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-token": token
        }
    });
    const resJSON = await res.json();
    /* Si si esta registrado como promotor se guardara su ID en el localStorage */
    if (resJSON.promotor !== null) { localStorage.setItem('id_promotor', resJSON.promotor._id) }
    return res;

}

export const signSucursal = async sucursal => {

    let id_user = localStorage.getItem('id');
    const token = localStorage.getItem('token');
    const data = { ...sucursal, usuario_referencia: id_user };
    let raw = JSON.stringify(data);
    const res = await fetch("https://mmg7n2ixnk.us-east-2.awsapprunner.com/sucursal", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-token": token
        },
        body: raw
    });
    const resJSON = await res.json();
    atraparErrores(res, resJSON, 'Error al registrar la sucursal');
    return res;
}


