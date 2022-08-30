import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';


function App() {
  

  return (
    
    <div className="App" style={{
      backgroundColor: '#D7D6DE'}}>
      <div>
        <NavBar />
      </div>

      <div>
        <br/>
        <ItemListContainer sx={{padding: 5}} />
      </div>

      <div>
        {/* <Promesas/>
        <Prompract/> */}
      </div>
      
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
