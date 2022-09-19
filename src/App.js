import './App.css';
import React, { useState, createContext } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainerCarrousel from './components/carrousel/ItemListContainerCarrousel';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from './components/SideBar';
import ItemListContainerGrid from './components/Grid/ItemListContainerGrid';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Home from './components/Home';
import Cart from './components/Cart/Cart';
// import FetchContainer from './test/FetchContainer';



export const contexto = createContext();

export default function App() {

  return (
  <CartProvider >
    <BrowserRouter>
        <NavBar />
        {/* <SideBar sx={{width:"25%"}}/> */}
        <Routes>
          <Route path='/' element={<><Home/><ItemListContainerCarrousel/></>} />
          <Route path='/category/all' element={<ItemListContainerGrid />} />
          {/* <Route path='/' element={<ItemListContainerCarrousel/>} /> */}
          <Route path='/detail/:id' element={<ItemDetailContainer />} />
          <Route path='/category/:category' element={<ItemListContainerGrid/>} />
          <Route path='/cart' element={<Cart/>}/>


        </Routes>

        {/* <ItemListContainerCarrousel sx={{ padding: 5 }} /> */}
        <Footer />
      </BrowserRouter>
    </CartProvider>


  );
}


