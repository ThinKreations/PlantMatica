import * as yup from 'yup';

export const schemaCrearCuenta = yup.object().shape({
    nombre_comun: yup.string().required('Campo obligatorio').min(3, 'Debe ser minimo de 3 caracteres'),
    nombre_cientifico: yup.string().required('Campo obligatorio').min(3, 'Debe ser minimo de 3 caracteres'),
});