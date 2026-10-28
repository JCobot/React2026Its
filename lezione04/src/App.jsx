import Figlio1 from "../components/Figlio1"
import useUser from "../hooks/useUser"

function App() {

  const {user} = useUser()
  
  return (
    <>
      <h1>Ciao {user}</h1>
      <button>Cliccami</button>
      <Figlio1 />
    </>
  )
}

export default App
