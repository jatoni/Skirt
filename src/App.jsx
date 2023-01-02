import { useState } from "react";
import Header from "./components/Header";
import Opciones from "./components/Opciones";
import Login from "./components/Login"
import Registrar from "./components/Registrar"
import Datos from "./components/Datos"

const App = () => {

  const [error, setError] = useState(false);
  const [mensaje, setMensaje] = useState("")
  const [opciones, setOpciones] = useState(false);

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
            (<Registrar />)
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