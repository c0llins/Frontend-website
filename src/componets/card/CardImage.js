import React from "react";

function CardImage(props) {
  return <img src={props.imgLink} alt={props.imgAlt} class="img-fluid" />;
}
export default CardImage;
