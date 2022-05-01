import { atraparErrores } from "./handle-errors";

export const signPromotor = async promotor => {

    let id_user = localStorage.getItem('id');
    const token = localStorage.getItem('token');
    const data = { ...promotor, usuario_referencia: id_user };
    let raw = JSON.stringify(data);
    //console.log(data);
    const res = await fetch("https://plantmatica-api.vercel.app/promotor", {
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

export const signSucursal = async sucursal => {

    let id_user = localStorage.getItem('id');
    const token = localStorage.getItem('token');
    const data = { ...sucursal, usuario_referencia: id_user };
    let raw = JSON.stringify(data);
    const res = await fetch("https://plantmatica-api.vercel.app/sucursal", {
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

