import React from "react";
import "./style.css";

function Banner(props) {
  return (
    <div className="jumbotron">
      <h1>{props.children[0]}</h1>
      <h3>{props.children[1]}</h3>
      <div class={props.alert}>
          {props.message}
        </div>
    </div>
  );
}

export default Banner;
