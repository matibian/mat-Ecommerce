import './App.css';
import React, { useState, useEffects } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainerCarrousel from './components/carrousel/ItemListContainerCarrousel';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from './components/SideBar';
import ItemListContainerGrid from './components/Grid/ItemListContainerGrid';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Test from './test/Test';
import ItemDetail from './components/ItemDetail/ItemDetail';
import ItemDetailContainerModal from './components/ItemDetail/ItemDetailContainerModal';
// import FetchContainer from './test/FetchContainer';


function App() {
  const [buttonPopup, setButtonPopup] = useState(true)

  return (
      <BrowserRouter>
        <NavBar />
        <SideBar sx={{width:"25%"}}/>
        <Routes>
          <Route path='/' element={<ItemListContainerGrid />} />
          {/* <Route path='/' element={<ItemListContainerCarrousel sx={{ padding: 5 }} />} /> */}
          {/* <Route path='/'  element={} /> */}
          <Route path='/detail/:id' element={<ItemDetailContainer />} />
          <Route path='/category/:category' element={<ItemListContainerGrid/>} />
          {/* <Route path='/test' element={<Test />} /> */}
        </Routes>
        {/* <ItemDetailContainerModal trigger={buttonPopup} setTrigger={setButtonPopup} /> */}

        {/* <ItemListContainerCarrousel sx={{ padding: 5 }} /> */}
        <Footer />
      </BrowserRouter>






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
