import { useEffect, useState } from "react"

function App() {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const [seconds, setSeconds] = useState(0)

  function startTimer() {
    let id = setInterval(() => { setSeconds(prev => prev + 1) }, 1000)
    return () => { clearInterval(id) }
  }

  useEffect(startTimer, [])


  useEffect(() => {
    console.log("Il valore di A è stato modificato, ora vale: ", a)
    document.title = "A"
  }, [a])
  useEffect(() => {
    console.log("Il valore di B è stato modificato, ora vale: ", b)
    document.title = "B"
  }, [b])

  return (
    <>
      <h1>{seconds} s</h1>
      <h1 onClick={() => setA(a + 1)}>Conteggio A: {a}</h1>
      <h1 onClick={() => setB(b + 1)}>Conteggio B: {b}</h1>
    </>
  )
}
export default App