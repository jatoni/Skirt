import Header from "./components/Header";
import Login from "./components/Login";
import Table from "./components/Table";

const App = () => {
  sessionStorage.setItem('login', JSON.stringify({"correo":"juan"}));
  console.log(sessionStorage.getItem('login'))
  sessionStorage.removeItem("login")
  return (
    <>
      <Header />
      { sessionStorage.getItem('login')
        ?
        <>
          <Table />
        </>
        :
        <>
          <Login />
        </>}

    </>
  )
}

export default App