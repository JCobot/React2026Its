

export default function Carrello(
  { carrello, dispatch }
) {
  return (
    <div>
      <h1>Carrello:</h1>

      <ul>
        {carrello.map(x => <>
          <li>
            {x.nome}
            <button>-</button>
            {x.quantita}
            <button>+</button>
            <button onClick={() => dispatch({
              type: "removeCarrello",
              prodotto: x.nome
            })}>X</button>
          </li>
        </>)}
      </ul>
    </div>
  )
}