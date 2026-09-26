import { useEffect, useState } from "react";
import ListItem from "./ListItem"

function App() {

  const [inputText, setInputText] = useState("");
  const [data, setData] = useState( JSON.parse(localStorage.getItem('todos')) || [] );
  

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(data));
    console.log('data updated', data);
    
  },[data, toggleCheck, DeleteTask])


  function addTodo(){
    let id = Date.now();
    let msg = inputText;
    let checkBox = false;
    let obj = {id_: id, msg : msg, checked: checkBox};
    setData([obj, ...data]);
    setInputText("");
    // console.log(data);
  }

  function DeleteTask(id){
    for(let i = 0; i < data.length; i++){
      setData(data.filter(todo => todo.id_ != id));
    }
  }

  function toggleCheck(id){
    setData(prevData => 
      prevData.map(item =>
        item.id_ == id? {...item, checked: !item.checked} : item
      )
    );
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
          msg = {todo.msg}
          DeleteTask = {() => DeleteTask(todo.id_)}
          toggleCheck = {() => toggleCheck(todo.id_)}
          // editTask = {() => editTask(todo.id_)}
          />
      ))}
    
    </div>
  </div>)
}

export default App
