import { atraparErrores } from "./handle-errors";

export const getSucursalesPromotor = async (id, token_server, server = false) => {

    let token;
    let referencia_promotor;

    if(server === false){
        token = localStorage.getItem('token');
        referencia_promotor = localStorage.getItem('id_promotor');
    }else{
        referencia_promotor = id;
        token = token_server;
    }

    const res = await fetch(`https://plantmatica-api.vercel.app/sucursal/${referencia_promotor}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-token": token
        }
    })
    //const resJSON = await res.json();
    return res;

}

export const agregarSucursal = async (nombre_sucursal, direccion, telefono, horario, persona_cargo) => {

    const token = localStorage.getItem("token");
    const referencia_promotor = localStorage.getItem("id_promotor");
    const res = await fetch(`https://plantmatica-api.vercel.app/sucursal`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-token": token
        },
        body: JSON.stringify({
            referencia_promotor,
            nombre_sucursal,
            direccion,
            telefono,
            horario,
            persona_cargo
        })
    })
    const resJSON = await res.json();
    atraparErrores(res, resJSON, 'Error al registrar la sucursal');
    return res;
}