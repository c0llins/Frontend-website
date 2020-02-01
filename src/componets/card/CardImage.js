import React from "react";

function CardImage(props) {
  return <img src={props.imgLink} alt={props.imgAlt} className="img-fluid" />;
}
export default CardImage;
