import React from 'react'
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { addTodo } from '../features/todo/todoSlice'
 
function AddTodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    }
  
  
    return (
    <form onSubmit={addTodoHandler} className='flex flex-col gap-3 mt-8 sm:flex-row sm:items-center'>
        
        <input type="text"
        placeholder='Enter a new todo' 
        className='w-full bg-gray-800 rounded-md border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out' 
        value={input}
        onChange={(e) => setInput(e.target.value)}/>
        
        <button type='submit' 
        className='bg-indigo-500 text-white px-6 py-2 border-0 hover:bg-indigo-600 rounded-md text-base font-medium'>
            Add Todo
        </button>
    </form>
  )
}

export default AddTodo