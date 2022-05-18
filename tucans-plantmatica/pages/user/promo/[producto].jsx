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
import uid from 'tiny-uid'
import Button from '@mui/material/Button'

export default function Producto({ producto, sucursales, arrayEtiquetas }){
    const [renderProduct, setRenderProduct] = useState(producto)
    const [sucursalesRender, setSucursalesRender] = useState(sucursales)

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
                <p>{producto.descripcion}</p>
                <p>${producto.costo_fisico} MXN</p>
                Advertencias
                {producto.advertencias.map(a=>{
                    return(
                        <>
                        <li>{a}</li>
                        </>
                    )
                })}
                Sucursales
                <ul>
                    {producto.disponibilidad_sucursales.map(s => {
                    return (
                        <p>`Nombre`<br/>
                        `Dirección`<br/>
                        Más Información</p>
                        
                    )
                    })}
                </ul>
                ----------------
                <ul>
                    {producto.etiquetas.map(e => {
                    return <li key={uid()}> {e} </li>
                    })}
                </ul>              
                
                </aside>
                <aside className={styles.asideFicha}>

                <font size={6} face='Work Sans' color='007200'>
                    <h1 className={styles.nombreProducto}>{producto.nombre}</h1>
                </font>
                </aside>
            </>
            </div>
            }

            <div>
            <font size={6} face='Work Sans' color='007200'><p>Comentarios:</p></font>
            <input className={styles.inputComentario} placeholder='ola'></input>
            <Button size='large' variant='contained' color='success'>
                        Subir
            </Button>
            
            <div className={styles.comtainer}>

            <div className={styles.comentarioRender}>
            <h2>`Nombre de Usuario o Promotor`</h2>
            <h3>`Fecha`</h3>
            `Texto`
            </div>

            <div className={styles.comentarioRender}>
            <h2>`Nombre de Usuario o Promotor`</h2>
            <h3>`Fecha`</h3>
            `Texto`
            </div>

            </div>


            </div>



            </div>


        </>
    )
}

export async function getServerSideProps({ params, query }){
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