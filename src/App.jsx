import { useState } from "react";
import Header from "./components/Header";
import Opciones from "./components/Opciones";
import Login from "./components/Login"
import Registrar from "./components/Registrar"
import Datos from "./components/Datos"

const App = () => {

  const [error, setError] = useState(false);
  const [usuario, setUsuario] = useState({
    id: "",
    nombre: "",
  })
  const [mensaje, setMensaje] = useState("")
  const [opciones, setOpciones] = useState(false);
  const [login, setLgoin] = useState(true);

  return (
    <div>
      <Header />
      {
        login ?
          <>
            <Datos
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
                  (<Registrar />)
                  :
                  (<Login />)
              }
            </div>
          </>
      }

    </div>
  )
}

export default App