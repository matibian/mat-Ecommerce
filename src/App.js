import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemCount from './components/ItemCount';


function App() {
  const onAdd = () => {
    console.log("Agregado al carrito")
  }

  return (
    <div className="App">
      <div>
        <NavBar />
      </div>

      <div>
        <br/>
        <ItemCount stock={5} inicial={1} onAdd={onAdd}/>
        <img src={logo} alt="logo" width={250} height={250} />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
