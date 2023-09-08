import React from "react"
import './App.css';

import Header from "./components/Header"
import Home from './components/Home'
import Cart from './components/Cart'

import Footer from "./components/Footer"

import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

      </main>

      <Footer />
    </div>
  );
}

export default App;
