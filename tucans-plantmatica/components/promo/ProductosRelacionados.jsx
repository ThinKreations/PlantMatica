import React from 'react'
import styles from '../../styles/Promotor.module.css'

export default function ProductosRelacionados ({ productos, only_producto }) {
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

        {productos.prod_con1.length > 0
          ? productos.prod_con1.map(pc => {
              return (
                <div key={pc._id}>
                  {pc._id != only_producto._id ? (
                    <div className={styles.productoRelacionadoFicha}>
                      <p>
                        <b>
                          <font size={5} face='Work Sans' color='007200'>
                            {pc.nombre}{' '}
                          </font>
                        </b>
                      </p>

                      <p>
                        <b>
                          <font size={3} face='Work Sans'>
                            Por: `{pc.referencia_promotor.nombre_publico}`
                          </font>
                        </b>
                      </p>
                      <p>
                        <b>
                          <font size={3} face='Work Sans'>
                            {pc.descripcion.substr(0, 75)}...
                          </font>
                        </b>
                      </p>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              )
            })
          : 'No se encontraron productos relacionados'}

        {productos.prod_con2.length > 0
          ? productos.prod_con2.map(pc => {
              return (
                <div key={pc._id}>
                  {pc._id != only_producto._id ? (
                    <div className={styles.productoRelacionadoFicha}>
                      <p>
                        <b>
                          <font size={5} face='Work Sans' color='007200'>
                            {pc.nombre}{' '}
                          </font>
                        </b>
                      </p>

                      <p>
                        <b>
                          <font size={3} face='Work Sans'>
                            Por: `{pc.referencia_promotor.nombre_publico}`
                          </font>
                        </b>
                      </p>
                      <p>
                        <b>
                          <font size={3} face='Work Sans'>
                            {pc.descripcion.substr(0, 75)}...
                          </font>
                        </b>
                      </p>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              )
            })
          : 'No se encontraron productos relacionados'}
        {productos.prod_con3.length > 0
          ? productos.prod_con3.map(pc => {
              return (
                <div key={pc._id}>
                  {pc._id != only_producto._id ? (
                    <div className={styles.productoRelacionadoFicha}>
                      <p>
                        <b>
                          <font size={5} face='Work Sans' color='007200'>
                            {pc.nombre}{' '}
                          </font>
                        </b>
                      </p>

                      <p>
                        <b>
                          <font size={3} face='Work Sans'>
                            Por: `{pc.referencia_promotor.nombre_publico}`
                          </font>
                        </b>
                      </p>
                      <p>
                        <b>
                          <font size={3} face='Work Sans'>
                            {pc.descripcion.substr(0, 75)}...
                          </font>
                        </b>
                      </p>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              )
            })
          : 'No se encontraron productos relacionados'}
      </center>
    </div>
  )
}
