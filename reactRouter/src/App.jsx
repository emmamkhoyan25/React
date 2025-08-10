
import './App.css'
import Footer from './component/footer/Footer'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Header from './component/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return <BrowserRouter >
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
    <Footer />
  </BrowserRouter >

}

export default App
