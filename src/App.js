//import logo from './logo.svg';
import React, { useState } from 'react';

import './App.css';
import { Login } from './components/login';
import { Register } from './components/register';

function App() {
  const [currentFrom, setCurrentFrom] = useState("login");
  
  const toogleForm = (forName) => {
    setCurrentFrom(forName);
  }

  return (
    <div className="App">
     {
     currentFrom === "login" ? <Login onFromSwitch={toogleForm} /> : <Register onFromSwitch={toogleForm} />
     }
    </div>
  );
}

export default App;
