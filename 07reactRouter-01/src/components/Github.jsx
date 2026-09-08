import React, { useEffect, useState } from 'react'

function Github() {
  const url = 'https://api.github.com/users/AtharvGupta07'
  const [data, setData] = useState([]);
  console.log('page render');
  

  useEffect(()=>{
    fetch(url)
    .then((data)=>data.json())
    .then((data)=>setData(data));

    console.log(data);
  },[])
  

  return (
    <div className='flex justify-center items-center space-x-10'>
      <div className='w-72 h-72 m-10'>
        <img src={data.avatar_url} alt="" />
      </div>
      <div className='flex flex-col space-y-3 bg-slate-300 p-5 rounded-xl'>
        <div className=''>
          {data.name} <br/>
          {data.bio}
        </div>
        <div className='flex space-x-5 '>
         <span>Followers: {data.followers}</span> 
          <span>Following: {data.following}</span>
        </div>
        <div>
          {data.location}
        </div>
      </div>
    </div>
  )
}

export default Github
