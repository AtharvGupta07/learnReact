import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function Header() {
  return (
    <>
      <header>
        <nav className="bg-yellow-200 border-gray text-3xl p-5 rounded-full">
          <div className='flex justify-between items-center p-4'>
            
            <Link to="#" className='text-2xl font-bold'>
                Logo
            </Link>

            <div className='flex'>
              <div className='flex gap-4 mr-56'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to= '/contact'>Contact Us</NavLink>
                <NavLink to = '/about'>About Us</NavLink>
              </div>

              <div className='flex gap-4'>
                <Link>Login</Link>
                <Link>Profile</Link>
              </div>
            </div>
            
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header