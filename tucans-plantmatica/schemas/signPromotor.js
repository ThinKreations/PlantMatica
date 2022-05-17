import * as yup from 'yup';

export const schemaSignPromotor = yup.object().shape({
    nombre_publico: yup.string().required('El nombre público obligatorio'),
    razon_social: yup.string().required('La razón social es obligatoria'),
    direccion_comercial: yup.string().required('La dirección es obligatoria'),
    telefono_comercial: yup.string().required('Número obligatorio').min(10, 'Debe ser minimo de 10 caracteres'),
    correo_comercial: yup.string().required('Correo obligatorio').email('Formato de correo no valido'),
    clabe_interbancaria: yup.string().required('CLABE obligatoria').min(18, 'CLABE no valida'),
    tarjeta_credito: yup.string().min(16, 'Tarjeta no valida'),
    rfc: yup.string().required('El RFC obligatorio').min(13, 'RFC no valida').max(13,'El RFC tiene sólo 13 caratéres'),
});