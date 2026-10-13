import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'

function App() {

  // let count = 0
  const [count, setCount] = useState(0)

  function increase() {
    // count = count + 1
    setCount(count + 1)
  }

  return (
    <>
      <NavBar />
      <button onClick={increase}>{count}</button>
      <h1>Ciao</h1>
      <p>Questa è la nostra prima app react</p>
      <div>
        <label>Google:</label>
        <a href='https://google.com'>google.com</a>
      </div>
    </>
  )
}

export default App
