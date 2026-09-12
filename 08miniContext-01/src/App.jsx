import UserContextProvider from "./context/UserContextProvider"
import Profile from "./components/Profile"
import Login from "./components/Login"

function App() {

  return (
    <UserContextProvider>
      <div className='bg-slate-800 w-full h-screen text-3xl flex flex-col justify-center items-center gap-11'>
        <Login />
        <Profile/>
      </div>
      
    </UserContextProvider>
  )
}

export default App
