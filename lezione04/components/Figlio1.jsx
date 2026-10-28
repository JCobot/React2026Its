import useUser from "../hooks/useUser"
import Figlio2 from "./Figlio2"

function Figlio1() {

  const {setUser} = useUser()

  return (
    <>
      <h1>Filgio 1</h1>
      <input onChange={e => setUser(e.target.value)} />
      <Figlio2 />
    </>
  )
}

export default Figlio1