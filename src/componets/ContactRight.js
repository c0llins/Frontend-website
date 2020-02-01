import React from "react";
import phJv from "../assets/images/jv.jpg";

// import { Container } from './styles';

export default function Contact(props) {
  return (
    <div className="widget widget-form">
      <h3 className="widget-title">Contact Listing Agent</h3>
      <div className="contct-info">
        <img src={phJv} alt="" />

        {/* <img src={props.img} alt="" /> */}
        <div className="contct-nf">
          <h3>{props.name}</h3>
          <h4>Douglas and Eleman Agency</h4>
          <span>
            <i className="la la-phone"></i>
            {props.phone}
          </span>
        </div>
      </div>
      <div className="post-comment-sec">
        <form>
          <div className="form-field">
            <input type="text" name="name" placeholder="Seu Nome" />
          </div>
          <div className="form-field">
            <input type="text" name="email" placeholder="Seu Email" />
          </div>
          <div className="form-field">
            <input type="text" name="phone" placeholder="Seu Telefone" />
          </div>
          <div className="form-field">
            <textarea name="message" placeholder="Sua Mensagem"></textarea>
          </div>
          <button type="submit" className="btn2">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
