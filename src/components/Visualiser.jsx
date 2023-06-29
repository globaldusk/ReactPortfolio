import React from "react";
import ShaderToyEmbed from "./ShaderToyEmbed";

function Visualiser() {
  return (
    <>
        <body>
            <h1>HI visualiser!</h1>
            <ShaderToyEmbed/>

            <iframe src="https://www.shadertoy.com/embed/ds2yWh?gui=true&t=10&paused=true&muted=false" width="640" height="360" frameborder="0" allowfullscreen="allowfullscreen" ></iframe>
            
            <p>Code:</p>
        </body>
    </>
  );
}

export default Visualiser;
