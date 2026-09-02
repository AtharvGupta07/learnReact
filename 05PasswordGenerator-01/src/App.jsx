import { useCallback, useEffect, useRef, useState } from "react"

function App() {
  const[val, setVal] = useState(8);
  const[num, setNum] = useState(false);
  const[chr, setChr] = useState(false);  
  const[password, setPassword] = useState("");

  const passwordGenerator = useCallback(()=>{
    let passwordRange = "ASDFGHJKLQWERTYUIOPZXCVBNMasdfghjklqwertyuiopzxcvbnm";
    if(num) passwordRange += "0123456789";
    if(chr)  passwordRange += "!@#$%^&*()";

    let newPassword = "";

    for(let i = 0; i < val; i++){
      newPassword += passwordRange[Math.floor(Math.random() * passwordRange.length)];
    }

    setPassword(newPassword);

  },[val, num, chr, setPassword])

  useEffect(()=>{
    passwordGenerator();

  },[val,num,chr,passwordGenerator])


  const passwordRef = useRef(null);

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password])
  
  

  return (
    <div className="bg-slate-900 w-full h-screen flex justify-center items-start"> 
      <div className="bg-slate-800 m-20 p-5 rounded-xl text-orange-500">
        
        <div className="flex pb-5">
          <input type="text" value={password} ref={passwordRef} readOnly className="border-none outline-none flex-1 rounded-l-lg px-2" />
          <button className="bg-blue-700 px-2 rounded-r-lg text-white hover:bg-blue-800" onClick={copyPassword}>Copy</button>
        </div>
        
        <div className="flex gap-4">

          <div className="flex gap-1">
            <input type="range" min={8} max={50} value={val} onChange={(e) => setVal(e.target.value)}/>
            <span>length({val})</span>
          </div>

          <div className="flex gap-1">
            <input type="checkbox" checked={num} onChange = {()=> setNum((num) => !num)}/>
            <span>Number</span>
          </div>

          <div className="flex gap-1">
            <input type="checkbox" checked={chr} onChange =  {()=> setChr((chr) =>!chr)}/>
            <span>Character</span>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default App