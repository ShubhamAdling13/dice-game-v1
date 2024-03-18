
import React from "react";
function Footer(){
    const currentyear = new Date().getFullYear();
    return(<>
     <footer >
    
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
        <p>&copy; {currentyear} Shubham Sunil Adling</p>
      </div>
     
    </footer>

  
    
    </>)
}

export default Footer ;