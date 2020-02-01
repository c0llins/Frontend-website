import React from "react";
import { Link } from "react-router-dom";
import CardImage from "./CardImage";
import CardPrice from "./CardPrice";
import CardTitle from "./CardTitle";

export default function Card(props) {
  return props.name ? (
    <div className="card">
      <Link to={`/property/${props.id}`}>
        <div className="img-block">
          <div className="overlay"></div>
          <CardImage imgLink={props.imgLink} imgAlt={props.imgAlt}></CardImage>
          <div className="rate-info">
            <CardPrice price={props.price} />

            <span>{props.type}</span>
          </div>
        </div>
      </Link>
      <div className="card-body">
        <Link to={`/property/${props.id}`}>
          <CardTitle name={props.name} />

          <p>
            <i className="la la-map-marker">{props.location}</i>
          </p>
        </Link>
        {props.info.map(item => {
          return (
            <ul key={item.toString()}>
              <li>{item.bath} banheiros</li>
              <li>{item.beds} quartos</li>
              <li>{item.rooms} salas</li>
            </ul>
          );
        })}
      </div>
      <div className="card-footer">
        <a href="#a" className="pull-left">
          <i className="la la-arrow-circle-right"></i>
        </a>
        {/* <a href="#a" className="pull-right">
          <i className="la la-calendar-check-o"></i>Há 2 dias
        </a> */}
      </div>
      {/* <a href="#a" classNameName="ext-link"></a> */}
    </div>
  ) : (
    /* <div className="tags are-medium">
            {props.tags.map(tag => (
              <CardTag key={String(Symbol())} name={tag}></CardTag>
            ))}
          </div> */

    <></>
  );
}
