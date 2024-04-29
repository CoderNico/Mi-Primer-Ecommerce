import React from 'react'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './components/Context/CartContext';
import { CheckOut } from './components/CheckOut/CheckOut';
import { Cart } from './components/Cart/Cart';
import { Home } from './components/Home/Home';


const App = () => {
  return (
    <>
    <CartContextProvider>
            <BrowserRouter>
            <NavBar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Item/:id" element={<ItemDetailContainer />} />
                    <Route path="/category/:category" element={<ItemListContainer />} />
                    <Route path="/Cart" element={<Cart />} />
                    <Route path="/CheckOut" element={<CheckOut />} />
                </Routes>
            </BrowserRouter>
        </CartContextProvider>
    </>
  )
}

export default App

