import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Category from './pages/Category';

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
          <Route path="/products/:categoryName" element={<Category />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Navbar></Navbar>
      </Router>
    </>
  );
}

export default App;
