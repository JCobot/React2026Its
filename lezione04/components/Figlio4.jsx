import { useContext } from "react"
import { contesto1 } from "../src/App"

function Figlio4() {

  const {user} = useContext(contesto1)

  return (
    <>
      <h1>Filgio 4</h1>
      <p>Posso vedere l'user {user}</p>
    </>
  )
}

export default Figlio4