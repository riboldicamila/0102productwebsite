import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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


function App() {
  return (
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
