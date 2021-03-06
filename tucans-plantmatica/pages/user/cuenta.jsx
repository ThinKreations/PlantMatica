import React, { useEffect, useState } from 'react'
import Router from "next/router";
import LayoutMenu from "../../components/LayoutMenu";
import Footy from "../../components/footy";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { validarToken } from '../api/request';
import { actualizarUsuario, getUsuario } from '../api/user-https';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material';
import Alert from '@mui/material/Alert'
import MainHead from '../../components/MainHead';

export default function Index() {

  //Hook para vista dependiendo xd
  const [verUsuario, setVer] = useState(true);
  const [datUsuario, setDatUsuario] = useState();
  const [pass, setPass] = useState();
  const [user, setUser] = useState();
  const [estado, setEstado] = useState();
  const [sexo, setSexo] = useState();
  const [edad, setEdad] = useState();

  const cambiarEstado = () => {
    verUsuario ? setVer(false) : setVer(true);
  }

  const traerUsuario = async () => {
    if (!datUsuario) {
      const id = localStorage.getItem('id');
      const usuario = await getUsuario(id);
      setDatUsuario(usuario.usuario);
    } else {
      setEstado(datUsuario.estadoMx);
      setSexo(datUsuario.sexo)
      setUser(datUsuario.username);
      setEdad(datUsuario.edad);
    }
  }

  const editarUsuario = async () => {
    event.preventDefault();
    const id = localStorage.getItem('id');
    await actualizarUsuario(id, {
      estadoMx: estado,
      sexo,
      username: user,
      password: pass,
      edad
    });

  }

  const sessionControl = async () => {
    const valid = await validarToken();
    if (valid === false) {
      swal({
        title: 'Inicia sesion.',
        text: 'Tu sesion expiro, vuelve a iniciar sesion para realizar esta operacion.',
        icon: 'info',
        button: 'Ok',
        timer: '3000'
      });
      Router.push('/session/IniciarSesion');
    }
  }

  useEffect(() => {
    sessionControl();
    traerUsuario();
  }, [datUsuario]);

  return (
    <div>
      <MainHead tituloPestana="Cuenta" />
      <LayoutMenu />
      <style jsx>{
        `/* CAMBIAR VALORES AL BODY Y AL FORMULARIO. LINEA 7-18 */
                body {
                  font-family: 'Nunito', sans-serif;
                  color: #384047;
                  background-color: #ffffff;
                }
                
                form {
                  max-width: 600px;
                  margin: 10px auto;
                  padding: 10px 20px;
                  background-color: rgb(255, 255, 255);
                }
                
                /* Aqui termina */
                
                h1 {
                  text-align: center;
                  color: var(--main-color);
                }
                
                button {
                  border: 0;
                  border-radius: 15px;
                  margin: 20px 0;
                  padding: 10px 0;
                  color: white;
                  background-color: var(--main-color);
                  cursor: pointer;
                  width: 100%;
                  font-size: 20px;
                  transition: 0.3s;
                }
                button:hover{
                    transform: scale(1.05, 1.05);
                }
                
                fieldset {
                  border: none;
                  margin: 10px;
                }
                
                .number {
                  background-color: var(--main-color);
                  height: 30px;
                  width: 30px;
                  line-height: 30px;
                  border-radius: 100%;
                  color: #fff;
                  margin-right: 4px;
                  text-align: center;
                  display: inline-block;
                  font-size: 0.8em;
                }
                
                legend {
                  font-size: 1.4em;
                }
                
                input[type="text"], input[type="email"], input[type="number"], input[type="password"], select {
                  border: none;
                  font-size: 16px;
                  background: #f3f3f3;
                  padding: 13px;
                  height: auto;
                  width: 100%;
                }
                
                input[type="radio"] {
                  margin: 0 4px 8px 10px;
                }
                
                label {
                  display: block;
                  margin: 5px;
                }
                
                label.light {
                  display: inline-block;
                  font-weight: 300;
                }
                
                .modal {
                  display: none;
                  z-index: 100;
                }
                
                .modal-bg {
                  opacity: 0.5;
                  -webkit-opacity: 0.5;
                  -moz-opacity: 0.5;
                  display: none;
                  height: 100%;
                  width: 100%;
                  background-color: #fff;
                  z-index: 1000;
                  top: 0;
                  left: 0;
                  position: fixed;
                }
                
                .modal-content {
                  background-color: white;
                  box-shadow: 0 0 20px 0 #222;
                  -webkit-box-shadow: 0 0 20px 0 #222;
                  -moz-box-shadow: 0 0 20px 0 #222;
                  display: none;
                  /*height: 240px;*/
                  left: 50%;
                  margin: -120px 30px 0 -160px;
                  padding: 10px;
                  position: absolute;
                  top: 50%;
                  /*width: 320px;*/
                  z-index: 1000;
                }
                
                .modal.active, .modal-content.active, .modal-bg.active {
                  display: block;
                }
                
                ul {
                  background-color: #000000;
                }
                
                li {
                  list-style: none;
                }
                
                span {
                  font-weight: 300;
                }
                
                @media screen and (min-width: 480px) {
                  form {
                    max-width: 480px;
                  }
                }
                
                /* CODIGO PARA LA FOTO. EL DE ARRIBA SOLO ES PARA EL FORMULARIO */
                
                :root {
                  --width: 300px;
                }
                
                .bio-photo {
                  border-radius: 50%;
                  border: 20px solid var(--hover-color);
                  display: block;
                  width: var(--width);
                  height: auto;
                }
                
                .img-hover {
                  position: relative;
                  width: 100%;
                  left: 15%;
                }
                
                .overlay {
                  position: absolute;
                  top: 0;
                  bottom: 0;
                  left: 0;
                  right: 0;
                  width: var(--width);
                  opacity: 0;
                  transition: .5s ease;
                  background: rgba(255, 253, 253, 0.836);
                  border-radius: 50%;
                  border: 20px solid #15c040;
                }
                
                .img-hover:hover .overlay {
                  opacity: 1;
                }
                
                .hover-text {
                  color: var(--main-color);
                  font-size: 3em;
                  font-family: Ubuntu;
                  font-weight: bold;
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  -ms-transform: translate(-50%, -50%);
                  text-align: center;
                }`
      }</style>
      <div className="form-container">
        {
          !datUsuario ? <Alert variant="outlined" severity="info">
            Cargando...
          </Alert> : <form id="form-complete" action="index.html">
            <h1>{`Tu Informacion `}</h1>
            <fieldset>
              <Button onClick={cambiarEstado} variant="outlined" color="success">
                {!verUsuario ? <RemoveRedEyeIcon color="succes" /> : <EditIcon color="succes" />}
                {!verUsuario ? "Visualizar datos de la cuenta" : "Editar cuenta"}
              </Button>
            </fieldset>
            {/* LOS FIELDSET SON LOS NUMEROTES GRANDES QUE SE VEN XDDD */}
            <fieldset>
              <legend><span className="number">1</span>{`Informacion Personal`}</legend>
              <label htmlFor="genero">{`Sexo:`}</label>

              {
                !verUsuario ? <select onChange={e => setSexo(e.target.value)} className="sexo" name="sexo">
                  <option value="Masculino" >Masculino</option>
                  <option value="Femenino" >Femenino</option>
                  <option value="Prefiero no decirlo">Prefiero no decirlo</option>
                </select> : <input type="text" name="sexo" defaultValue={datUsuario.sexo} id="sexo" readOnly={verUsuario} required />
              }

              <label htmlFor="edad">{`Edad:`}</label>
              <input onChange={e => setEdad(e.target.value)} type="number" name="edad" defaultValue={datUsuario.edad} id="edad" readOnly={verUsuario} required />
            </fieldset>
            {/* COMIENZA OTRO FIELDSET. AHORA ES EL DE LA LOCALIZACION  */}

            <fieldset>
              <legend><span className="number">2</span>{`Localizacion`}</legend>
              <label htmlFor="state">{`Estado`}</label>
              {
                !verUsuario ?
                  <select onChange={e => setEstado(e.target.value)} className="sexo" name="estado">
                    <option value="Prefiero no decirlo">Prefiero no decirlo...</option>
                    <option value="Resido fuera del pais">Resido fuera del pais</option>
                    <option value="Aguascalientes">Aguascalientes</option>
                    <option value="Baja California">Baja California</option>
                    <option value="Baja California Sur">Baja California Sur</option>
                    <option value="Campeche">Campeche</option>
                    <option value="Chiapas">Chiapas</option>
                    <option value="Chihuahua">Chihuahua</option>
                    <option value="CDMX">Ciudad de M??xico</option>
                    <option value="Coahuila">Coahuila</option>
                    <option value="Colima">Colima</option>
                    <option value="Durango">Durango</option>
                    <option value="Estado de M??xico">Estado de M??xico</option>
                    <option value="Guanajuato">Guanajuato</option>
                    <option value="Guerrero">Guerrero</option>
                    <option value="Hidalgo">Hidalgo</option>
                    <option value="Jalisco">Jalisco</option>
                    <option value="Michoac??n">Michoac??n</option>
                    <option value="Morelos">Morelos</option>
                    <option value="Nayarit">Nayarit</option>
                    <option value="Nuevo Le??n">Nuevo Le??n</option>
                    <option value="Oaxaca">Oaxaca</option>
                    <option value="Puebla">Puebla</option>
                    <option value="Quer??taro">Quer??taro</option>
                    <option value="Quintana Roo">Quintana Roo</option>
                    <option value="San Luis Potos??">San Luis Potos??</option>
                    <option value="Sinaloa">Sinaloa</option>
                    <option value="Sonora">Sonora</option>
                    <option value="Tabasco">Tabasco</option>
                    <option value="Tamaulipas">Tamaulipas</option>
                    <option value="Tlaxcala">Tlaxcala</option>
                    <option value="Veracruz">Veracruz</option>
                    <option value="Yucat??n">Yucat??n</option>
                    <option value="Zacatecas">Zacatecas</option>
                  </select>
                  : <input type="text" name="estado" defaultValue={datUsuario.estadoMx} id="estado" readOnly={verUsuario} required />
              }
            </fieldset>

            {/* COMIENZA OTRO FIELDSET. AHORA ES EL DE LA CUENTA  */}
            <fieldset>
              <legend><span className="number"></span>{`Cuenta`}</legend>
              <label htmlFor="user">{`Usuario:`}</label>
              <input type="text" id="user" name="user_name" onChange={e => setUser(e.target.value)} defaultValue={datUsuario.username} readOnly={verUsuario} />
              <label htmlFor="correo">{`Correo:`}</label>
              <input type="email" name="correo" defaultValue={datUsuario.correo} readOnly={true} id="correo" required />
              <label htmlFor="correo">{`Contrase??a:`}</label>
              <input type="password" onChange={e => setPass(e.target.value)} name="password" readOnly={verUsuario} id="password" required={true} />
            </fieldset>
            {
              !verUsuario ? <button onClick={editarUsuario} type="submit">{`Editar Perfil`}</button> : ""
            }
          </form>
        }
      </div>

      
    </div>
  )
}