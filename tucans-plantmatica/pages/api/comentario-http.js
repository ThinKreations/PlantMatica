import { atraparErrores } from "./handle-errors";

/* Comentarios de ficha */
export const postComentario = async (id_user, id_ficha, comentario) => {

    const token = localStorage.getItem('token')
    const res = await fetch(`https://mmg7n2ixnk.us-east-2.awsapprunner.com/ficha/add/comentarios/${id_ficha}/`, {
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

export const deleteComentarioFicha = async (id_comentario) => {

    const token = localStorage.getItem('token')
    const res = await fetch(`https://mmg7n2ixnk.us-east-2.awsapprunner.com/ficha/delete/comentarios/${id_comentario}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "x-token": token
        },
    });
    const resJSON = await res.json();
    atraparErrores(res, resJSON, 'Error al eliminar el comentario');
    return { resJSON, res }

}

export const getComentarios = async (id_ficha) => {

    const res = await fetch(`https://mmg7n2ixnk.us-east-2.awsapprunner.com/ficha/show/comentarios/${id_ficha}`)
    const resJSON = await res.json();
    atraparErrores(res, resJSON, 'Error al publicar el comentario');
    let { comentarios } = await resJSON;
    return resJSON;

}

/* Comentarios de productos*/
export const postComentarioProducto = async (id_user, id_producto, comentario) => {



}