import * as yup from 'yup';

export const schemaSignPromotor = yup.object().shape({
    nombre_producto:yup.string().required('El nombre es obligatorio'),
    tipo_producto:yup.string().required('El tipo es obligatorio'),
    descripcionP:yup.string().required('Se requiere de una descripción')
});
