import React from "react";
import "./style.css";

function MemoryCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
      </div>
      <span onClick={() => props.trackCard(props.id, props.name)} className="remove">
      x
      </span>
    </div>
  );
}

export default MemoryCard;
