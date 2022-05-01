import MainHead from '../MainHead'
import styles from '../../styles/Promotor.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Checkbox, FormControl } from '@mui/material'



export default function RegistrarSucursales () {
  return (
    <>
        <center>
        <form className={styles.registrarSucursales}>
        
        <font size={5} face="Work Sans" color="007200"><b>Registrar Sucursal</b></font>
        <br/>
        <input className={styles.input} placeholder="Nombre de la Sucursal"></input>
        <br/>
        <font size={4} face="Work Sans" color="007200"><b>Dirección:</b></font>
        <br/>
        <input className={styles.direccion} placeholder="País"></input>
        <input className={styles.direccion} placeholder="Estado"></input>
        <input className={styles.direccion} placeholder="Avenida"></input>
        <input className={styles.direccion} placeholder="Número Ext/Int"></input>
        <input className={styles.input} placeholder="Número telefónico de la Sucursal"></input>
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
        </center>
    </>
  )
}