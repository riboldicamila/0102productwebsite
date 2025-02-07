import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import BlogGrid from './Components/BlogCarousel/BlogGrid';


function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogGrid />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
