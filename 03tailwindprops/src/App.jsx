import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'
import './index.css'
import Card from './components/card.jsx'

function App() {
  const [count, setCount] = useState(0)

  // let myObj = {
  //   name: 'Atharv',
  //   Age:  '22',
  //   Sex: 'M'

  // }
  // let herObj = {
  //   name: 'Chhavi',
  //   Age: '22',
  //   Sex: 'F'
  // }
  let para1 = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente magni eum saepe voluptatibus placeat, voluptatum consequatur minus nemo similique inventore quia unde quam neque doloribus. Culpa iste provident pariatur eos!'

  let para2 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad distinctio consectetur, incidunt eveniet consequatur nesciunt accusamus atque vitae voluptatum magni. Sint eius aperiam iure maxime repellat assumenda vitae atque numquam!'
  

  return (
    <> 
      <h1 className="bg-green-400 text-4xl text-red-500 font-bold">
        Tailwind Test
      </h1>
      {/* <Card channel = "Atharv" channel2 = "Atharv" someObj = {myObj}/>
      <Card someObj = {herObj} /> */}
      <Card userName = 'Atharv' location = "Badarpur, New Delhi" paraVal = {para1} />
      <Card userName ='Chhavi' location = 'Shahdra, New Delhi'/>
      <Card/>
    </>
  )
}

export default App
