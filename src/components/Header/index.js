import React from "react";
import "./style.css";

function Header(props) {
  return (
      <ul className="nav navbar">
        <li className="nav-item">{props.children[0]}</li>
        <li className="nav-item">{props.children[1]}</li>
        <li className="nav-item">{props.children[2]}{props.score}</li>
      </ul>
  );
}

export default Header;