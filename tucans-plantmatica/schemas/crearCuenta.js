import * as yup from 'yup';

export const schemaCrearCuenta = yup.object().shape({
    username: yup.string().required('Campo obligatorio').min(5, 'Debe ser minimo de 5 caracteres'),
    correo: yup.string().email('Formato de correo no valido').required('Campo obligatorio'),
    password: yup.string().required('Campo obligatorio').min(5, 'Debe ser minimo de 5 caracteres'),
    passwordV: yup.string().oneOf([yup.ref('password'), null], 'Las contraseñas deben coincidir').required('Campo obligatorio'),
    edad: yup.number('Tiene que ser un numero').min(1, 'Edad no valida').integer('Tipo de dato no valido'),
    estadoMx: yup.string(),
    sexo: yup.string()
});