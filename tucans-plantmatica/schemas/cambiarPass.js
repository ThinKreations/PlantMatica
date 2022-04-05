import * as yup from "yup";

export const schemaCambiarPass = yup.object().shape({
    password: yup.string().required('Campo obligatorio').min(6, 'Debe ser minimo de 6 caracteres'),
    passwordV: yup.string().oneOf([yup.ref('password'), null], 'Las contraseñas deben coincidir').required('Campo obligatorio'),
})