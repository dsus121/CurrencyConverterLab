import { useState, useEffect, useReducer } from 'react'
import './App.css'
import Converter from './Converter'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

      </div>
      <h1>Let's convert some currencies!</h1>
      <div>
        <Converter />
        <p>
          maybe something will go in here
        </p>
      </div>
      <p>
      </p>
    </>
  )
}

export default App
