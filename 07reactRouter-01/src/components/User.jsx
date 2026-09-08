import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams();
  return (
    <div className='text-center h-screen bg-neutral-200 text-slate-800 text-xl '>
      Name of user is { userid }
    </div>
  )
}

export default User
