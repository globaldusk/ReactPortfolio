import React from "react";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="pbl">
        <div class="nav-wrapper ">
            <ul>
                <li className="hoverable">
                    <Link to="/">HOME</Link>
                </li>
                <li className="hoverable">
                    <Link to="/about">ABOUT</Link>
                </li>
                <li className="hoverable">
                    <Link to="/contact">CONTACT</Link>
                </li>
            </ul>
        </div>
    </nav>
  );
}

export default Navbar;