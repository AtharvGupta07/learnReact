import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <h1 className='bg-green-500 text-center text-3xl'>Tailwind Installed</h1>
  )
}

export default App
