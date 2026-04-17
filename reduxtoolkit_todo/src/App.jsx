import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'

function App() {
  return (
    <div className='min-h-screen bg-gray-900 px-4 py-10'>
      <div className='max-w-2xl mx-auto'>
      <h1 className='text-3xl font-bold text-white'>Redux Toolkit Todo</h1>
      <AddTodo />
      <Todos />
      </div>
    </div>
  )
}

export default App
