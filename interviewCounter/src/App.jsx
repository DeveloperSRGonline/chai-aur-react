import React from 'react'
import { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)

  const addValue = () => {
    // ye question hai ki ab kya hoga bina run karen batana hai
    setCounter((prev) => prev + 1)

    // yaha kya hota hai mai ek hi kaam ko repeat kar raha hu tooh react batch update ke time ek hi kaam karege only 
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
        onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button onClick={removeValue}>remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App