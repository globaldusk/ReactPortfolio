import React from "react";

function About() {
  const calculateAge = () => {
    const birthDate = new Date('2001-11-28');
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  };
  return (
    <>
        <body>
            <h1>About Me</h1>
            <br></br>
            <p className="ps">I am a {calculateAge()} year old developer from Sydney, Australia.</p>
            <p className="ps">I have a Postgraduate Certificate in Programming and Development, <br></br>a Bachelor of Science in IT and a Diploma of Innovation</p>
            <br></br>
            <p className="ps">Experienced with <br />
            HTML, CSS, JavaScript, React, Node, Databases, Python, Java, C# and C++</p>
            <br></br>
            <p className="ps">Experienced with <br />
            tools like Figma & Adobe</p>
        </body>
        
    </>
  );
}

export default About;
