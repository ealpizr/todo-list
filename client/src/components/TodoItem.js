import React from 'react'
import './TodoItem.css'
import { MdDelete } from 'react-icons/md'
import { GoClock } from 'react-icons/go'

const TodoItem = props => {
  return (
    <div className="todo-item">
      <label className="container">
        <input type="checkbox"></input>
        <span className="checkmark"></span>
      </label>

      <h3 className="todo-task">{props.task}</h3>
      <MdDelete className="todo-delete" />
      <h4 className="todo-time">
        <GoClock className="todo-clock" /> {props.createdAt}
      </h4>
    </div>
  )
}

export default TodoItem
