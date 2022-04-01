import React from 'react'
import styles from "../../styles/Forms.module.css";
import TerminosYCondiciones from "../../components/TerminosYCondiciones";
import MainHead from '../../components/MainHead';
import LayoutIndex from '../../components/LayoutIndex';
import Link from 'next/link';
import Router from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { schemaCrearCuenta } from "../../schemas/crearCuenta";
import swal from "sweetalert";

export default function SignPromotor() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schemaCrearCuenta)
    });

    const onSubmit = async (data) => {
        const res = await fetch(`https://plantmatica-back.vercel.app/user`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: data.username,
                correo: data.correo,
                password: data.password,
                estadoMx: data.estadoMx,
                sexo: data.sexo,
                edad: data.edad
            })
        });
        const resJSON = await res.json();
        if(res.status !== 200){
            let arrayErrors = resJSON.errors;
            arrayErrors.forEach(e => {
                swal({
                    title: 'Error al crear cuenta',
                    text: e.msg,
                    icon: 'error',
                    button: 'Ok',
                })
            });
        }else{
            swal({
                title: 'Finalizado',
                text: resJSON.msg,
                icon: 'success',
                button: 'Ok',
                timer: '3000'
            });
            Router.push('/session/IniciarSesion')
        }
    }

    return (

        <div>
            <MainHead tituloPestana="Promotor" />
            <LayoutIndex>

                <form onSubmit={handleSubmit(onSubmit)} className={styles.root} >

                    <h2 className={styles.title} >Acceder como promotor</h2>
                    <center><p>Por favor, llena este formulario con los datos solicitados. <b/>En caso de necesitar aclaraciones, envíe un correo a soporte. (<a className={styles.link} href="mailto:software.tucans@gmail.com">software.tucans@gmail.com</a>)</p></center>
                    <div className={styles.cont_input}>
                        <label className={styles.text} >Nombre  público</label>
                        <input {...register('username')} className={styles.input} />
                        <p className={styles.errors} >{errors.username?.message}</p>
                    </div>
                    <div className={styles.cont_input}>
                        <label className={styles.text} >Razón social</label>
                        <input type="text" className={styles.input} />
                        
                    </div>
                    <div className={styles.cont_input}>
                        <label className={styles.text} >Usuario de Referencia</label>
                        <input {...register('correo')} className={styles.input} />
                        <p className={styles.errors} >{errors.correo?.message}</p>
                    </div>
                    <div className={styles.cont_input}>
                        <label className={styles.text} >{`Dirección comercial`}</label>
                        <input {...register('password')} type="text" className={styles.input} />
                        <p className={styles.errors} >{errors.password?.message}</p>
                    </div>
                    <div className={styles.cont_input}>
                        <label className={styles.text} >Teléfono comercial</label>
                        <input {...register('passwordV')} type="number" className={styles.input} />
                        <p className={styles.errors} >{errors.passwordV?.message}</p>
                    </div>
                    <div className={styles.cont_input}>
                        <label className={styles.text} >Correo comercial</label>
                        <input {...register('passwordV')} type="text" className={styles.input} />
                        <p className={styles.errors} >{errors.passwordV?.message}</p>
                    </div>
                    
                    
                    <div className={styles.cont_input}>
                        <label className={styles.text} >CLABE interbancaria</label>
                        <input {...register('passwordV')} type="number" className={styles.input} />
                        <p className={styles.errors} >{errors.passwordV?.message}</p>
                    </div>
                    <div className={styles.cont_input}>
                        <label className={styles.text} >Tarjeta de crédito del titular</label>
                        <input {...register('passwordV')} type="number" className={styles.input} />
                        <p className={styles.errors} >{errors.passwordV?.message}</p>
                    </div>
                    <div className={styles.cont_input}>
                        <label className={styles.text} >RFC</label>
                        <input type="text" className={styles.input} />
                        
                    </div>
                    
                    <Link href="../promo/"><button type='submit' className={styles.btnSubmit} >Crear Cuenta</button></Link>
                    
                    
                </form>
            </LayoutIndex>
        </div>

    )
}