import { useState } from "react";
import Header from "./components/Header";
import Opciones from "./components/Opciones";
import Login from "./components/Login"
import Registrar from "./components/Registrar"

const App = () => {

  const [error, setError] = useState(false);
  const [usuario, setUsuario] = useState({})
  const [mensaje, setMensaje] = useState("")
  const [opciones, setOpciones] = useState(false);
  
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
            (<Login />)
          }
      </div>
    </div>

  )
}

export default App