import React from 'react'
import styles from '../../styles/Promotor.module.css'

export default function ProductosRelacionados ({ productos }) {
  return (
    <div className={styles.productoRelacionadoC}>
      <center>
        <p>
          <b>
            <font size={6} face='Work Sans' color='007200'>
              Productos relacionados:{' '}
            </font>
          </b>
        </p>

        <div className={styles.productoRelacionadoFicha}>
          <p>
            <b>
              <font size={5} face='Work Sans' color='007200'>
                `Nombre`{' '}
              </font>
            </b>
          </p>

          <p>
            <b>
              <font size={3} face='Work Sans'>
                Por: `{productos.referencia_promotor.nombre_publico}`
              </font>
            </b>
          </p>
          <p>
            <b>
              <font size={3} face='Work Sans'>
                `{productos.descripcion}`
              </font>
            </b>
          </p>
        </div>

        <div className={styles.productoRelacionadoFicha}>
          <p>
            <b>
              <font size={5} face='Work Sans' color='007200'>
                `Nombre`{' '}
              </font>
            </b>
          </p>

          <p>
            <b>
              <font size={3} face='Work Sans'>
                Por: `{productos.referencia_promotor.nombre_publico}`
              </font>
            </b>
          </p>
          <p>
            <b>
              <font size={3} face='Work Sans'>
                {productos.descripcion.substr(0, 75) }...
              </font>
            </b>
          </p>
        </div>


        <div className={styles.productoRelacionadoFicha}>
          <p>
            <b>
              <font size={5} face='Work Sans' color='007200'>
                `Nombre`{' '}
              </font>
            </b>
          </p>

          <p>
            <b>
              <font size={3} face='Work Sans'>
                Por: `{productos.referencia_promotor.nombre_publico}`
              </font>
            </b>
          </p>
          <p>
            <b>
              <font size={3} face='Work Sans'>
                `{productos.descripcion}`
              </font>
            </b>
          </p>
        </div>
      </center>
    </div>
  )
}
