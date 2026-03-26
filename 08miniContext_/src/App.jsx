import React from 'react'
import './App.css'
import UserContextProvider from "./context/UserContextProvider";
import Profile from './Components/Profile';
import Login from './Components/Login';

function App() {

  

  return (    
    <UserContextProvider>
      <h1>I am learning context API</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
