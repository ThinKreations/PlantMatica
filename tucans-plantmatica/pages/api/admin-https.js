import swal from "sweetalert";

export const traerUsuarios = async (tipo_usuarios) => {

    const token = localStorage.getItem("token");
    /* Responde solo con un mensaje */
    const res = await fetch(`https://plantmatica-back.vercel.app/admin/`, {
        method: "GET",
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
            "x-token": token
        }
    });
    const resJSON = await res.json();
    if (res.status !== 200) {
        swal({
            title: 'Error',
            text: resJSON.msg,
            icon: 'info',
            button: 'Ok',
            timer: '3000'
        });
        return;
    } else { return resJSON; }

}

export const traerFichasNoAceptadas = async () => {
    
    const token = localStorage.getItem("token");
    const res = await fetch(`https://plantmatica-back.vercel.app/admin/fichas`, {
        method: "GET",
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
            "x-token": token
        }
    });
    const resJSON = await res.json();
    if (res.status !== 200) {
        swal({
            title: 'Error',
            text: resJSON.msg,
            icon: 'info',
            button: 'Ok',
            timer: '3000'
        });
        return;
    } else { return resJSON; }

}