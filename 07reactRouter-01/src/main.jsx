import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home'
import About from './components/About'
import ContactUs from './components/ContactUs'
import User from './components/User'
import Github from './components/Github'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: '',
//         element: <Home/>
//       },{
//         path:'about',
//         element: <About/>
//       },{
//         path: 'contact-us',
//         element: <ContactUs/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact-us' element={<ContactUs/>} />
      <Route path='github' element= {<Github/>} />
      <Route path='user/:userid' element={<User/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
