import React from 'react';
import "./style.css"

function Jumbotron() {
    return (
    <div className="jumbotron jumbotron-fluid" id="topJumbo">
        <div className="container">
            <h1 className="text-white display-3">Avenger Clicky Game!</h1>
            <p className="text-white lead">Try not to click the same avenger twice.</p>
        </div>
    </div>
    );
};

export default Jumbotron;