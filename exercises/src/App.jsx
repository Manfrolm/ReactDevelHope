import { Login } from "./components/Login"


function App() {

  const onLogin = () => {
    alert("Successful Login!")
  }

  return (
    <>
      <Login stateLogin={onLogin}/>
    </>
  )
}

export default App
