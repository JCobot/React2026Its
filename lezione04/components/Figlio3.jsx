import useTheme from "../hooks/useTheme"
import Figlio4 from "./Figlio4"

function Figlio3() {

  const {changeTheme} = useTheme()

  return (
    <>
      <h1>Filgio 3</h1>
      <button onClick={changeTheme}>Cambia tema</button>
      <Figlio4 />
    </>
  )
}

export default Figlio3