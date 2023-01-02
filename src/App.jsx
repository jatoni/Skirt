import { useState, useEffect } from "react";
import Header from "./components/Header";
import Opciones from "./components/Opciones";
import Login from "./components/Login";
import Registrar from "./components/Registrar";
import Mensaje from "./components/Mensaje"
import Datos from "./components/Datos"

const App = () => {
  const [mensaje, setMensaje] = useState("")
  const [opciones, setOpciones] = useState(false);
  const [log, setLog] = useState(false);
  const [usuario, setUsuario] = useState(localStorage.getItem('usuario') ?? "");
  const [usuarioCreado, setUsuarioCreado] = useState(false);

  useEffect(() => {
    localStorage.setItem('usuario', usuario ?? "");
  },[usuario])

  const logIn = async (data) => {
    const url = "http://localhost:8080/Skirt/Login";
    const respuesta = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    const resultado = await respuesta.json();
    console.log(resultado);
    const { codigo, mensaje } = resultado;
    if (codigo == 200) {
      setLog(true);
      setUsuario(mensaje);
      return;
    } else {
      setLog(false);
      setMensaje(mensaje);
      return 
    }

  }

  const registarUsuario = async (data) => {
    const url = "http://localhost:8080/Skirt/Create";
    const respuesta = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    const resultado = await respuesta.json();
    if (resultado.codigo == 200) {
      setUsuarioCreado(true);
      setMensaje(`${resultado.mensaje}`);
      setOpciones(false);
    } else {
      setUsuarioCreado(false);
    }
  }

  const cerrarSession = () => {
    setUsuario("");
  }

  return (
    <div>
      <Header />
      {
        usuario ?
          <>
            <Datos
            cerrarSession={cerrarSession}
              usuario={usuario}
            />
          </>
          :
          <>
            <Opciones
              setOpciones={setOpciones}
              opciones={opciones}
            />
            <div className="w-full">
              {
                opciones ?
                  (<Registrar 
                    registarUsuario={registarUsuario}
                  />)
                  :
                  (<Login
                    logIn={logIn}
                    mensaje={mensaje}
                  />)
              }
            </div>
          </>
      }
    </div>
  )
}

export default App