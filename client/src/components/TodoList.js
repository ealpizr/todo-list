import React from 'react'
import moment from 'moment'
import TodoItem from './TodoItem'
import './TodoList.css'

const TodoList = props => {
  /* 
    Props could be cleaned up
  */
  return (
    <div className="todo-list">
      {props.todos.map(t => (
        <TodoItem
          key={t.id}
          id={t.id}
          task={t.task}
          completed={t.completed}
          createdAt={moment(t.createdAt).format('hh:mm a')}
          deleteTodo={props.deleteTodo}
          completeTodo={props.completeTodo}
        />
      ))}
    </div>
  )
}

export default TodoList
