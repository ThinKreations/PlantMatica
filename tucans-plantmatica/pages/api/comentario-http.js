import { atraparErrores } from "./handle-errors";

export const postComentario = async (id_user, id_ficha, comentario) => {

    const token = localStorage.getItem('token')
    const res = await fetch(`https://plantmatica-api.vercel.app/ficha/${id_ficha}/comentarios`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "x-token": token
        },
        body: JSON.stringify({
            id_user,
            comentario
        })
    })
    const resJSON = await res.json();
    atraparErrores(res, resJSON, 'Error al publicar el comentario');
    return { resJSON, res };

}

export const getComentarios = async (id_ficha) => {

    const res = await fetch(`https://plantmatica-api.vercel.app/ficha/${id_ficha}/comentarios`)
    const resJSON = await res.json();
    atraparErrores(res, resJSON, 'Error al publicar el comentario');
    return { resJSON, res };

}
