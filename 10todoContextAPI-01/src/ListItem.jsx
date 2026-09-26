import React from 'react'

function ListItem(props) {

  function editTask(){
    console.log('Needs to be implemented.');
    
  }

  return (
    <div className='w-full bg-purple-300 rounded p-2 border-black flex justify-between' >
      <div>
        <input type="checkbox" checked={props.checked} onClick={props.toggleCheck}/>
        <div id='msgDiv' className='inline'>
          <span> {props.msg} </span>
        </div>
      </div>
      <div>
          <button className='bg-white rounded mx-1 px-1' onClick={editTask}>Edit</button>
          <button className='bg-white rounded mx-1 px-1' onClick={props.DeleteTask}>Delete</button>
      </div>
    </div>
  )
}

export default ListItem
