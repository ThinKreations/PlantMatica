import { atraparErrores } from "./handle-errors";
import swal from "sweetalert";

export const signProducto = async producto => {

    const referencia_promotor = localStorage.getItem('id_promotor');
    const token = localStorage.getItem('token');
    const data = { ...producto, referencia_promotor };
    let raw = JSON.stringify(data);
    const res = await fetch("https://mmg7n2ixnk.us-east-2.awsapprunner.com/product", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-token": token
        },
        body: raw
    });
    const resJSON = await res.json();
    atraparErrores(res, resJSON, 'Error al registrar el producto');
    return { resJSON, res };
}

export const getProductos = async producto => {

    const token = localStorage.getItem('token');
    const res = await fetch(`https://mmg7n2ixnk.us-east-2.awsapprunner.com/product/visualizar-productos`, {
        method: "GET",
        
    })
    //const resJSON = await res.json();

}