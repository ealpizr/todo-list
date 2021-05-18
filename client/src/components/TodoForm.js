import React, { useRef } from 'react'
import './TodoForm.css'

const TodoForm = props => {
  const task = useRef('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!task) return
    props.createTodo(task.current.value)
    task.current.value = ''
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          placeholder="Task..."
          ref={task}
        ></input>
        <button className="form-btn">Create</button>
      </form>
    </div>
  )
}

export default TodoForm
