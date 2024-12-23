import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Home from './pages/Home';  
import About from './pages/About';
import Portfolio from './pages/Portfolio';  
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Header />
      <Body />
      <Footer />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App;
