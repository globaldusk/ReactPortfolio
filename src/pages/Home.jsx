import React from "react";
import Projects from "../components/Projects";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

function Home() {
  return (
    <>
      <h1 className="jack-title">Jack Shakespeare</h1>
      <p className="ptm">
        Broad experience in all aspects of software development. 
        Checkout my projects!
      </p>
      <a href="https://github.com/globaldusk" className="icon" target="_blank"><AiFillGithub size="2rem"/></a>
      <a href="https://www.linkedin.com/in/jack-shakespeare/" className="icon" target="_blank"><AiFillLinkedin size="2rem"/></a>
      <Projects/>
    </>
  );
}

export default Home;
