import { atraparErrores } from "./handle-errors";

export const agregarSolicitud = async (solicitud, id_ficha) => {

    const token = localStorage.getItem('token');
    const res = await fetch(`https://plantmatica-api.vercel.app/solicitud/${id_ficha}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-token": token
        },
        body: JSON.stringify(solicitud)
    })
    const resJSON = await res.json();
    atraparErrores(res, resJSON, 'Error enviar solicitud para editar ficha');
    return res;

}