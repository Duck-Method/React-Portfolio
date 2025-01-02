import "./css/nav.css";

import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
      <nav class="layoutNav">

          <li><NavLink to="/" className={({ isActive }) => (isActive ? "active" : "inactive")} >About Me</NavLink></li>
          <li><NavLink to="/portfolio" className={({ isActive }) => (isActive ? "active" : "inactive")} >Portfolio</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "inactive")} >Contact</NavLink></li>
          <li><NavLink to="/resume" className={({ isActive }) => (isActive ? "active" : "inactive")} >Resume</NavLink></li>
      </nav>
    );
  }
  
  export default Navigation;
  