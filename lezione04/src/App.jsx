import { createContext, useState } from "react"
import Figlio1 from "../components/Figlio1"

export const contesto1 = createContext(null)

function App() {
  const [user,setUser] = useState('')

  return (
    <>
      <contesto1.Provider value={ {user,setUser} }>
        <h1>Ciao {user}</h1>
        <button>Cliccami</button>
        <Figlio1 />
      </contesto1.Provider>
    </>
  )
}

export default App
