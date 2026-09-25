import React from 'react'

function ListItem(props) {
  return (
    <div className='w-full bg-purple-300 rounded p-2 border-black flex justify-between' >
      <div>
        <input type="checkbox" value={props.checked}/>
        <span> {props.msg} </span>
      </div>
      <div>
          <button className='bg-white rounded mx-1 px-1'>Edit</button>
          <button className='bg-white rounded mx-1 px-1'>Delete</button>
      </div>
    </div>
  )
}

export default ListItem
