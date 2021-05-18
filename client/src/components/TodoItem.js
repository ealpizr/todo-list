import React from 'react'
import './TodoItem.css'
import { MdDelete } from 'react-icons/md'
import { GoClock } from 'react-icons/go'

const TodoItem = props => {
  return (
    <div className="todo-item">
      <label className="container">
        <input
          type="checkbox"
          onChange={() => props.completeTodo(props.id, !props.completed)}
          checked={props.completed ? true : false}
        ></input>
        <span className="checkmark"></span>
      </label>

      <h3 className={props.completed ? 'todo-task completed' : 'todo-task'}>
        {props.task}
      </h3>
      <i onClick={() => props.deleteTodo(props.id)}>
        <MdDelete className="todo-delete" />
      </i>
      <h4 className="todo-time">
        <GoClock className="todo-clock" /> {props.createdAt}
      </h4>
    </div>
  )
}

export default TodoItem
