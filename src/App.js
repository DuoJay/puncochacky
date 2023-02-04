import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FilterProvider } from './context/FilterContext';
import { ShowModalProvider } from './context/ShowModal';

import { ToastContainer } from 'react-toastify';

import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Category from './pages/Category';
// import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Admin from './pages/Admin';
import Db from './pages/Db';
import ProductDetail from './pages/ProductDetail';

import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <FilterProvider>
      <ShowModalProvider>
        <Router>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<Category />} />
            <Route path="/category/:categoryName" element={<Products />} />
            <Route
              path="/category/:categoryName/:productId"
              element={<ProductDetail />}
            />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/sign-up" element={<SignUp />} /> */}
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/db" element={<Db />} />
          </Routes>
          <Navbar></Navbar>
        </Router>
        <ToastContainer></ToastContainer>
      </ShowModalProvider>
    </FilterProvider>
  );
}

export default App;
