import React from "react";
import "./style.css";

function AvengerCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} onClick={props.handleOnClick}/>
            </div>
        </div>
    );
}

export default AvengerCard;
