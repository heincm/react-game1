import React from "react";
import "./style.css";


function Navbar(props) {
  return (
    <nav className="jumbotron jumbotron-light container">
      <div>
       
         <p>Score: {props.count}</p>
         <p>High Score: {props.highScore}</p>
         <p>{props.message}</p>
    
      </div>
    </nav>
  );
}

export default Navbar;
