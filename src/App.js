import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Socks from './pages/Socks';
import Stockings from './pages/Stockings';

import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/socks" element={<Socks />} />
          <Route path="/products/stockings" element={<Stockings />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Navbar></Navbar>
      </Router>
    </>
  );
}

export default App;
