import React from 'react';

import ReactJson from 'react-json-pretty';

import firstVisJson from '../constants/firstVisualiser.json'

const appKey = "rt8jh7";
const projectKey = "ds2yWh"//first visualiser key


const ShaderToyEmbed = () => {
    const [shaderToyData, setShaderToyData] = React.useState(null);
  
    // Fetch the ShaderToy JSON data here and update the state
    React.useEffect(() => {
        fetch('https://www.shadertoy.com/api/v1/shaders/'+projectKey+'?key='+appKey)
        .then(response => response.json())
        .then(data => setShaderToyData(data));
    }, []);

    return (
      <div>
        {/* Render the JSON data using react-jsonpretty */}
        {shaderToyData && <ReactJson data={shaderToyData} />}
      </div>
    );
  };
  
  export default ShaderToyEmbed;
  
  