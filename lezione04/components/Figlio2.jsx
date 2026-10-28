import useTheme from "../hooks/useTheme"
import Figlio3 from "./Figlio3"

function Figlio2() {

  const {theme} = useTheme()

  return (
    <>
      <h1>Filgio 2</h1>
      <p>Sto usando il tema {theme}</p>
      <Figlio3 />
    </>
  )
}

export default Figlio2