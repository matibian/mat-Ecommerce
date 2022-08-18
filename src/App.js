import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>

      <div>
        body
        <img src={logo} alt="logo"/>
      </div>

      <div>
        Footer
      </div>
    </div>
  );
}

export default App;
