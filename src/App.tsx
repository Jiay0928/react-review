import { useState } from 'react'

import './App.css'
import Tictactoe from './tictactoe'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'

function App() {
  const [numOfPlayers, setNumOfPlayers] = useState(2)
  
  return (
    <>
      <div className='layoutDiv'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login numOfPlayers={numOfPlayers} setNumOfPlayers={setNumOfPlayers}/>} />
            <Route path="/play" element={<Tictactoe numOfPlayers={numOfPlayers}/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
