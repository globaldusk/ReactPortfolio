import React from "react";
import Projects from "../components/Projects";

function Home() {
  return (
    <>
      <h1 className="jack-title">Jack Shakespeare</h1>
      <p className="ptm">
        Broad experience in all aspects of software development. 
        Checkout my projects!
      </p>
      <Projects/>
    </>
  );
}

export default Home;
