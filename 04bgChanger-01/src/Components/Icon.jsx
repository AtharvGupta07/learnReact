import React from 'react'

function Icon({name="black", setColor}) {

  return (
    <div className='rounded-lg inline p-1 cursor-pointer' onClick={() => setColor(name)}
    style={{
            backgroundColor:  name,
            color: name === 'black' ? 'white' : 'black'
        }}
    >
      {name[0].toUpperCase() + name.slice(1)}
    </div>
  )
}

export default Icon
