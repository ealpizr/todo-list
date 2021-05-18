import React from 'react'
import TodoItem from './TodoItem'
import './TodoList.css'

const TodoList = () => {
  return (
    <div className="todo-list">
      <TodoItem task="Go for a walk" createdAt="10:25" />
      <TodoItem task="Take a shower" createdAt="11:50" />
      <TodoItem task="Buy groceries" createdAt="12:00" />
    </div>
  )
}

export default TodoList
