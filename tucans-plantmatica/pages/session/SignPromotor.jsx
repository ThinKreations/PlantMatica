import React from 'react'
import styles from "../../styles/Forms.module.css";
import TerminosYCondiciones from "../../components/TerminosYCondiciones";
import MainHead from '../../components/MainHead';
import LayoutIndex from '../../components/LayoutIndex';
import Link from 'next/link';
import Router from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { schemaSignPromotor } from "../../schemas/signPromotor";
import swal from "sweetalert";

export default function SignPromotor() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schemaSignPromotor)
    });

    const onSubmit = async () => {

        console.log('jaja ola')
        
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
                        <input {...register('nombre_publico')} className={styles.input} />
                        <p className={styles.errors} >{errors.nombre_publico?.message}</p>
                    </div>
                    
                    <div className={styles.cont_input}>
                        <label className={styles.text} >Usuario de Referencia</label>
                        <input {...register('usuario_referencia')} className={styles.input} />
                        <p className={styles.errors} >{errors.usuario_referencia?.message}</p>
                    </div>
                    <div className={styles.cont_input}>
                        <label className={styles.text} >{`Dirección comercial`}</label>
                        <input {...register('direccion_comercial')} type="text" className={styles.input} />
                        <p className={styles.errors} >{errors.direccion_comercial?.message}</p>
                    </div>
                    <div className={styles.cont_input}>
                        <label className={styles.text} >Teléfono comercial</label>
                        <input {...register('telefono_comercial')} type="number" className={styles.input} />
                        <p className={styles.errors} >{errors.telefono_comercial?.message}</p>
                    </div>
                    <div className={styles.cont_input}>
                        <label className={styles.text} >Correo comercial</label>
                        <input {...register('correo')} type="text" className={styles.input} />
                        <p className={styles.errors} >{errors.correo?.message}</p>
                    </div>
                    
                    
                    <div className={styles.cont_input}>
                        <label className={styles.text} >CLABE interbancaria</label>
                        <input {...register('clabe_interbancaria')} type="number" className={styles.input} />
                        <p className={styles.errors} >{errors.clabe_interbancaria?.message}</p>
                    </div>
                    <div className={styles.cont_input}>
                        <label className={styles.text} >Tarjeta de crédito del titular</label>
                        <input {...register('tarjeta_credito')} type="number" className={styles.input} />
                        <p className={styles.errors} >{errors.tarjeta_credito?.message}</p>
                    </div>
                    <div className={styles.cont_input}>
                        <label className={styles.text} >RFC</label>
                        <input {...register('rfc')} type="text" className={styles.input} />
                        <p className={styles.errors} >{errors.rfc?.message}</p>
                    </div>
                    
                    <button type='submit' className={styles.btnSubmit} >Registrarse</button>
                    
                    
                    
                    
                </form>
            </LayoutIndex>
        </div>

    )
}