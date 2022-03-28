import React from "react";
import "./style.css";


function Scorebar(props) {
  return (
    <div className="container" id="scoreJumbo">
      <div className="row">
        <div className="col-lg-6">
          <p className="text-center font-weight-bold">Score: {props.count}</p>
        </div>
        <div className="col-lg-6">
          <p className="text-center font-weight-bold">High Score: {props.highScore}</p>
        </div>
      </div>
      <p className="text-center font-weight-bold" style={{color:props.color}}>{props.message}</p>
    </div>
  );
}

export default Scorebar;
