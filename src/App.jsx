import Header from "./components/Header";
import Login from "./components/Login";
import Table from "./components/Table";

const App = () => {
  return (
    <>

      {8 > 9
        ?
        <>
          <Header />
          <Table />
        </>
        :
        <>
          <Header />
          <Login />
        </>}

    </>
  )
}

export default App