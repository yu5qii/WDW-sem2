import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { counter } from './components/Counter.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
            <div className="title">React Counter Application</div>

            <h1 className="display">{count}</h1>

            <div className="buttons">
                <button className="inc" onClick={increment}>INCREMENT +</button>
                <button className="dec" onClick={decrement}>DECREMENT -</button>
                <button className="reset" onClick={reset}>RESET</button>
            </div>


        </div>
    </>
  )
}

export default App
