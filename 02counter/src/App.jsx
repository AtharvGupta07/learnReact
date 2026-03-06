import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter]= useState(15)

  // let counter = 5;
  function addValue(){
    console.log("val++");
    if(counter < 20)setCounter(counter+1);
    else  alert("Max Counter value is attained.")
  }
  function remValue(){
    console.log('val--');
    if(counter>0)  setCounter(counter-1);
    else  alert("Counter value couldn't be -ve.")
  }

  return (
    <>
    <h1>Chai aur react</h1>
    <h3>counter value:  {counter}</h3>
    <button onClick={addValue}>Add Value</button>
    <br/>
    <button onClick={remValue}>Remove value</button>
    </>
  )
}

export default App
