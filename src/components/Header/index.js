import React from "react";
import "./style.css";

function Header(props) {
  return (
    <ul className="nav navbar">
      <li className="nav-item">{props.children[0]}</li>
      <li className="nav-item">
        <div class={props.alert}>
          {props.children[1]}
          {props.message}
        </div>
      </li>
      <li className="nav-item">
        {props.children[2]}
        {props.score}
        {props.children[3]}
        {props.topscore}
      </li>
    </ul>
  );
}

export default Header;
