import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Promesas from './test/Promesas';
import Prompract from './test/Prompract';
import Item from './components/Item';
import ItemListContainer from './components/ItemListContainer';


function App() {
  

  return (
    <div className="App">
      <div>
        <NavBar />
      </div>

      <div>
        <br/>
        <ItemListContainer/>
        <img src={logo} alt="logo" width={250} height={250} />
      </div>

      <div>
        {/* <Promesas/>
        <Prompract/> */}
      </div>
      
      {/* <div>
        <Footer />
      </div> */}
    </div>
  );
}

export default App;
