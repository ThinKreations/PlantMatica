import React, { useState } from 'react';
import styles from '../../styles/Forms.module.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import { schemaSignPromotor } from '../../schemas/signPromotor'
import IconPlantMatica from '../IconPlantMatica'
import { signPromotor } from '../../pages/api/promotor-https'
import Steps from "../Steps";

export default function SignPromotorComponent () {

    const [registrado, setRegistrado] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schemaSignPromotor)
  })

  const onSubmit = async data => {
    const res = await signPromotor(data);
    console.log(data)
    if(res.status === 200){
        setRegistrado(true);
    }
  }

  return (
    <>
        {
            !registrado ? <div>
            <form
              style={{ padding: '10%' }}
              onSubmit={handleSubmit(onSubmit)}
              className={styles.root}
            >
              <h2 className={styles.title}>Acceder como promotor</h2>
              <center>
                <IconPlantMatica wd={128} hg={128} />
              </center>
              <center>
                <p>
                  Por favor, llena este formulario con los datos solicitados. <b />
                  En caso de necesitar aclaraciones, envíe un correo a soporte. (
                  <a className={styles.link} href='mailto:software.tucans@gmail.com'>
                    software.tucans@gmail.com
                  </a>
                  )
                </p>
              </center>
              <div className={styles.cont_input}>
                <label className={styles.text}>Nombre público</label>
                <input {...register('nombre_publico')} className={styles.input} />
                <p className={styles.errors}>{errors.nombre_publico?.message}</p>
              </div>
              <div className={styles.cont_input}>
                <label className={styles.text}>Razón social</label>
                <input {...register('razon_social')} className={styles.input} />
                <p className={styles.errors}>{errors.razon_social?.message}</p>
              </div>
              <div className={styles.cont_input}>
                <label className={styles.text}>{`Dirección comercial`}</label>
                <input
                  {...register('direccion_comercial')}
                  type='text'
                  className={styles.input}
                />
                <p className={styles.errors}>{errors.direccion_comercial?.message}</p>
              </div>
              <div className={styles.cont_input}>
                <label className={styles.text}>Teléfono comercial</label>
                <input
                  {...register('telefono_comercial')}
                  type='number'
                  className={styles.input}
                />
                <p className={styles.errors}>{errors.telefono_comercial?.message}</p>
              </div>
              <div className={styles.cont_input}>
                <label className={styles.text}>Correo comercial</label>
                <input {...register('correo')} type='text' className={styles.input} />
                <p className={styles.errors}>{errors.correo?.message}</p>
              </div>
      
              <div className={styles.cont_input}>
                <label className={styles.text}>CLABE interbancaria</label>
                <input
                  {...register('clabe_interbancaria')}
                  type='number'
                  className={styles.input}
                />
                <p className={styles.errors}>{errors.clabe_interbancaria?.message}</p>
              </div>
              <div className={styles.cont_input}>
                <label className={styles.text}>Tarjeta de crédito del titular</label>
                <input
                  {...register('tarjeta_credito')}
                  type='number'
                  className={styles.input}
                />
                <p className={styles.errors}>{errors.tarjeta_credito?.message}</p>
              </div>
              <div className={styles.cont_input}>
                <label className={styles.text}>RFC</label>
                <input {...register('rfc')} type='text' className={styles.input} />
                <p className={styles.errors}>{errors.rfc?.message}</p>
              </div>
      
              <button type='submit' className={styles.btnSubmit}>
                Registrarse
              </button>
            </form>
          </div> : <Steps/>
        }
    </>
  )
}
