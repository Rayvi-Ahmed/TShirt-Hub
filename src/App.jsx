import { useState } from 'react'
import './App.css'
import Home from './Componant/Home/Home'
import Header from './Componant/Header/Header'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  )
}

export default App
