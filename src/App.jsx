import { useState } from "react";
import Error from "./components/Error";
import Header from "./components/Header";
import Login from "./components/Login";
import Mensaje from "./components/Mensaje";
import Table from "./components/Table";

const App = () => {

  const [error, setError] = useState(false);
  const [usuario, setUsuario] = useState({})
  const [mensaje, setMensaje] = useState("")

  const acceso = (email, password) => {
    console.log("hola")
    const url = "http://localhost:8080/Skirt/Login";
    const data = {
      "email": email,
      "password": password
    }
    fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json()
      })
      .then(data => {
        if (data.codigo === 200) {
          sessionStorage.setItem('codigo', JSON.stringify({ "codigo": data.codigo }));
          setUsuario(JSON.parse(sessionStorage.getItem('codigo')).codigo)
        } else {
          setError(true);
        }
      })
      .catch(() => {
        setMensaje("No funciona el servidor");
      })
  }
  
  return (
    <>
      <Header 
        usuario={usuario}
      />
      {JSON.parse(sessionStorage.getItem('codigo'))
        ?
        <>
          <Table />
        </>
        :
        <>
          {!error
            ? null
            : <Error>No son correctos sus datos o <Mensaje>{mensaje}</Mensaje></Error>}
          <Login
            acceso={acceso}
          />
        </>}

    </>
  )
}

export default App