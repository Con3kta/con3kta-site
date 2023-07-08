import { useState } from 'react'
import Home from './pages/home'
import Navbar from './components/Navbar/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar/>

      <Home/>
    </>
  )
}

export default App
