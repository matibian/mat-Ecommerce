import './App.css';
import React, { useState, useEffects, createContext } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainerCarrousel from './components/carrousel/ItemListContainerCarrousel';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from './components/SideBar';
import ItemListContainerGrid from './components/Grid/ItemListContainerGrid';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Test from './test/Test1';
import ItemDetail from './components/ItemDetail/ItemDetail';
import ItemDetailContainerModal from './components/ItemDetail/ItemDetailContainerModal';
import Test1 from './test/Test1';
import Test2 from './test/Test2';
import { CardProvider } from './components/context/context';
// import FetchContainer from './test/FetchContainer';



export const contexto = createContext();

export default function App() {
  const [buttonPopup, setButtonPopup] = useState(true)
  

  return (
    // <CartProvider.Provider value={{ color, setColor }}>
    <BrowserRouter>
        <NavBar />
        <SideBar sx={{width:"25%"}}/>
        <Routes>
          <Route path='/' element={<ItemListContainerGrid />} />

          {/*  */}
          {/* <Route path='/'  element={} /> */}

          <Route path='/detail/:id' element={<ItemDetailContainer />} />
          <Route path='/category/:category' element={<ItemListContainerGrid/>} />



          {/* <Route path='/' element={<ItemListContainerCarrousel sx={{ padding: 5 }} />} /> */}


      {/* <Route path='/test1' element={<Test1 />} />
          <Route path='/test2' element={<Test2 />} /> */}
        </Routes>
        {/* <ItemDetailContainerModal trigger={buttonPopup} setTrigger={setButtonPopup} /> */}

        {/* <ItemListContainerCarrousel sx={{ padding: 5 }} /> */}
        <Footer />
      </BrowserRouter>
      // </CartProvider.Provider>





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


