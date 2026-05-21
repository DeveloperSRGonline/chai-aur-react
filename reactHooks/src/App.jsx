import React, { useState } from 'react'

const App = () => {
  // let counter = 5;

  const [counter,setCounter] = useState(0)

  // ui updation ko react control karta hai is liye hook ko use karte hai react
  // usestate hook used topropogate the changes to the dom 

  const addValue = () => {
    // console.log('Value added',Math.random())
    // counter = counter + 1;
    setCounter(counter + 1)
    console.log('clicked',counter)
  }
  
  const removeValue = () => {
    if(counter <= 0) {
      console.log('value reached to zero') 
    }else {
      setCounter(counter - 1)
    }
  }
  return (
    <div>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Increase Value</button>
      <br />
      <button onClick={removeValue}>Decrease Value</button>
    </div>
  )
}

export default App