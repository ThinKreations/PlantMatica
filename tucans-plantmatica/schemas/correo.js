import * as yup from 'yup';

export const schemaCorreo = yup.object().shape({
    correo: yup.string().email('Formato de correo no valido').required('Campo obligatorio'),
}) 