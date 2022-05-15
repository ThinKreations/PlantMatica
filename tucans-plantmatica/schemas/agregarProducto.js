import * as yup from "yup";

export const schemaAgregarProducto = yup.object().shape({
    nombre: yup.string().required("El nombre es obligatorio"),
    descripcion: yup.string().required("La descripción es obligatoria"),
    costo_fisico: yup.number().required("El costo físico es obligatorio"),
})