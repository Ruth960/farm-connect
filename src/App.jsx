import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import HomePage from './pages/homePage';
import About from './pages/about';
import Market from './pages/market';
import Dashboard from './pages/dashboard';
import Cart from './pages/cart';

function App() {
  const [cartItems, setCartItems] = useState([]);
return (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/market" element={<Layout><Market setCartItems={setCartItems}/></Layout>} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/cart" element={<Layout><Cart cartItems={cartItems}/></Layout>} />
      </Routes>
    </Router>
   
  </>
);
}

export default App;