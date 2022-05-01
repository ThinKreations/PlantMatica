import MainHead from '../MainHead'
import styles from '../../styles/Promotor.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Checkbox, FormControl } from '@mui/material'
import { schemaSignSucursal } from '../../schemas/signSucursal'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import { signSucursal } from '../../pages/api/promotor-https'

export default function RegistrarSucursales () {

    const [registrado, setRegistrado] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schemaSignSucursal)
  })

  const onSubmit = async data => {
    const res = await signSucursal(data);
    if(res.status === 200){
        setRegistrado(true);
    }
  }

  return (
    <>
        
        <form className={styles.registrarSucursales}  onSubmit={handleSubmit(onSubmit)}>
        
        <font size={5} face="Work Sans" color="007200"><b>Registrar Sucursal</b></font>
        <br/>
        <input {...register('nombre_sucursal')} className={styles.input} placeholder="Nombre de la Sucursal"></input>
        <p className={styles.errors}>{errors.nombre_sucursal?.message}</p>
        <br/>
        <font size={4} face="Work Sans" color="007200"><b>Dirección:</b></font>
        <br/>
        <input {...register('estado')} className={styles.direccion} placeholder="Estado"></input>
        <input {...register('alcaldia')} className={styles.direccion} placeholder="Alcaldía"></input>
        <input {...register('avenida')} className={styles.direccion} placeholder="Avenida"></input>
        <input {...register('num')} className={styles.direccion} type="number" placeholder="Número Ext/Int"></input>
        <p className={styles.errors}>{errors.estado?.message}  {errors.alcaldia?.message}  {errors.avenida?.message}  {errors.num?.message}</p>
        <input {...register('telefono_sucursal')} className={styles.input} placeholder="Número telefónico de la Sucursal"></input>
        <p className={styles.errors}>{errors.telefono_sucursal?.message}</p>
        <input className={styles.input} placeholder="Página Web (Opcional)"></input>
        <br/>
        <font size={4} face="Work Sans" color="007200">
        <b>Horario de atención</b>
        <br/>
        <div className={styles.checkContainer}>

        <div><p className={styles.dia}>Lunes</p><br/>
        <b>Desde:</b>
        <select className={styles.mini_input}>
          <option className={styles.option}>Sin</option>
          <option className={styles.option}>0:00</option>
          <option className={styles.option}>1:00</option>
          <option className={styles.option}>2:00</option>
          <option className={styles.option}>3:00</option>
          <option className={styles.option}>4:00</option>
          <option className={styles.option}>5:00</option>
          <option className={styles.option}>6:00</option>
          <option className={styles.option}>7:00</option>
          <option className={styles.option}>8:00</option>
          <option className={styles.option}>9:00</option>
          <option className={styles.option}>10:00</option>
          <option className={styles.option}>11:00</option>
          <option className={styles.option}>12:00</option>
          <option className={styles.option}>13:00</option>
          <option className={styles.option}>14:00</option>
          <option className={styles.option}>15:00</option>
          <option className={styles.option}>16:00</option>
          <option className={styles.option}>17:00</option>
          <option className={styles.option}>18:00</option>
          <option className={styles.option}>19:00</option>
          <option className={styles.option}>20:00</option>
          <option className={styles.option}>21:00</option>
          <option className={styles.option}>22:00</option>
          <option className={styles.option}>23:00</option>
        </select><br/>
        <b>Hasta:</b>
        <select className={styles.mini_input}>
          <option className={styles.option}>Sin</option>
          <option className={styles.option}>0:00</option>
          <option className={styles.option}>1:00</option>
          <option className={styles.option}>2:00</option>
          <option className={styles.option}>3:00</option>
          <option className={styles.option}>4:00</option>
          <option className={styles.option}>5:00</option>
          <option className={styles.option}>6:00</option>
          <option className={styles.option}>7:00</option>
          <option className={styles.option}>8:00</option>
          <option className={styles.option}>9:00</option>
          <option className={styles.option}>10:00</option>
          <option className={styles.option}>11:00</option>
          <option className={styles.option}>12:00</option>
          <option className={styles.option}>13:00</option>
          <option className={styles.option}>14:00</option>
          <option className={styles.option}>15:00</option>
          <option className={styles.option}>16:00</option>
          <option className={styles.option}>17:00</option>
          <option className={styles.option}>18:00</option>
          <option className={styles.option}>19:00</option>
          <option className={styles.option}>20:00</option>
          <option className={styles.option}>21:00</option>
          <option className={styles.option}>22:00</option>
          <option className={styles.option}>23:00</option>
        </select><br/>
        </div>

        <div><p className={styles.dia}>Martes</p><br/>
        <b>Desde:</b>
        <select className={styles.mini_input}>
        <option className={styles.option}>Sin</option>
          <option className={styles.option}>0:00</option>
          <option className={styles.option}>1:00</option>
          <option className={styles.option}>2:00</option>
          <option className={styles.option}>3:00</option>
          <option className={styles.option}>4:00</option>
          <option className={styles.option}>5:00</option>
          <option className={styles.option}>6:00</option>
          <option className={styles.option}>7:00</option>
          <option className={styles.option}>8:00</option>
          <option className={styles.option}>9:00</option>
          <option className={styles.option}>10:00</option>
          <option className={styles.option}>11:00</option>
          <option className={styles.option}>12:00</option>
          <option className={styles.option}>13:00</option>
          <option className={styles.option}>14:00</option>
          <option className={styles.option}>15:00</option>
          <option className={styles.option}>16:00</option>
          <option className={styles.option}>17:00</option>
          <option className={styles.option}>18:00</option>
          <option className={styles.option}>19:00</option>
          <option className={styles.option}>20:00</option>
          <option className={styles.option}>21:00</option>
          <option className={styles.option}>22:00</option>
          <option className={styles.option}>23:00</option>
        </select><br/>
        <b>Hasta:</b>
        <select className={styles.mini_input}>
        <option className={styles.option}>Sin</option>
          <option className={styles.option}>0:00</option>
          <option className={styles.option}>1:00</option>
          <option className={styles.option}>2:00</option>
          <option className={styles.option}>3:00</option>
          <option className={styles.option}>4:00</option>
          <option className={styles.option}>5:00</option>
          <option className={styles.option}>6:00</option>
          <option className={styles.option}>7:00</option>
          <option className={styles.option}>8:00</option>
          <option className={styles.option}>9:00</option>
          <option className={styles.option}>10:00</option>
          <option className={styles.option}>11:00</option>
          <option className={styles.option}>12:00</option>
          <option className={styles.option}>13:00</option>
          <option className={styles.option}>14:00</option>
          <option className={styles.option}>15:00</option>
          <option className={styles.option}>16:00</option>
          <option className={styles.option}>17:00</option>
          <option className={styles.option}>18:00</option>
          <option className={styles.option}>19:00</option>
          <option className={styles.option}>20:00</option>
          <option className={styles.option}>21:00</option>
          <option className={styles.option}>22:00</option>
          <option className={styles.option}>23:00</option>
        </select><br/>
        </div>
        
        <div><p className={styles.dia}>Miércoles</p><br/>
        <b>Desde:</b>
        <select className={styles.mini_input}>
        <option className={styles.option}>Sin</option>
          <option className={styles.option}>0:00</option>
          <option className={styles.option}>1:00</option>
          <option className={styles.option}>2:00</option>
          <option className={styles.option}>3:00</option>
          <option className={styles.option}>4:00</option>
          <option className={styles.option}>5:00</option>
          <option className={styles.option}>6:00</option>
          <option className={styles.option}>7:00</option>
          <option className={styles.option}>8:00</option>
          <option className={styles.option}>9:00</option>
          <option className={styles.option}>10:00</option>
          <option className={styles.option}>11:00</option>
          <option className={styles.option}>12:00</option>
          <option className={styles.option}>13:00</option>
          <option className={styles.option}>14:00</option>
          <option className={styles.option}>15:00</option>
          <option className={styles.option}>16:00</option>
          <option className={styles.option}>17:00</option>
          <option className={styles.option}>18:00</option>
          <option className={styles.option}>19:00</option>
          <option className={styles.option}>20:00</option>
          <option className={styles.option}>21:00</option>
          <option className={styles.option}>22:00</option>
          <option className={styles.option}>23:00</option>
        </select><br/>
        <b>Hasta:</b>
        <select className={styles.mini_input}>
        <option className={styles.option}>Sin</option>
          <option className={styles.option}>0:00</option>
          <option className={styles.option}>1:00</option>
          <option className={styles.option}>2:00</option>
          <option className={styles.option}>3:00</option>
          <option className={styles.option}>4:00</option>
          <option className={styles.option}>5:00</option>
          <option className={styles.option}>6:00</option>
          <option className={styles.option}>7:00</option>
          <option className={styles.option}>8:00</option>
          <option className={styles.option}>9:00</option>
          <option className={styles.option}>10:00</option>
          <option className={styles.option}>11:00</option>
          <option className={styles.option}>12:00</option>
          <option className={styles.option}>13:00</option>
          <option className={styles.option}>14:00</option>
          <option className={styles.option}>15:00</option>
          <option className={styles.option}>16:00</option>
          <option className={styles.option}>17:00</option>
          <option className={styles.option}>18:00</option>
          <option className={styles.option}>19:00</option>
          <option className={styles.option}>20:00</option>
          <option className={styles.option}>21:00</option>
          <option className={styles.option}>22:00</option>
          <option className={styles.option}>23:00</option>
        </select><br/>
        </div>

        <div><p className={styles.dia}>Jueves</p><br/>
        <b>Desde:</b>
        <select className={styles.mini_input}>
        <option className={styles.option}>Sin</option>
          <option className={styles.option}>0:00</option>
          <option className={styles.option}>1:00</option>
          <option className={styles.option}>2:00</option>
          <option className={styles.option}>3:00</option>
          <option className={styles.option}>4:00</option>
          <option className={styles.option}>5:00</option>
          <option className={styles.option}>6:00</option>
          <option className={styles.option}>7:00</option>
          <option className={styles.option}>8:00</option>
          <option className={styles.option}>9:00</option>
          <option className={styles.option}>10:00</option>
          <option className={styles.option}>11:00</option>
          <option className={styles.option}>12:00</option>
          <option className={styles.option}>13:00</option>
          <option className={styles.option}>14:00</option>
          <option className={styles.option}>15:00</option>
          <option className={styles.option}>16:00</option>
          <option className={styles.option}>17:00</option>
          <option className={styles.option}>18:00</option>
          <option className={styles.option}>19:00</option>
          <option className={styles.option}>20:00</option>
          <option className={styles.option}>21:00</option>
          <option className={styles.option}>22:00</option>
          <option className={styles.option}>23:00</option>
        </select><br/>
        <b>Hasta:</b>
        <select className={styles.mini_input}>
        <option className={styles.option}>Sin</option>
          <option className={styles.option}>0:00</option>
          <option className={styles.option}>1:00</option>
          <option className={styles.option}>2:00</option>
          <option className={styles.option}>3:00</option>
          <option className={styles.option}>4:00</option>
          <option className={styles.option}>5:00</option>
          <option className={styles.option}>6:00</option>
          <option className={styles.option}>7:00</option>
          <option className={styles.option}>8:00</option>
          <option className={styles.option}>9:00</option>
          <option className={styles.option}>10:00</option>
          <option className={styles.option}>11:00</option>
          <option className={styles.option}>12:00</option>
          <option className={styles.option}>13:00</option>
          <option className={styles.option}>14:00</option>
          <option className={styles.option}>15:00</option>
          <option className={styles.option}>16:00</option>
          <option className={styles.option}>17:00</option>
          <option className={styles.option}>18:00</option>
          <option className={styles.option}>19:00</option>
          <option className={styles.option}>20:00</option>
          <option className={styles.option}>21:00</option>
          <option className={styles.option}>22:00</option>
          <option className={styles.option}>23:00</option>
        </select><br/>
        </div>

        <div><p className={styles.dia}>Viernes</p><br/>
        <b>Desde:</b>
        <select className={styles.mini_input}>
        <option className={styles.option}>Sin</option>
          <option className={styles.option}>0:00</option>
          <option className={styles.option}>1:00</option>
          <option className={styles.option}>2:00</option>
          <option className={styles.option}>3:00</option>
          <option className={styles.option}>4:00</option>
          <option className={styles.option}>5:00</option>
          <option className={styles.option}>6:00</option>
          <option className={styles.option}>7:00</option>
          <option className={styles.option}>8:00</option>
          <option className={styles.option}>9:00</option>
          <option className={styles.option}>10:00</option>
          <option className={styles.option}>11:00</option>
          <option className={styles.option}>12:00</option>
          <option className={styles.option}>13:00</option>
          <option className={styles.option}>14:00</option>
          <option className={styles.option}>15:00</option>
          <option className={styles.option}>16:00</option>
          <option className={styles.option}>17:00</option>
          <option className={styles.option}>18:00</option>
          <option className={styles.option}>19:00</option>
          <option className={styles.option}>20:00</option>
          <option className={styles.option}>21:00</option>
          <option className={styles.option}>22:00</option>
          <option className={styles.option}>23:00</option>
        </select><br/>
        <b>Hasta:</b>
        <select className={styles.mini_input}>
        <option className={styles.option}>Sin</option>
          <option className={styles.option}>0:00</option>
          <option className={styles.option}>1:00</option>
          <option className={styles.option}>2:00</option>
          <option className={styles.option}>3:00</option>
          <option className={styles.option}>4:00</option>
          <option className={styles.option}>5:00</option>
          <option className={styles.option}>6:00</option>
          <option className={styles.option}>7:00</option>
          <option className={styles.option}>8:00</option>
          <option className={styles.option}>9:00</option>
          <option className={styles.option}>10:00</option>
          <option className={styles.option}>11:00</option>
          <option className={styles.option}>12:00</option>
          <option className={styles.option}>13:00</option>
          <option className={styles.option}>14:00</option>
          <option className={styles.option}>15:00</option>
          <option className={styles.option}>16:00</option>
          <option className={styles.option}>17:00</option>
          <option className={styles.option}>18:00</option>
          <option className={styles.option}>19:00</option>
          <option className={styles.option}>20:00</option>
          <option className={styles.option}>21:00</option>
          <option className={styles.option}>22:00</option>
          <option className={styles.option}>23:00</option>
        </select><br/>
        </div>

        <div><p className={styles.dia}>Sabado</p><br/>
        <b>Desde:</b>
        <select className={styles.mini_input}>
        <option className={styles.option}>Sin</option>
          <option className={styles.option}>0:00</option>
          <option className={styles.option}>1:00</option>
          <option className={styles.option}>2:00</option>
          <option className={styles.option}>3:00</option>
          <option className={styles.option}>4:00</option>
          <option className={styles.option}>5:00</option>
          <option className={styles.option}>6:00</option>
          <option className={styles.option}>7:00</option>
          <option className={styles.option}>8:00</option>
          <option className={styles.option}>9:00</option>
          <option className={styles.option}>10:00</option>
          <option className={styles.option}>11:00</option>
          <option className={styles.option}>12:00</option>
          <option className={styles.option}>13:00</option>
          <option className={styles.option}>14:00</option>
          <option className={styles.option}>15:00</option>
          <option className={styles.option}>16:00</option>
          <option className={styles.option}>17:00</option>
          <option className={styles.option}>18:00</option>
          <option className={styles.option}>19:00</option>
          <option className={styles.option}>20:00</option>
          <option className={styles.option}>21:00</option>
          <option className={styles.option}>22:00</option>
          <option className={styles.option}>23:00</option>
        </select><br/>
        <b>Hasta:</b>
        <select className={styles.mini_input}>
        <option className={styles.option}>Sin</option>
          <option className={styles.option}>0:00</option>
          <option className={styles.option}>1:00</option>
          <option className={styles.option}>2:00</option>
          <option className={styles.option}>3:00</option>
          <option className={styles.option}>4:00</option>
          <option className={styles.option}>5:00</option>
          <option className={styles.option}>6:00</option>
          <option className={styles.option}>7:00</option>
          <option className={styles.option}>8:00</option>
          <option className={styles.option}>9:00</option>
          <option className={styles.option}>10:00</option>
          <option className={styles.option}>11:00</option>
          <option className={styles.option}>12:00</option>
          <option className={styles.option}>13:00</option>
          <option className={styles.option}>14:00</option>
          <option className={styles.option}>15:00</option>
          <option className={styles.option}>16:00</option>
          <option className={styles.option}>17:00</option>
          <option className={styles.option}>18:00</option>
          <option className={styles.option}>19:00</option>
          <option className={styles.option}>20:00</option>
          <option className={styles.option}>21:00</option>
          <option className={styles.option}>22:00</option>
          <option className={styles.option}>23:00</option>
        </select><br/>
        </div>

        <div><p className={styles.dia}>Domingo</p><br/>
        <b>Desde:</b>
        <select className={styles.mini_input}>
        <option className={styles.option}>Sin</option>
          <option className={styles.option}>0:00</option>
          <option className={styles.option}>1:00</option>
          <option className={styles.option}>2:00</option>
          <option className={styles.option}>3:00</option>
          <option className={styles.option}>4:00</option>
          <option className={styles.option}>5:00</option>
          <option className={styles.option}>6:00</option>
          <option className={styles.option}>7:00</option>
          <option className={styles.option}>8:00</option>
          <option className={styles.option}>9:00</option>
          <option className={styles.option}>10:00</option>
          <option className={styles.option}>11:00</option>
          <option className={styles.option}>12:00</option>
          <option className={styles.option}>13:00</option>
          <option className={styles.option}>14:00</option>
          <option className={styles.option}>15:00</option>
          <option className={styles.option}>16:00</option>
          <option className={styles.option}>17:00</option>
          <option className={styles.option}>18:00</option>
          <option className={styles.option}>19:00</option>
          <option className={styles.option}>20:00</option>
          <option className={styles.option}>21:00</option>
          <option className={styles.option}>22:00</option>
          <option className={styles.option}>23:00</option>
        </select><br/>
        <b>Hasta:</b>
        <select className={styles.mini_input}>
        <option className={styles.option}>Sin</option>
          <option className={styles.option}>0:00</option>
          <option className={styles.option}>1:00</option>
          <option className={styles.option}>2:00</option>
          <option className={styles.option}>3:00</option>
          <option className={styles.option}>4:00</option>
          <option className={styles.option}>5:00</option>
          <option className={styles.option}>6:00</option>
          <option className={styles.option}>7:00</option>
          <option className={styles.option}>8:00</option>
          <option className={styles.option}>9:00</option>
          <option className={styles.option}>10:00</option>
          <option className={styles.option}>11:00</option>
          <option className={styles.option}>12:00</option>
          <option className={styles.option}>13:00</option>
          <option className={styles.option}>14:00</option>
          <option className={styles.option}>15:00</option>
          <option className={styles.option}>16:00</option>
          <option className={styles.option}>17:00</option>
          <option className={styles.option}>18:00</option>
          <option className={styles.option}>19:00</option>
          <option className={styles.option}>20:00</option>
          <option className={styles.option}>21:00</option>
          <option className={styles.option}>22:00</option>
          <option className={styles.option}>23:00</option>
        </select><br/>
        </div>

        

        </div>
        
        <p className={styles.dia}>Servicio a Domicilio<Checkbox/></p><br/>

        </font>
        <button type="submit" className={styles.btnSign}><font size="3" face="Work Sans"><b>✚ Registrar Sucursal</b></font></button>
        
        
        </form>
        
    </>
  )
}