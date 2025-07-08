import { useState } from 'react'
import './App.css'
import Grid  from './Components/Grid'
import Sidenav from './Components/Sidenav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app-container">
        <Sidenav />
        <div className="main-content">
          <h1>Tic-Tac-Toe</h1>
          <Grid />
        </div>
      </div>
    </>
  );
}

export default App
