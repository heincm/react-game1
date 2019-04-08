import React from "react";

// If we want a child component to update or pass data to its parent, we can create a method inside the parent for the update
// Then bind the method to the parent, and pass it to the child as a prop

function Navbar(props) {
  return (
    <div className="card-body">
      <p className="card-text">Score: {props.count}</p>
      <p className="card-text">High Score: {props.highScore}</p>
      <p className="card-text">{props.message}</p>
    </div>
  );
}

export default Navbar;