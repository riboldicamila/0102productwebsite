import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import Footer from './Components/footer/Footer';
import Navbar from './Components/navbar/Navbar';
import Home from './Pages/Home/Home';
import AboutUs from './Pages/Home/AboutUs';
import Contact from './Pages/Home/Contact';
import CollectionPage from './Pages/Home/Collection';
import Questions from './Pages/Home/Questions';
import Cart from './Components/cart/Cart';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app-container">
          <Navbar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<CollectionPage />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/qa" element={<Questions />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
