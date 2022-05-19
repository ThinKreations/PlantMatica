import { atraparErrores } from "./handle-errors"

/* Es multisubidas de imagenes a cloudinary */
export const uploadImagen = async (file, coleccion, id) => {

    let formdata = new FormData();
    formdata.append("archivo", file);

    const res = await fetch(`https://mmg7n2ixnk.us-east-2.awsapprunner.com/upload/${coleccion}/${id}`, {
        method: 'PUT',
        body: formdata,
    })
    const resJSON = await res.json();
    atraparErrores(res, resJSON, 'Error al subir archivo...')
    return res;

}