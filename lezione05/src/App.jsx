import { useReducer } from "react"
import Carrello from "./components/Carrello"
import ListaProdotti from "./components/ListaProdotti"

function App() {

  function reducer(prev, action) {
    switch (action.type) {
      case "addProdotto":
        if (!prev.prodotti.includes(action.prodotto)) // evita i doppioni
          prev.prodotti.push(action.prodotto)
        return { ...prev }
      case "removeProdotto":
        const next = prev.prodotti.filter(x => x != action.prodotto)
        return { ...prev, prodotti: next }
      case "addCarrello":
        if (!prev.carrello.map(x => x.nome).includes(action.prodotto)) // evita i doppioni
          prev.carrello.push({ nome: action.prodotto, quantita: 1 })
        return { ...prev }
      case "removeCarrello":
        const nextC = prev.carrello.filter(x => x.nome != action.prodotto)
        return { ...prev, carrello: nextC }
      case "incCarrello":
      //TODO
      case "decCarrello":
      //TODO
      default:
        return prev
    }
  }

  const [state, dispatch] = useReducer(reducer,
    {
      prodotti: [],
      carrello: []
    }
  )

  return (
    <>
      <ListaProdotti
        prodotti={state.prodotti}
        dispatch={dispatch} />
      <Carrello
        carrello={state.carrello}
        dispatch={dispatch} />
    </>
  )
}

export default App
