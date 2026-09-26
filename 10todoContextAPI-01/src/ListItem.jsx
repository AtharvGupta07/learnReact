import React from 'react'
import { useTodo } from './contexts';
import { useState } from 'react';

function ListItem({todo}) {

  const {updateTodo, deleteTodo, toggleComplete} = useTodo()
  const [isTodoEditable, setIsTodoEditable] =  useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const editTodo = () => {
    updateTodo(id, {...todo, todo: todoMsg})
    setIsTodoEditable(false);
  } 

  const toggleCompleted = () => {
    toggleComplete(todo.id)
  }

  return (
    <div className= {`w-full rounded p-2 border-black flex justify-between ${todo.completed? "bg-[#c6e9a7]" : "bg-purple-300"}`} key = {todo.id} >
      <div>
        <input type="checkbox" checked={props.checked} onClick={props.toggleCheck}/>
        <div id='msgDiv' className='inline'>
          <span> {props.msg} </span>
        </div>
      </div>
      <div>
          <button className='bg-white rounded mx-1 px-1' onClick={editTodo}>Edit</button>
          <button className='bg-white rounded mx-1 px-1' onClick={()=>deleteTodo(todo.id)}>Delete</button>
      </div>
    </div>
  )
}

export default ListItem
