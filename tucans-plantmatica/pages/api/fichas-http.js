export const traerEtiquetas = async () => {
    const res = await fetch(`https://plantmatica-back.vercel.app/ficha/buscar/etiquetas`)
    const etiquetas = await res.json();
    return etiquetas;
}

export const misFichasGuardadas = async (id_user) => {
    const token = localStorage.getItem('token');
    const res = await fetch(`https://plantmatica-back.vercel.app/ficha/guardadas/${id_user}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'x-token': token
        }
    })
    const fichas = await res.json();
    return fichas;
}