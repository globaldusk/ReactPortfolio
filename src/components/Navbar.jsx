import React from "react";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="pbl">
        <div class="nav-wrapper ">
            <ul class="">
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/about">ABOUT</Link>
                </li>
                <li>
                    <Link to="/contact">CONTACT</Link>
                </li>
            </ul>
        </div>
    </nav>
  );
}

export default Navbar;