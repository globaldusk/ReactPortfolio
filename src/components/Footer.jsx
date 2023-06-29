import React from "react";
import '../styles/Style.css';

import { BrowserRouter, Route, Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
        <div className="footer-wrapper text-white">
          <div className="main-logo"></div>
          <div className="row align-end full-height">
            <p>All rights reserved ©</p>
          </div>
        </div>
    </footer>
  );
}

export default Footer;