import React, { useState } from 'react';
import styles from '../../../styles/Forms.module.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import { schemaSignPromotor } from '../../../schemas/signPromotor'
import IconPlantMatica from '../../../components/IconPlantMatica'
import { signPromotor } from '../../../pages/api/promotor-https'
import Steps from '../../../components/Steps';

export default function RegistrarSucursal () {

  return (
    <>
        
        <div>
            <form style={{ padding: '10%' }}  className={styles.root}>
              <h2 className={styles.title}>Registra una sucursal</h2>
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
                <input  className={styles.input} />
                <p className={styles.errors}></p>
              </div>
              <div className={styles.cont_input}>
                <label className={styles.text}>Razón social</label>
                <input  className={styles.input} />
                <p className={styles.errors}></p>
              </div>
              <div className={styles.cont_input}>
                <label className={styles.text}>{`Dirección comercial`}</label>
                <input
                  type='text'
                  className={styles.input}
                />
                <p className={styles.errors}></p>
              </div>
              <div className={styles.cont_input}>
                <label className={styles.text}>Teléfono comercial</label>
                <input
                  type='number'
                  className={styles.input}
                />
                <p className={styles.errors}></p>
              </div>
              <div className={styles.cont_input}>
                <label className={styles.text}>Correo comercial</label>
                <input  type='text' className={styles.input} />
                <p className={styles.errors}></p>
              </div>
      
              <div className={styles.cont_input}>
                <label className={styles.text}>CLABE interbancaria</label>
                <input
                 
                  type='number'
                  className={styles.input}
                />
                <p className={styles.errors}></p>
              </div>
              <div className={styles.cont_input}>
                <label className={styles.text}>Tarjeta de crédito del titular</label>
                <input type='number'
                  className={styles.input}
                />
                <p className={styles.errors}></p>
              </div>
              <div className={styles.cont_input}>
                <label className={styles.text}>RFC</label>
                <input type='text' className={styles.input} />
                <p className={styles.errors}></p>
              </div>
      
              <button type='submit' className={styles.btnSubmit}>
                Registrar Sucursal
              </button>
            </form>
          </div> 
    </>
  )
}
