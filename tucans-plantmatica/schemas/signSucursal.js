import * as yup from 'yup';

export const schemaSignSucursal = yup.object().shape({
    nombre_sucursal: yup.string().required('El nombre es obligatorio'),
    encargado: yup.string().required('Es necesario agregar un encargado'),
    //Dirección
    estado: yup.string().required('|El estado es obligatorio|'),
    alcaldia: yup.string().required('|La alcaldía es obligatoria|'),
    avenida: yup.string().required('|La avenida es obligatoria|'),
    num: yup.string().required('|El número es obligatorio|').max(10, 'Debe ser un número existente.'),
    
    telefono_sucursal: yup.string().required('Número obligatorio').min(10, 'Debe ser de 10 caracteres').max(10, 'Debe ser de 10 caracteres'),
    pagina_web: yup.string().email('Formato de correo no valido'),
    
});