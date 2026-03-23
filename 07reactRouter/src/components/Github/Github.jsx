import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import { data } from 'react-router-dom'
import { useState } from 'react'

function Github() {
  const data = useLoaderData()
    // const [data, setData] = useState([])

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/AtharvGupta07')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log('Gitdata:');
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl flex flex-col justify-between items-center'>
        <h1 className='p-4'>User Name: {data.login}</h1>
        <p className='p-0'>Github followers: {data.followers}</p> 
        <img className='p-5' src={data.avatar_url} alt="Git image" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response  = await fetch('https://api.github.com/users/AtharvGupta07')
  return response.json()
}