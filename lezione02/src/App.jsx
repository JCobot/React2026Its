import { useState } from "react"
import "./App.css"
import TodoList from "./components/TodoList"

function App() {
  const [n, setN] = useState(0)

  function handleClick() {
    for (let i = 0; i < 10; i++) {
      // setN(n+1) // n non cambia durante il for!
      setN(prev => prev + 1)
    }
  }

  const [light, setLight] = useState(false) // gestisce "ON" "OFF"

  function toggleLight() {
    setLight(!light)
  }

  let _light = light ? "ON" : "OFF"

  return (
    <>
      <TodoList></TodoList>
      <h1>ciao</h1>
      <button onClick={handleClick}>{n}</button>

      <span
        id="toggler"
        className={light ? "acceso" : ""}
        onClick={toggleLight}>
        <div className="thumb"></div>
      </span>
    </>
  )
}

export default App
