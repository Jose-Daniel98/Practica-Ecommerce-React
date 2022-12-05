import './App.css';
import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import CartProvider from './context/CartContext';

function App() {
  return (
    <>
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer texto="¡Bienvenidos a JDPZ AURRICULARES!" />} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer texto="¡Bienvenidos a JDPZ AURRICULARES!" />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
