import { useContext } from "react"
import Figlio2 from "./Figlio2"
import { contesto1 } from "../src/App"

function Figlio1() {

  const {setUser} = useContext(contesto1)

  return (
    <>
      <h1>Filgio 1</h1>
      <input onChange={e => setUser(e.target.value)} />
      <Figlio2 />
    </>
  )
}

export default Figlio1