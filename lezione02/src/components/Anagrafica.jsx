import { useState } from "react"

function Anagrafica() {

  const [anagrafica, setAnagrafica] = useState([])
  const [persona, setPersona] = useState({})

  function handleKeys(e) {
    let value = e.target.value
    let key = e.target.name
    if (e.target.type == "number")
      value = parseInt(value)
    setPersona({ ...persona, [key]: value })
  }

  function addPerson() {
    setAnagrafica([...anagrafica, persona])
  }

  // Aggiungere all'anagrafica la possibilità di salvare le persone!
  // premendo un bottone aggiungi, come vavevamo fatto nell'esercizio TodoList

  return (
    <>
      {anagrafica.length > 0
        ? anagrafica.map(x => <li>{x.nome} - {x.cognome} - {x.eta}</li>)
        : <h1>Nessuna persona in anagrafica!</h1>}

      <input
        name="nome"
        onChange={handleKeys} />
      <input
        name="cognome"
        onChange={handleKeys} />
      <input
        name="eta"
        type="number"
        onChange={handleKeys} />
      <button onClick={addPerson}>Aggiungi</button>
    </>
  )
}

export default Anagrafica