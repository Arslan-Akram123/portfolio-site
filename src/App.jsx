import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='text-3xl font-bold text-center bg-green-800 py-2'>Vite + React</h1>
    </>
  )
}

export default App
