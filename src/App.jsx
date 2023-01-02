import { useState } from "react";
import Header from "./components/Header";
import Opciones from "./components/Opciones";
import Login from "./components/Login";
import Registrar from "./components/Registrar";
import Mensaje from "./components/Mensaje"

const App = () => {

  const [error, setError] = useState(false);
  const [mensaje, setMensaje] = useState("")
  const [opciones, setOpciones] = useState(false);
  const [usuarioCreado, setUsuarioCreado] = useState(false);

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
      setMensaje(`${resultado.mensaje}`)
    } else {
      setUsuarioCreado(false);
    }
  }

  return (
    <div>
      <Header />
      <Opciones
        setOpciones={setOpciones}
        opciones={opciones}
      />
      <div className="w-full">
        {
          opciones ?
            (<>
              {mensaje && <Mensaje>{mensaje}</Mensaje>}
              <Registrar
                registarUsuario={registarUsuario}
                usuarioCreado={usuarioCreado} setMensaje={setMensaje}
              />
            </>)
            :
            (<Login
              logIn={logIn}
            />)
        }
      </div>
    </div>

  )
}

export default App