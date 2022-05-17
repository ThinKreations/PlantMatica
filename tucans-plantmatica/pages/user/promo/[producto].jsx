import MainHead from '../../../components/MainHead'
import LayoutMenu from '../../../components/LayoutMenu'
import MenuPromo from '../../../components/promo/MenuPromo'
import { traerEtiquetas } from '../../api/fichas-http'
import { useEffect, useState } from 'react'
import styles from '../../../styles/Promotor.module.css'
import { Alert } from '@mui/material'
import { Card } from '@mui/material'
import { CardContent } from '@mui/material'
import { getInfoPromotor } from '../../api/promotor-https'
import Image from 'next/image'

export default function Producto({ producto, sucursales, arrayEtiquetas }){
    const [renderProduct, setRenderProduct] = useState(producto)
    

    return(
        <>
            <MainHead tituloPestana={producto.nombre}/>
            <LayoutMenu/>
            <MenuPromo/>

            <div className={styles.container}>

            {!Producto ?             
            <Alert>
                Ha ocurrido un error, recarga la página.
            </Alert>
            :
            <div className={styles.fichaUnica}>
            
                                <>
                                
              <aside className={styles.asideFicha}>
              <div
                style={{ marginTop: '20px', borderRadius: '4px' }}
                className={styles.fichaImagen}
                >
                <Image
                    src={producto.imagen}
                    className={styles.imagen_cuadrada}
                    width={164}
                    height={164}
                />
                
                
                


                </div>

                {producto.advertencias.map(a=>{
                    return(
                        <>
                        <li>{a}</li>
                        </>
                    )
                })}
                
                <p>{producto.descripcion}</p>
                <p>${producto.costo_fisico} MXN</p>
                </aside>
                <aside className={styles.asideFicha}>

                <font size={6} face='Work Sans' color='007200'>
                    <h1 className={styles.nombreProducto}>{producto.nombre}</h1>
                </font>

                </aside>
                            
            </>
            
            </div>

            }
            </div>


        </>
    )
}

export async function getServerSideProps({ params }){
    const res = await fetch(
      `https://plantmatica-api.vercel.app/product/show/${params.producto}`
      
    )
    const {producto} = await res.json()
    console.log(producto)
    //peticion servidor
    return {
        props: {
            producto, notFound: false
        }
    }
    
}