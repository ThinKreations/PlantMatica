import * as yup from 'yup';

export const schemaSignPromotor = yup.object().shape({
    nombre_producto:yup.string().required('El nombre es obligatorio')
});