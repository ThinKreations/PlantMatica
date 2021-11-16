import * as yup from 'yup';

export const schemaIniciarSesion = yup.object().shape({
    correo: yup.string().email('Formato de correo no valido').required('Campo obligatorio'),
    password: yup.string().required('Campo obligatorio'),
});