import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from "./App";

import NavBar from './components/navbar/NavBar.js'
import Home from './components/home/Home';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import ItemDetailContainer from './components/itemdetailcontainer/ItemDetailContainer.js';
import Nosotros from './components/nosotros/Contactanos';
import Footer from './components/footer/Footer';
import reportWebVitals from './reportWebVitals';
import ItemCategoryContainer from './components/itemcategorycontainer/ItemCategoryConteiner';
import Cart from './components/cart/Cart';
import CartProvider from './context/CartContext';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter >
    |<CartProvider>
      <NavBar />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/productos' element={<ItemListContainer />} />
        <Route exact path='/producto/:productoId' element={<ItemDetailContainer/>} />
        <Route exact path='/productos/:categoriaId' element={<ItemCategoryContainer/>} />
        <Route exact path='/nosotros' element={<Nosotros />} />
        <Route exact path='/carrito' element={<Cart/>}/>
      </Routes>

      <Footer />
      </CartProvider>
    </BrowserRouter>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
