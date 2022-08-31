import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
// import SideBar from './components/SideBar';
// import FetchContainer from './test/FetchContainer';


function App() {


  return (

    <div className="App">
      <div>
        <NavBar />
      </div>
      <img
        src={"https://i.ibb.co/tMMcd10/chip.png"}
        alt="logo"
        id='pic'

      />

      {/* <div sx={{ 
      backgroundImage: "https://i.ibb.co/tMMcd10/chip.png"
    }}>
        <SideBar />

      </div> */}
      <div>
        {/* <FetchContainer/>
        <Promesas/>
        <Prompract/> */}
      </div>
      <div>
        <br />
        <ItemListContainer sx={{ padding: 5 }} />
      </div>


      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
