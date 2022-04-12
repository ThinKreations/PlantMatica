import React, { useState } from 'react';
import styles from '../../../styles/Forms.module.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import { schemaSignPromotor } from '../../../schemas/signPromotor'
import IconPlantMatica from '../../../components/IconPlantMatica'
import { signPromotor } from '../../api/promotor-https'
import Steps from '../../../components/Steps';
import MainHead from '../../../components/MainHead'
import LayoutIndex from '../../../components/LayoutIndex'
import { Checkbox } from '@mui/material';

export default function RegistrarSucursal () {

  return (
    <>
         <MainHead tituloPestana='Promotor' />
      <LayoutIndex>
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
                <label className={styles.text}>Dirección</label>
                <input  className={styles.input} />
                <p className={styles.errors}></p>
              </div>
              <div className={styles.cont_input}>
                <label className={styles.text}>Horario de atención</label>
                <select>Selecciona </select>
              </div>
              <div className={styles.cont_input}>
                <label className={styles.text}>Estado de aprobación</label>
                <Checkbox/>
                <p className={styles.errors}></p>
              </div>
              <div className={styles.cont_input}>
                <label className={styles.text}>Aki va lo del mapa xd</label>
                
              </div>
      
              
      
              <button type='submit' className={styles.btnSubmit}>
                Registrar Sucursal
              </button>
            </form>
          </div> 
      </LayoutIndex>
        
    </>
  )
}
