import React from 'react'
import './TodoForm.css'

const TodoForm = () => {
  return (
    <div className="form">
      <form>
        <input className="form-input" type="text" placeholder="Task..."></input>
        <button className="form-btn">Create</button>
      </form>
    </div>
  )
}

export default TodoForm
