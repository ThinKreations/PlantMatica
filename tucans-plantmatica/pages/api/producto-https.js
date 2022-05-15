import { atraparErrores } from "./handle-errors";

export const signProducto = async producto => {

    const referencia_promotor = localStorage.getItem('id_promotor');
    const token = localStorage.getItem('token');
    const data = { ...producto, referencia_promotor };
    let raw = JSON.stringify(data);
    const res = await fetch("https://plantmatica-api.vercel.app/product", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-token": token
        },
        body: raw
    });
    const resJSON = await res.json();
    atraparErrores(res, resJSON, 'Error al registrar el producto');
    return res;
}
