import './App.css';
import React, { useState, useEffects } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainerCarrousel from './components/carrousel/ItemListContainerCarrousel';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from './components/SideBar';
import ItemListContainerGrid from './Grid/ItemListContainerGrid';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
// import FetchContainer from './test/FetchContainer';


function App() {
  const [buttonPopup, setButtonPopup] = useState(true)

  return (
    <>
      <BrowserRouter>
        <NavBar />
        {/* <Routes>
          <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:categoryId" element={<ItemListContainer />} /> */}
        <div className="todo">
          <SideBar />
          <ItemListContainerGrid />
        </div>
        <div id="carrousel">
          <br />
          <ItemListContainerCarrousel sx={{ padding: 5 }} />
        </div>
        {/* <Route path="/detail/:productId" element={<ItemDetailContainer />} /> */}
        <ItemDetailContainer trigger={buttonPopup} setTrigger={setButtonPopup} />
        {/* </Routes> */}
        <Footer />
      </BrowserRouter>
    </>





    // <div className="App">
    //   <div>
    //     <NavBar />
    //   </div>
    //   <img
    //     src={"https://i.ibb.co/tMMcd10/chip.png"}
    //     alt="logo"
    //     id='pic'

    //   />

    //   <div sx={{ 
    //   backgroundImage: "https://i.ibb.co/tMMcd10/chip.png"
    // }}>
    //     <SideBar />

    //   </div>
    //   <div>
    //     <FetchContainer/>
    //     <Promesas/>
    //     <Prompract/>
    //   </div>
    //   <div id= "carrousel">
    //     <br />
    //     <ItemListContainer sx={{ padding: 5}} />
    //   </div>


    //   <div>
    //     
    //   </div>
    // </div>
  );
}

export default App;
