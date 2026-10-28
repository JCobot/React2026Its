import useUser from "../hooks/useUser"


function Figlio4() {

  const {user} = useUser()

  return (
    <>
      <h1>Filgio 4</h1>
      <p>Posso vedere l'user {user}</p>
    </>
  )
}

export default Figlio4