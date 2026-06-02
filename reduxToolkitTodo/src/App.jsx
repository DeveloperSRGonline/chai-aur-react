import React from 'react'
import AddTodos from './components/AddTodos'
import Todos from './components/Todos'

const App = () => {
  return (
    <div>
      <h1>ReduxToolkit Todo App</h1>
      <AddTodos />
      <Todos />
    </div>
  )
}

export default App