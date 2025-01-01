import "./css/nav.css";

import { Link } from 'react-router-dom';

function Navigation() {
    return (
      <nav class="layoutNav">

          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>

      </nav>
    );
  }
  
  export default Navigation;
  