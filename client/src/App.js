import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

/* 
  TODO:
  * Handle errors
  * Create a preloader
  * Clean up some code
*/

const App = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    getTodos()
  }, [])

  const getTodos = () => {
    fetch('http://localhost:3001')
      .then(res => res.json())
      .then(({ data }) => {
        setTodos(data)
      })
  }

  const createTodo = task => {
    fetch('http://localhost:3001', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ task }),
    }).then(() => {
      /* 
        This should not make another API call, there
        has to be a better way to add the created
        task to state.
      */
      getTodos()
    })
  }

  const deleteTodo = id => {
    fetch(`http://localhost:3001/${id}`, {
      method: 'DELETE',
    }).then(() => {
      /* 
        This should not make another API call, there
        has to be a way to remove the task from state.
      */
      getTodos()
    })
  }

  const completeTodo = (id, completed) => {
    fetch(`http://localhost:3001/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed }),
    }).then(() => {
      /* 
        This should not make another API call, there
        has to be a way to update the task from state.
      */
      getTodos()
    })
  }

  /* 
    Props could be cleaned up
  */
  return (
    <div className="App">
      <Header />
      <TodoForm createTodo={createTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
      />
    </div>
  )
}

export default App
