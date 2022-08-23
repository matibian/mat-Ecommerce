import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  const greetings = "Hola Lau"


  return (
    <div className="App">
      <div>
        <NavBar />
        <ItemListContainer  greetings={greetings} />
      </div>

      <div>
        {/* body */}
        <img src={logo} alt="logo"/>
      </div>

      <div>
        {/* Footer */}
      </div>
    </div>
  );
}

export default App;
