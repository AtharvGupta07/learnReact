import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {removeTodo} from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector((state) => state.todo.todos)
    const dispatch = useDispatch();
  return (
    <div className='mt-8'>
      <h2 className='text-xl font-semibold text-white mb-4'>Todos</h2>
      <ul className='space-y-3'>
      {todos.map((todo) => (
          <li 
          key={todo.id}
          className='flex justify-between items-center p-4 bg-gray-800 text-white rounded-md'
          >
              {todo.text}
          <button 
          onClick={() => dispatch(removeTodo(todo.id))}
          className='text-red-400 hover:text-red-300 font-semibold'
          >
              X
          </button>
          </li>
      ))}
      </ul>
    </div>
  )
}

export default Todos