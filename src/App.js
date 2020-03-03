import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import NavBar from './NavBar'
import Routes from './Routes'

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
