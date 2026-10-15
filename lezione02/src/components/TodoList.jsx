import { useState } from "react"

function TodoList() {
  const [list, setList] = useState(["mela", "pera"])
  const [prodotto, setProdotto] = useState("")
  const [filtro, setFiltro] = useState("")
  
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

  // dato filtro, ciò che l'utente ha scritto nella casella di testo per filtrare i dati
  // dato list che contiene tutti i prodotti
  // scrivere l'operazione di filtraggio che scriverà in filter solo i prodotti filtrati!
  // const filtered = list.filter(x => x.includes(filtro)) // accetta una funzione che ritorna vero o falso
  const filtered = list.filter(x => x.startsWith(filtro)) // accetta una funzione che ritorna vero o falso

  return (
    <>
      <h1>Aggiungi:</h1>
      <input value={prodotto} onChange={e => setProdotto(e.target.value)} />
      <button onClick={addProduct}>Inserisci</button>
      <h1>Filtra:</h1>
      <input onChange={e => setFiltro(e.target.value)} />
      
      <h1>Prodotti filtrati:</h1>
      <ul>
        {filtered.map((x, i) => <ListItem key={i} prodotto={x} remove={removeProduct} />)}
      </ul>

      <h1>Tutti i prodotti:</h1>
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