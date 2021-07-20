import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className="bg-red-500 text-white text-6xl">Hello!</h1>
      <Header></Header>
    </div>
  )
}

export default App
