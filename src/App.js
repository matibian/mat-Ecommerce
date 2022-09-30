import './App.css';
import React, { createContext } from 'react';
import Footer from './components/Footer';
import ItemListContainerCarrousel from './components/Carrousel/ItemListContainerCarrousel';
import { Routes, Route } from "react-router-dom";
import ItemListContainer from './components/Grid/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Home from './components/Home';
import Cart from './components/Cart/Cart';
import CheckOut from './components/CheckOut';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from './components/NavBar/NavBar';
import OrdersPointer from './components/Orders/OrdersPointer';
import OrdersContainer from './components/Orders/OrdersContainer';


export const contexto = createContext();

const theme = createTheme({
  palette: {
    secondary: {
      main: 'rgb(36 24 64)'
    }
  }
});

export default function App() {

  console.log("Proyecto Final del curso de React para CODERHOSE" )
  console.log("Por Matias Bianchi" )

  return (
    <CartProvider >
      <ThemeProvider theme={theme}>
          <NavBar />
          <Routes>
            <Route path='/' element={<><Home /><ItemListContainerCarrousel /></>} />
            <Route path='/category/all' element={<ItemListContainer />} />
            <Route path='/detail/:id' element={<ItemDetailContainer />} />
            <Route path='/category/:category' element={<ItemListContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<CheckOut />} />
            <Route path='/mis_pedidos' element={<OrdersPointer />} />
            <Route path='/mis_pedidos/:id' element={<OrdersContainer />} />
          </Routes>
          <Footer />
      </ThemeProvider>
    </CartProvider>


  );
}


