import React from "react";
import '../../css/nav.css';
import {Link} from 'react-router-dom';
function Navbar() {
  return (
      
        <nav className="navbar navbar-expand-lg navbar-dark p-3" id="navBar" >
     
      <Link className="navbar-brand" to="/">
        Navbar
      </Link>
     
      <div className="collapse navbar-collapse " id="navbarNav">
        <ul className="navbar-nav ml-auto ">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/projects">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/contact"
              
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>

     
    
  );
}

export default Navbar;
