import { useRef, useState } from "react"


export default function ListaProdotti(
  { prodotti, dispatch }
) {
  const inputRef = useRef()
  return (
    <div>
      <h1>Prodotti:</h1>
      <input ref={inputRef} />
      <button onClick={() => dispatch({
        type: "addProdotto",
        prodotto: inputRef.current.value
      })}>Aggiungi</button>

      <ul>
        {prodotti.map(x => <>
          <li>
            {x}
            <button onClick={() => dispatch({
              type: "addCarrello",
              prodotto: x
            })}>+</button>
            <button onClick={() => dispatch({
              type: "removeProdotto",
              prodotto: x
            })}>X</button>
          </li>
        </>)}
      </ul>
    </div>
  )
}