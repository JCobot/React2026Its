

function Catalog() {
  return (
    <section>
      <h1>Catalogo prodotti</h1>
      <Card name="Pollo" price={3.99} gian="ciao" />
      <Card name="Insalata" price={122} />
      <Card name="Riso" price={2.77} />
      <Card />
    </section>
  )
}

function Card({ name, price }) {

  let iva = (price ?? 0) * 0.22 / 1.22

  return (
    <div>
      <h1>{name ?? "Error"}</h1>
      <h2>Prezzo: {price ?? "-"} €</h2>
      <h3>IVA: {iva} €</h3>
      <p>descrizione</p>
    </div>
  )
}

export default Catalog