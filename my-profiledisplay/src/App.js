import React, { useState } from "react";
import "./App.css";
import profile from "./profilephoto.jpeg";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "container dark" : "container"}>
      
      <button className="toggle" onClick={() => setDark(!dark)}>
        {dark ? "Light Mode" : "Dark Mode"}
      </button>

      <div className="Profile card">
        <img 
          src={profile}
          alt="profile" className="profile-img"
        />

        <h2>Pallavi Singh</h2>
        <p>Web Development|React|Node.js|B.TECH 3rd-YEAR</p>

        <div className="Skill">
          <p>React</p>
          <div className="bar"><div className="react"></div></div>

          <p>JavaScript</p>
          <div className="bar"><div className="js"></div></div>

          <p>CSS</p>
          <div className="bar"><div className="css"></div></div>
          
          <p>Html</p>
           <div className="bar"><div className="html"></div></div>

        </div>

           <div className="Professional Social Accounts">
        <a href="https://github.com/pallavisingh03" target="_blank">
         GitHub</a>
        <br />
        <a href="https://www.linkedin.com/in/pallavi-singh-01b02a298/" target="_blank">
         LinkedIn</a>
            </div>

          
        
    
  

  

          
    
        

        <a href="mailto:pallavisingh7669@gmail.com"
        className="btn">Contact Me</a>
        
        
      </div>
    </div>
  );
}

export default App;