import React from "react";
import "./style.css";


function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info container">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">Score: {props.count}</li>
          <li className="nav-item">High Score: {props.highScore}</li>
          <li className="nav-item">{props.message}</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
