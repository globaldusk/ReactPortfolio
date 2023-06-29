import React from "react";
import '../styles/Style.css';

import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-wrapper">
        <ul>
            <li>
                <Link to="/" class="hoverable">Home</Link>
            </li>
            <li>
                <Link to="/about" class="hoverable">About</Link>
            </li>
            <li>
                <Link to="/contact" class="hoverable">Contact</Link>
            </li>
        </ul>
    </div>
  );
}

export default Navbar;