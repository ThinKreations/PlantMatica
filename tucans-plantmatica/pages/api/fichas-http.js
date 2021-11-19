export const traerEtiquetas = async () => {
    const res = await fetch(`https://plantmatica-back.vercel.app/ficha/buscar/etiquetas`)
    const etiquetas = await res.json();
    return etiquetas;
}