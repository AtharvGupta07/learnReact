import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(15);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(generatePassword , [length, numberAllowed, charAllowed, setPassword])
  function generatePassword() {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
    if(numberAllowed)
        str += "0123456789";
    if(charAllowed)
        str += "!@#$%^&*()_+-={}[]:<>?,./";

    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }

  const copyPasswordToClickBoard = useCallback(() =>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])



  return (
    <>
      <h1 className='text-4xl font-bold text-center text-white'>Password Generator</h1>

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg  px-4 my-8 text-orange-500 bg-gray-800 py-3'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>

          <input type="text" value={password} className='outline-none w-full py-1 px-3 rounded-lg' placeholder='Generate Password' readOnly ref={passwordRef} />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-800 transition-all duration-300 ' onClick={copyPasswordToClickBoard}>copy</button>
        
        </div>

        <div className='flex text-sm gap-x-2'>
          
          <div className='flex items-center gap-x-1'>

            <input type="range" min={8} max={100} value={length} className='cursor-pointer' onChange={e => setLength(e.target.value)} />
            <label htmlFor="length">Length: {length}</label>

          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={() => setNumberAllowed((prev) => !prev)} />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={charAllowed} id='charInput' onChange={() => setCharAllowed((prev) => !prev)} />
            <label htmlFor="charInput">Characters</label>

          </div>

        </div>

        {/* <button className='w-full py-3 bg-blue-700 rounded-lg text-white text-lg font-semibold my-3 hover:bg-blue-800 transition-all duration-300' onClick={passwordGenerator}>Generate Password</button> */}
      </div>
    </>
  )
}

export default App
