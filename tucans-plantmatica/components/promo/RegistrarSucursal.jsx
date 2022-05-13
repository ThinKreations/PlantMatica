import MainHead from '../MainHead'
import styles from '../../styles/Promotor.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Checkbox, FormControl } from '@mui/material'
import { schemaSignSucursal } from '../../schemas/signSucursal'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import { signSucursal } from '../../pages/api/promotor-https'
import { horario } from './SelectOptionHorario'
import { agregarSucursal } from '../../pages/api/sucursales-http'

export default function RegistrarSucursales () {
  const [registrado, setRegistrado] = useState(false)
  const [horarioOption, setHorarioOption] = useState([])

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schemaSignSucursal)
  })

  const onSubmit = async data => {
    let horario = {
      lunes: { abierto: data.abierto_lunes, cierre: data.cierre_lunes },
      martes: { abierto: data.abierto_martes, cierre: data.cierre_martes },
      miercoles: {
        abierto: data.abierto_miercoles,
        cierre: data.cierre_miercoles
      },
      jueves: { abierto: data.abierto_jueves, cierre: data.cierre_jueves },
      viernes: { abierto: data.abierto_viernes, cierre: data.cierre_viernes },
      sabado: { abierto: data.abierto_sabado, cierre: data.cierre_sabado },
      domingo: { abierto: data.abierto_domingo, cierre: data.cierre_domingo }
    }
    let direccion = {
      estado: data.estado,
      alcaldia: data.alcaldia,
      avenida: data.avenida,
      num_ext_int: data.num
    }
    const resp = await agregarSucursal(data.nombre_sucursal, direccion, data.telefono_sucursal, horario, data.encargado )
    location.reload();
  }

  useEffect(() => {
    const ora = horario()
    setHorarioOption(ora)
  }, [])

  return (
    <>
      <form className={styles.registrar} onSubmit={handleSubmit(onSubmit)}>
        <font size={5} face='Work Sans' color='007200'>
          <b>Registrar Sucursal</b>
        </font>
        <br />
        <input
          {...register('nombre_sucursal')}
          className={styles.input}
          placeholder='Nombre de la Sucursal'
        ></input>
        <p className={styles.errors}>{errors.nombre_sucursal?.message}</p>
        <input
          {...register('encargado')}
          className={styles.input}
          placeholder='Persona a cargo'
        ></input>
        <p className={styles.errors}>{errors.encargado?.message}</p>
        <br />
        <font size={4} face='Work Sans' color='007200'>
          <b>Dirección:</b>
        </font>
        <br />
        <input
          {...register('estado')}
          className={styles.direccion}
          placeholder='Estado'
        ></input>
        <input
          {...register('alcaldia')}
          className={styles.direccion}
          placeholder='Alcaldía'
        ></input>
        <input
          {...register('avenida')}
          className={styles.direccion}
          placeholder='Avenida'
        ></input>
        <input
          {...register('num')}
          className={styles.direccion}
          type='number'
          placeholder='Número Ext/Int'
        ></input>
        <p className={styles.errors}>
          {errors.estado?.message} {errors.alcaldia?.message}{' '}
          {errors.avenida?.message} {errors.num?.message}
        </p>
        <input
          {...register('telefono_sucursal')}
          className={styles.input}
          placeholder='Número telefónico de la Sucursal'
        ></input>
        <p className={styles.errors}>{errors.telefono_sucursal?.message}</p>
        <br />
        <font size={4} face='Work Sans' color='007200'>
          <b>Horario de atención</b>
          <br />
          <div className={styles.checkContainer}>
            <div>
              <p className={styles.dia}>Lunes</p>
              <br />
              <b>Desde:</b>
              <select
                {...register('abierto_lunes')}
                className={styles.mini_input}
              >
                {horarioOption.map(h => {
                  return (
                    <option key={h} value={h}>
                      {h}
                    </option>
                  )
                })}
              </select>
              <br />
              <b>Hasta:</b>
              <select
                {...register('cierre_lunes')}
                className={styles.mini_input}
              >
                {horarioOption.map(h => {
                  return (
                    <option key={h} value={h}>
                      {h}
                    </option>
                  )
                })}
              </select>
              <br />
            </div>

            <div>
              <p className={styles.dia}>Martes</p>
              <br />
              <b>Desde:</b>
              <select
                {...register('abierto_martes')}
                className={styles.mini_input}
              >
                {horarioOption.map(h => {
                  return (
                    <option key={h} value={h}>
                      {h}
                    </option>
                  )
                })}
              </select>
              <br />
              <b>Hasta:</b>
              <select
                {...register('cierre_martes')}
                className={styles.mini_input}
              >
                {horarioOption.map(h => {
                  return (
                    <option key={h} value={h}>
                      {h}
                    </option>
                  )
                })}
              </select>
              <br />
            </div>

            <div>
              <p className={styles.dia}>Miércoles</p>
              <br />
              <b>Desde:</b>
              <select
                {...register('abierto_miercoles')}
                className={styles.mini_input}
              >
                {horarioOption.map(h => {
                  return (
                    <option key={h} value={h}>
                      {h}
                    </option>
                  )
                })}
              </select>
              <br />
              <b>Hasta:</b>
              <select
                {...register('cierre_miercoles')}
                className={styles.mini_input}
              >
                {horarioOption.map(h => {
                  return (
                    <option key={h} value={h}>
                      {h}
                    </option>
                  )
                })}
              </select>
              <br />
            </div>

            <div>
              <p className={styles.dia}>Jueves</p>
              <br />
              <b>Desde:</b>
              <select
                {...register('abierto_jueves')}
                className={styles.mini_input}
              >
                {horarioOption.map(h => {
                  return (
                    <option key={h} value={h}>
                      {h}
                    </option>
                  )
                })}
              </select>
              <br />
              <b>Hasta:</b>
              <select
                {...register('cierre_jueves')}
                className={styles.mini_input}
              >
                {horarioOption.map(h => {
                  return (
                    <option key={h} value={h}>
                      {h}
                    </option>
                  )
                })}
              </select>
              <br />
            </div>

            <div>
              <p className={styles.dia}>Viernes</p>
              <br />
              <b>Desde:</b>
              <select
                {...register('abierto_viernes')}
                className={styles.mini_input}
              >
                {horarioOption.map(h => {
                  return (
                    <option key={h} value={h}>
                      {h}
                    </option>
                  )
                })}
              </select>
              <br />
              <b>Hasta:</b>
              <select
                {...register('cierre_viernes')}
                className={styles.mini_input}
              >
                {horarioOption.map(h => {
                  return (
                    <option key={h} value={h}>
                      {h}
                    </option>
                  )
                })}
              </select>
              <br />
            </div>

            <div>
              <p className={styles.dia}>Sábado</p>
              <br />
              <b>Desde:</b>
              <select
                {...register('abierto_sabado')}
                className={styles.mini_input}
              >
                {horarioOption.map(h => {
                  return (
                    <option key={h} value={h}>
                      {h}
                    </option>
                  )
                })}
              </select>
              <br />
              <b>Hasta:</b>
              <select
                {...register('cierre_sabado')}
                className={styles.mini_input}
              >
                {horarioOption.map(h => {
                  return (
                    <option key={h} value={h}>
                      {h}
                    </option>
                  )
                })}
              </select>
              <br />
            </div>

            <div>
              <p className={styles.dia}>Domingo</p>
              <br />
              <b>Desde:</b>
              <select
                {...register('abierto_domingo')}
                className={styles.mini_input}
              >
                {horarioOption.map(h => {
                  return (
                    <option key={h} value={h}>
                      {h}
                    </option>
                  )
                })}
              </select>
              <br />
              <b>Hasta:</b>
              <select
                {...register('cierre_domingo')}
                className={styles.mini_input}
              >
                {horarioOption.map(h => {
                  return (
                    <option key={h} value={h}>
                      {h}
                    </option>
                  )
                })}
              </select>
              <br />
            </div>
          </div>
        </font>
        <button type='submit' className={styles.btnSign}>
          <font size='3' face='Work Sans'>
            <b>✚ Registrar Sucursal</b>
          </font>
        </button>
      </form>
    </>
  )
}
