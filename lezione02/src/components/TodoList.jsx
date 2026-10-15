import { useState } from "react"

function TodoList() {
  const [list, setList] = useState(["mela", "pera"])
  const [prodotto, setProdotto] = useState("")

  function addProduct() {

    if(list.includes(prodotto)) {
      alert("Prodotto già esisistente")
      return
    }

    if (prodotto.trim() != "")
      setList([...list, prodotto])
    setProdotto("") // fuori dall'if se ci sono solo spazi li rimuove!!!
  }

  function removeProduct(productToRemove) {
    // la condizione che preserva l'elemento è vera solo se
    // l'elemento è diverso da quello da rimuovere!!!
    const filtered = list.filter(x => x != productToRemove)
    setList(filtered)
  }

  return (
    <>
      <input value={prodotto} onChange={e => setProdotto(e.target.value)} />
      <button onClick={addProduct}>Inserisci</button>
      <ul>
        {list.map((x, i) => <ListItem key={i} prodotto={x} remove={removeProduct} />)}
      </ul>
    </>
  )
}

function ListItem({ prodotto, remove }) {
  return (
    <li>
      {prodotto}
      <button onClick={() => remove(prodotto)}>X</button>
      {/* <button onClick={remove(prodotto)}>X</button> ERRATO, lo cancella mentre lo crea*/}
    </li>
  )
}

export default TodoList