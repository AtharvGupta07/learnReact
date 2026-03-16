import { useState } from "react"
import Btn from './components/btn.jsx'

function App() {
  
  const [color, setColor] = useState("pink")
  
  return (
    <>
      <div className="w-full h-screen duration-200" style = {{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap shadow-xl bg-white justify-center gap-3 px-3 py-2 rounded-3xl">
              <Btn colour = "Blue" changeColor = {() => {setColor('Blue')} }/>
              <Btn colour = "Green" changeColor = {() => {setColor('Green')} }/>
              <Btn colour = "Red"   changeColor = {() => {setColor('Red')} }/>
              <Btn colour = "Yellow"changeColor = {() => {setColor('Yellow')} } />
              <Btn colour = "Olive" changeColor = {() => {setColor('Olive')} } />
              <Btn colour = "Orange"changeColor = {() => {setColor('Orange')} } />
              <Btn colour = "White" changeColor = {() => {setColor('White')} } />
              <Btn colour = "Black" changeColor = {() => {setColor('Black')} } />
              <Btn changeColor = {() => {setColor('Pink')} }/>           
              
            </div>
        </div>
      </div>
    </>
  )
}

export default App


