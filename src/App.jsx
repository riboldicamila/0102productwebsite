import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import CreationsGrid from './Components/CreationsCarousel/CreationsGrid';
import AboutUs from './Pages/Home/AboutUs';
import Contact from './Pages/Home/Contact';
import CollectionPage from './Pages/Home/Collection';
import CreationsDetails from './Components/CreationsCarousel/CreationsDetails';
import Questions from './Pages/Home/Questions';
import CartIcon from './components/CartIcon';
import Cart from './components/Cart';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app-container">
          <Navbar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/creations" element={<CreationsGrid />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/technologies" element={<CollectionPage />} />
              <Route path="/blog/:slug" element={<CreationsDetails />} />
              <Route path="/qa" element={<Questions />} />
            </Routes>
          </div>
          {/* Cart icon will be accessible throughout the app */}
          <nav className="p-4 bg-white shadow">
            <div className="flex justify-between items-center">
              <h1>Your Store</h1>
              <CartIcon />
            </div>
          </nav>
          {/* Show product list and cart on certain routes */}
          <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2">
                {/* <ProductList /> */}
              </div>
              <div>
                <Cart />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
