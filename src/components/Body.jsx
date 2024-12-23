import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';  
import About from '../pages/About';
import Portfolio from '../pages/Portfolio'; 
import Contact from '../pages/Contact';

function Body() {
    return (
        <div>
            <h2>This is the location of the displayed pages</h2>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    )
}
export default Body;