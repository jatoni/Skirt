import { useState } from "react";
import Header from "./components/Header";
import Opciones from "./components/Opciones";
import Login from "./components/Login"
import Registrar from "./components/Registrar"
import Datos from "./components/Datos"
import Error from "./components/Error";

const App = () => {
  const [mensaje, setMensaje] = useState("")
  const [opciones, setOpciones] = useState(false);
  const [log, setLog] = useState(false);
  const [error, setError] = useState(false);

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
    const { codigo, mensaje } = resultado;
    if (codigo === 200) {
      setLog(true);
      setMensaje(mensaje);
      return;
    }else{
      setError(true);
    }

  }

  return (
    <div>
      <Header />
      {!log || !mensaje ?
        <>
          <Opciones
            setOpciones={setOpciones}
            opciones={opciones}
          />
          <div className="w-full">
            {
              opciones ?
                (<Registrar />)
                :
                (
                  <>
                    {error &&
                      <Error>Email or Password incorrectos</Error>
                    }
                    <Login
                      logIn={logIn}
                    />
                  </>
                )
            }
          </div>
        </>
        :
        <Datos
          mensaje={mensaje}
        />
      }
    </div>
  )
}

export default App