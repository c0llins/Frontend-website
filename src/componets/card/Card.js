import React from "react";
import { Link } from 'react-router-dom';
import CardImage from "./CardImage";
import CardPrice from "./CardPrice";
import CardTitle from "./CardTitle";

export default function Card(props) {
  return props.name ? (
    <div className="card">
      
      <Link to={`/property/${props.id}`}>
        <div class="img-block">
          <div class="overlay"></div>
          <CardImage imgLink={props.imgLink} imgAlt={props.imgAlt}></CardImage>
          <div class="rate-info">
            <CardPrice price={props.price} />

            <span>{props.type}</span>
          </div>
        </div>
        </Link>
      <div class="card-body">
      <Link to="/property">
       
          <CardTitle name={props.name} />

          <p>
            <i class="la la-map-marker">{props.location}</i>
          </p>
          </Link>
          { props.info.map(item => {
                              return(
                            <ul key={item.toString()}>
                           
                                <li>{item.bath} banheiros</li>
                                <li>{item.beds} quartos</li>
                                <li>{item.rooms} salas</li>
                                
                              
                              
                            </ul>
                            )
                            })}
      </div>
      <div class="card-footer">
        <a href="#a" class="pull-left">
          <i class="la la-arrow-circle-right"></i>
        </a>
        {/* <a href="#a" class="pull-right">
          <i class="la la-calendar-check-o"></i>Há 2 dias
        </a> */}
      </div>
      {/* <a href="#a" className="ext-link"></a> */}
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
