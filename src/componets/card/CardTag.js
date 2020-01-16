import React from "react";

function CardTag(props) {
  return (
    <span className="tag">
      {props.name}
      {<button className="delete is-small"></button>}
    </span>
  );
}
export default CardTag;
