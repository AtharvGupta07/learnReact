import { useState } from "react";
import ListItem from "./ListItem"

function App() {

  const [inputText, setInputText] = useState("");
  const [data, setData] = useState([]);


  function addTodo(){
    let id = Date.now();
    let msg = inputText;
    let checkBox = false;
    let obj = {id_: id, msg : msg, checked: checkBox};
    setData([obj, ...data]);
    setInputText("");
    console.log(data);
  }

  return(
  <div className="bg-slate-800 w-full h-screen text-white flex flex-col justify-start items-center pt-8 gap-7">
    <h3 className="text-xl font-bold">Manage Your Todos</h3>

    <div className="w-4/5 flex">
      <input type="text" className="w-full rounded-l-lg pl-2 bg-white/10" placeholder="Write Todo..." value={inputText} onChange={(e) => {setInputText(e.target.value)}}/>
      <button className="bg-green-700 p-2 rounded-r-lg" onClick={addTodo}>ADD</button>
    </div>

    <div className="flex w-4/5 flex-col gap-3 text-black">

      {data.map((todo) => (
        <ListItem 
          key ={todo.id_}
          checked = {todo.checked}
          msg = {todo.msg}/>
      ))}
    
    </div>
  </div>)
}

export default App
