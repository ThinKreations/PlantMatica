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
        method: "DELETE",
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
    atraparErrores(res, resJSON, 'Error al conseguir comentarios de la ficha');
    return resJSON;

}

/* Comentarios de productos*/
export const postComentarioProducto = async (id_producto, comentario) => {

    const id_user = localStorage.getItem('id')
    const token = localStorage.getItem('token');
    const res = await fetch(`https://mmg7n2ixnk.us-east-2.awsapprunner.com/product/add/comentario/${id_producto}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "x-token": token
        },
        body: JSON.stringify({ comentario, id_user })
    });
    const resJSON = await res.json();
    atraparErrores(res, resJSON, 'Error al publicar el comentario')
    return { res, resJSON };

}

export const deleteComentarioProducto = async (id_comentario) => {

    const token = localStorage.getItem('token');
    const res = await fetch(`https://mmg7n2ixnk.us-east-2.awsapprunner.com/product/delete/comentario/${id_comentario}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "x-token": token
        }
    })
    const resJSON = await res.json();
    atraparErrores(res, resJSON, 'Error al eliminar el comentario');
    return { resJSON, res }

}

export const getComentariosProducto = async (id_producto) => {

    const res = await fetch(
        `https://mmg7n2ixnk.us-east-2.awsapprunner.com/product/show/comentarios/${id_producto}`
    )
    const resJSON = await res.json()
    atraparErrores(res, resJSON, 'Error al conseguir comentarios de la ficha');
    return resJSON;

}