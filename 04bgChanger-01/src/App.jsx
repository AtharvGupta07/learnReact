import { useState } from "react";
import Icon from "./Components/Icon"

function App() {
  const colors = ['red', 'green', 'blue', 'olive', 'gray', 'yellow', 'pink', 'purple', 'lavender', 'white', 'black'];

  const [color, setColor] = useState('red');

  return (
    <div  className="bg-gray-800 h-screen w-full" style={{backgroundColor: color}}>
      <div className="rounded-lg bg-slate-300 mx-5 left-0 bottom-0 right-0 absolute text-center flex justify-center gap-4 flex-wrap p-1">

        {colors.map((color) => (
          <Icon name ={color} setColor={setColor}/>
        ))}

      </div>
    </div>
  )
}

export default App
