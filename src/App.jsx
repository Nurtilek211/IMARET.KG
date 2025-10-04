import { RouterProvider } from 'react-router-dom'
import './App.css'
import myRouter from './router'

function App() {


  return (
    <div className='wrapper'>
      <RouterProvider router={myRouter} />
    </div>
  )
}

export default App
