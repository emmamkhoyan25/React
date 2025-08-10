import { useState } from 'react'
import './App.scss'
import Home from './pages/Home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './commponents/Header/Header'
import About from './pages/About/About'


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
 
    </BrowserRouter>
  )
}

export default App
