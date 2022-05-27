import React from 'react'
import styles from '../../styles/Promotor.module.css'

export default function FichasRelacionadas ({ fichas }) {
  return (
    <div className={styles.productoRelacionadoC}>
      <center>
        <p>
          <b>
            <font size={6} face='Work Sans' color='007200'>
              Fichas relacionados:{' '}
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
                Por: 
              </font>
            </b>
          </p>
          <p>
            <b>
              <font size={3} face='Work Sans'>
                
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
                Por: 
              </font>
            </b>
          </p>
          <p>
            <b>
              <font size={3} face='Work Sans'>
                
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
                Por: 
              </font>
            </b>
          </p>
          <p>
            <b>
              <font size={3} face='Work Sans'>
               
              </font>
            </b>
          </p>
        </div>
      </center>
    </div>
  )
}
