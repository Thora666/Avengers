import React from 'react';
import { Link } from "react-router-dom";
import './navbar.css'

function Navbar(){
    return(
        <nav>
          <div class="site-title">Avengers</div>
        <ul>
          <li>
            <Link to="/" activeClassName="active" end>Home</Link>
          </li>
          <li>
            <Link to="dashboard" activeClassName="active">Dashboard</Link>
          </li>
          <li>
            <Link to="JoinUs" activeClassName="active">Join Us</Link>
          </li>
          <li>
            <Link to="Privacy" activeClassName="active">Privacy</Link>
          </li>
        </ul>
      </nav>
    );
}

export default Navbar