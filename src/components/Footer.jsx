import React from "react";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

function Footer() {
  return (
    <footer className="ptm">
        <div className="text-gray">
          <div className="footer-container">
            <p>All rights reserved ©</p>
            <a href="https://github.com/globaldusk" target="_blank" className="icon"><AiFillGithub  size="2rem"/></a>
            <a href="https://www.linkedin.com/in/jack-shakespeare/" className="icon" target="_blank"><AiFillLinkedin size="2rem"/></a>
          </div>
        </div>
    </footer>
  );
}

export default Footer;