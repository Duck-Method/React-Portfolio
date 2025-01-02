import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Resume from '../pages/Resume';  
import About from '../pages/About';
import Portfolio from '../pages/Portfolio'; 
import Contact from '../pages/Contact';

function Body() {
    return (
        <div>
            {/* <h2>This is the location of the displayed pages</h2> */}
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    )
}
export default Body;